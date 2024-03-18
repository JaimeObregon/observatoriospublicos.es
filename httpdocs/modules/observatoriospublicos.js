import { scopes, observatories } from '../datasource.js'

const container = document.querySelector('x-catalog')
const count = document.querySelector('mark')

count.innerHTML = observatories.length.toString()

container.innerHTML = observatories.map(createObservatoryComponent).join('')

function createObservatoryComponent({ name, scope, description }) {
  const scopeObj = scopes.find(({ key }) => key === scope)

  return `
    <article class="contrast" data-target="observatory" data-observatory="${name}">
      ${scopeObj ? `<small>${scopeObj.name}</small>` : ''}
      <h2>${name}</h2>
      ${description ? `<div>${description}</div>` : ''}
    </article>`
}

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

  const div = modal.querySelector('div')
  const h3 = modal.querySelector('h3')

  const observatory = observatories.find(
    ({ name }) => name === event.currentTarget.dataset.observatory
  )
  const json = JSON.stringify(observatory, null, 2)

  div.innerHTML = `<pre>${json}</pre>`
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

const isScrollbarVisible = () => {
  return document.body.scrollHeight > screen.height
}

document.querySelectorAll('article').forEach((article) => {
  article.addEventListener('click', toggleModal)
})

document.querySelectorAll('dialog button').forEach((article) => {
  article.addEventListener('click', toggleModal)
})
