import { scopes } from '../datasource.js'
import {
  createObservatoryDetailsComponent,
  createObservatoryCardComponent,
} from './observatorioContent.js'
import {
  initSearchBar
} from './searchbar.js'

// Ventana modal
let visibleModal = null

// Observatorios en ventana
let currentObservatories = null;

/**
 * Genera la lista de observatorios en el HTML
 * 
 * @param {*} thisObservatories Lista de observatorios
 */
export function updateObservatories(thisObservatories){
  const container = document.querySelector('x-catalog')
  container.innerHTML = thisObservatories
    .map((observatory, index) =>
      createObservatoryCardComponent(index + 1, observatory)
    )
    .join('')

  // Para que hacer click en los links dentro de las cards de observatiorios no abra el modal
  const modalLinks = document.querySelectorAll('x-catalog article a')
  modalLinks.forEach((link) => {
    link.addEventListener('click', function (event) {
      event.preventDefault()
      event.stopPropagation()
      window.open(link.href, '_self')
    })
  })

  document.querySelectorAll('x-catalog article').forEach((article) => {
    article.addEventListener('click', toggleModal)
  })

  document.querySelectorAll('dialog button').forEach((article) => {
    article.addEventListener('click', toggleModal)
  })

  // Se copia la lista en curso
  currentObservatories = thisObservatories.slice();
}

async function main() {
  const observatories = await fetch('/observatories.json').then((x) => x.json())

  const errors = [
    ...observatories
      .filter(({ scope }) => !scope)
      .map(({ scope }) => `Ámbito desconocido: "${scope}"`),
    ...observatories
      .filter(
        ({ scope }) => scope && !scopes.map(({ key }) => key).includes(scope)
      )
      .map(({ scope }) => `Ámbito desconocido: "${scope}"`),
  ]

  if (errors.length) {
    // alert(`Hay errores en el catálogo:\n` + errors.join('\n'))
  }

  // Contador total
  const count = document.querySelector('mark')
  count.innerHTML = observatories.length.toString()

  // Se actualizan los observatorios
  updateObservatories(observatories);

  // Inicialización de la barra de búsqueda
  const container = document.querySelector('x-catalog')
  initSearchBar(container, observatories);

  document.addEventListener('click', (event) => {
    if (visibleModal === null) return
    const modalContent = visibleModal.querySelector('article')
    const isClickInside = modalContent.contains(event.target)
    !isClickInside && closeModal(visibleModal)
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && visibleModal) {
      closeModal(visibleModal)
    }
  })
}

const isOpenClass = 'modal-is-open'
const openingClass = 'modal-is-opening'
const closingClass = 'modal-is-closing'
const scrollbarWidthCssVar = '--pico-scrollbar-width'
const animationDuration = 400 // ms

const toggleModal = (event) => {
  event.preventDefault()
  const modal = document.getElementById(event.currentTarget.dataset.target)

  if (!modal) return
  modal && (modal.open ? closeModal(modal) : openModal(modal, event))
}

const openModal = (modal, event) => {
  const { documentElement: html } = document
  const scrollbarWidth = getScrollbarWidth()
  if (scrollbarWidth) {
    html.style.setProperty(scrollbarWidthCssVar, `${scrollbarWidth}px`)
  }
  html.classList.add(isOpenClass, openingClass)
  setTimeout(() => {
    visibleModal = modal
    html.classList.remove(openingClass)
  }, animationDuration)

  const div = modal.querySelector('#observatory-content')
  const h3 = modal.querySelector('#observatory-title')

  const observatory = currentObservatories.find(
    ({ name }) => name === event.currentTarget.dataset.observatory
  )
  const json = JSON.stringify(observatory, null, 2)
  div.innerHTML = createObservatoryDetailsComponent(observatory)
  h3.innerText = observatory.name

  modal.showModal()
}

const closeModal = (modal) => {
  visibleModal = null
  const { documentElement: html } = document
  html.classList.add(closingClass)
  setTimeout(() => {
    html.classList.remove(closingClass, isOpenClass)
    html.style.removeProperty(scrollbarWidthCssVar)
    modal.close()
  }, animationDuration)
}

const getScrollbarWidth = () => {
  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth
  return scrollbarWidth
}

main()
