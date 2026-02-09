let map = null
let pointsLayer = null
let clusteredPoints = null

const clusterGridSize = 64 // px
const maxPopupItems = 15

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll('`', '&#96;')
}

function createCountIcon(L, count, variant) {
  const safeCount = Number.isFinite(count) ? Math.max(1, Math.round(count)) : 1
  const size = Math.round(22 + Math.min(18, Math.log2(safeCount) * 6))

  return L.divIcon({
    className: 'map-pin-wrapper',
    html: `<div class="map-pin ${variant === 'cluster' ? 'map-pin--cluster' : ''}" style="width:${size}px;height:${size}px"><span>${safeCount}</span></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2],
  })
}

function buildPopup(observatories) {
  if (!observatories.length) return ''

  if (observatories.length === 1) {
    const o = observatories[0]
    const name = escapeHtml(o.name)
    const location = o.location ? escapeHtml(o.location) : null
    const observatoryAttr = o.name ? escapeAttr(o.name) : ''

    return `
      <div class="map-popup">
        <strong><a class="map-open-observatory" href="#" data-observatory="${observatoryAttr}">${name}</a></strong>
        ${location ? `<br /><small>${location}</small>` : ''}
      </div>
    `
  }

  const sorted = observatories
    .slice()
    .sort((a, b) => String(a.name).localeCompare(String(b.name), 'es'))

  const list = sorted.slice(0, maxPopupItems)
  const remaining = sorted.length - list.length

  const itemsHtml = list
    .map((o) => {
      const name = escapeHtml(o.name)
      const observatoryAttr = o.name ? escapeAttr(o.name) : ''
      return `<li><a class="map-open-observatory" href="#" data-observatory="${observatoryAttr}">${name}</a></li>`
    })
    .join('')

  return `
    <div class="map-popup">
      <strong>${observatories.length} observatorios</strong>
      <ul>${itemsHtml}</ul>
      ${remaining > 0 ? `<small>… y ${remaining} más.</small>` : ''}
    </div>
  `
}

function getValidCoordinates(observatory) {
  const coords = observatory.coordinates
  if (!coords) return null

  const lat = Number(coords.lat)
  const lon = Number(coords.lon)
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null

  return { lat, lon }
}

function groupByCoordinates(observatories) {
  const groups = new Map()
  let withCoordinates = 0

  for (const o of observatories) {
    const coords = getValidCoordinates(o)
    if (!coords) continue

    withCoordinates += 1

    // Agrupamos por coordenada para evitar marcadores solapados.
    const key = `${coords.lat.toFixed(6)},${coords.lon.toFixed(6)}`
    const group = groups.get(key) || { ...coords, observatories: [] }
    group.observatories.push(o)
    groups.set(key, group)
  }

  return {
    groups: [...groups.values()],
    withCoordinates,
  }
}

function clusterByZoom(map, L, points) {
  const zoom = map.getZoom()
  const buckets = new Map()

  for (const point of points) {
    const projected = map.project([point.lat, point.lon], zoom)
    const x = Math.floor(projected.x / clusterGridSize)
    const y = Math.floor(projected.y / clusterGridSize)
    const key = `${x},${y}`

    const bucket = buckets.get(key) || {
      points: 0,
      count: 0,
      sumX: 0,
      sumY: 0,
      observatories: [],
    }

    bucket.points += 1
    bucket.count += point.count
    bucket.sumX += projected.x * point.count
    bucket.sumY += projected.y * point.count
    bucket.observatories.push(...point.observatories)

    buckets.set(key, bucket)
  }

  return [...buckets.values()].map((bucket) => {
    const centerPoint = L.point(
      bucket.sumX / bucket.count,
      bucket.sumY / bucket.count,
    )
    const center = map.unproject(centerPoint, zoom)

    return {
      center,
      count: bucket.count,
      isCluster: bucket.points > 1,
      observatories: bucket.observatories,
    }
  })
}

function renderPoints({ L }) {
  if (!map || !pointsLayer || !clusteredPoints) return

  pointsLayer.clearLayers()

  const items = clusterByZoom(map, L, clusteredPoints)

  for (const item of items) {
    const icon = createCountIcon(
      L,
      item.count,
      item.isCluster ? 'cluster' : 'point',
    )
    const marker = L.marker(item.center, { icon })
    marker.bindPopup(buildPopup(item.observatories))
    marker.addTo(pointsLayer)
  }
}

export function initMap(observatories) {
  if (map) return

  const container = document.getElementById('observatories-map')
  if (!container) return

  const stats = document.getElementById('observatories-map-stats')

  if (!window.L) {
    if (stats) {
      stats.textContent = 'No se ha podido cargar el mapa.'
    }
    return
  }

  const { groups, withCoordinates } = groupByCoordinates(observatories)
  const withoutCoordinates = observatories.length - withCoordinates

  if (stats) {
    stats.textContent = `${withCoordinates} con coordenadas (${groups.length} puntos) · ${withoutCoordinates} sin coordenadas`
  }

  const { L } = window

  map = L.map(container, {
    scrollWheelZoom: true,
    touchZoom: true,
  })

  container.addEventListener('click', (event) => {
    const target = event.target
    const link =
      target instanceof Element
        ? target.closest('a.map-open-observatory')
        : null
    if (!link) return

    event.preventDefault()
    event.stopPropagation()

    const name = link.dataset.observatory
    if (!name) return

    if (typeof window.openObservatoryModal === 'function') {
      window.openObservatoryModal(name)
      map.closePopup()
    }
  })

  // Permite zoom por rueda/pinch solo cuando el usuario lo hace de forma intencional
  // (Ctrl/Cmd + scroll o pinch en trackpad, que suele marcar ctrlKey).
  // Asi evitamos que el mapa "robe" el scroll normal de la pagina.
  container.addEventListener(
    'wheel',
    (event) => {
      if (!(event.ctrlKey || event.metaKey)) {
        event.stopImmediatePropagation()
      }
    },
    { capture: true },
  )

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map)

  clusteredPoints = groups.map((group) => ({
    lat: group.lat,
    lon: group.lon,
    count: group.observatories.length,
    observatories: group.observatories,
  }))

  pointsLayer = L.layerGroup().addTo(map)
  renderPoints({ L })

  map.on('zoomend', () => renderPoints({ L }))

  if (clusteredPoints.length) {
    map.fitBounds(
      L.latLngBounds(clusteredPoints.map(({ lat, lon }) => [lat, lon])),
      { padding: [24, 24] },
    )
  } else {
    map.setView([40.416782, -3.703507], 5)
  }
}
