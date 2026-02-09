let map = null

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

function buildPopup(observatories) {
  if (!observatories.length) return ''

  if (observatories.length === 1) {
    const o = observatories[0]
    const name = escapeHtml(o.name)
    const location = o.location ? escapeHtml(o.location) : null
    const website = o.website ? escapeAttr(o.website) : null

    return `
      <div class="map-popup">
        <strong>${name}</strong>
        ${location ? `<br /><small>${location}</small>` : ''}
        ${website ? `<br /><a href="${website}">Sitio web</a>` : ''}
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
      const website = o.website ? escapeAttr(o.website) : null
      return `<li>${website ? `<a href="${website}">${name}</a>` : name}</li>`
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
    scrollWheelZoom: false,
  })

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map)

  const layer = L.featureGroup().addTo(map)

  for (const group of groups) {
    const count = group.observatories.length
    const radius = 4 + Math.min(8, Math.log2(count) * 2)

    const marker = L.circleMarker([group.lat, group.lon], {
      radius,
      weight: 1,
      color: '#111',
      fillColor: '#111',
      fillOpacity: 0.65,
    })

    marker.bindPopup(buildPopup(group.observatories))
    marker.addTo(layer)
  }

  if (layer.getLayers().length) {
    map.fitBounds(layer.getBounds(), { padding: [24, 24] })
  } else {
    map.setView([40.416782, -3.703507], 5)
  }
}
