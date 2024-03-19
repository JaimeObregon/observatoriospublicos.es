import { scopes, observatories } from '../datasource.js'
import { createObservatoryDetailsComponent, createObservatoryCardComponent } from './observatorioContent.js'

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

const container = document.querySelector('x-catalog')
const count = document.querySelector('mark')

count.innerHTML = observatories.length.toString()

container.innerHTML = observatories.map(createObservatoryCardComponent).join('')

const isOpenClass = 'modal-is-open'
const openingClass = 'modal-is-opening'
const closingClass = 'modal-is-closing'
const scrollbarWidthCssVar = '--pico-scrollbar-width'
const animationDuration = 400 // ms
let visibleModal = null

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

  const observatory = observatories.find(
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

const getScrollbarWidth = () => {
  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth
  return scrollbarWidth
}

document.querySelectorAll('x-catalog article').forEach((article) => {
  article.addEventListener('click', toggleModal)
})

document.querySelectorAll('dialog button').forEach((article) => {
  article.addEventListener('click', toggleModal)
})


// Para que hacer click en los links dentro de las cards de observatiorios no abra el modal
document.addEventListener('DOMContentLoaded', function () {
  const modalLinks = document.querySelectorAll('x-catalog article a');

  modalLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      window.open(link.href, '_self');
    });
  });
});
