import { types, scopes, observatories } from './datasource.js'

const container = document.getElementsByTagName('section')[0]
const count = document.getElementsByTagName('mark')[0]

count.innerHTML = observatories.length.toString()

container.innerHTML = observatories.map(createObservatoryComponent).join('')

function createObservatoryComponent({
  name,
  website,
  email,
  twitter,
  parents,
  scope,
  type,
  docs,
  members,
  comment,
}) {
  const typeObj = types.find(({ key }) => key === type)
  const scopeObj = scopes.find(({ key }) => key === scope)

  return `
    <article class="contrast" target="modal-example" data-observatory="${name}">
      <h2>${name}</h2>
      ${parents ? `<div>${parents.join(', ')}</div>` : ''}
      ${website ? `<p><a href="${website}">Sitio web</a></p>` : ''}
      ${comment ? `<div>${comment}</div>` : ''}
      <div class="badges">
        ${typeObj ? `<div class="${typeObj.key}">${typeObj.name}</div>` : ''}
        ${scopeObj ? `<div class="${scopeObj.key}">${scopeObj.name}</div>` : ''}
      </div>
    </article>
  `
}

// -----------------------------------------------------------------------------

// Config
const isOpenClass = 'modal-is-open'
const openingClass = 'modal-is-opening'
const closingClass = 'modal-is-closing'
const scrollbarWidthCssVar = '--pico-scrollbar-width'
const animationDuration = 400 // ms
let visibleModal = null

// Toggle modal
const toggleModal = (event) => {
  event.preventDefault()
  const modal = document.getElementById(event.currentTarget.dataset.target)

  if (!modal) return
  modal && (modal.open ? closeModal(modal) : openModal(modal, event))
}

// Open modal
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

  const div = modal.getElementsByTagName('div')[0]
  const h3 = modal.getElementsByTagName('h3')[0]

  const observatory = observatories.find(
    ({ name }) => name === event.currentTarget.dataset.observatory
  )
  const json = JSON.stringify(observatory, null, 2)

  div.innerHTML = `<pre>${json}</pre>`
  h3.innerText = observatory.name

  modal.showModal()
}

// Close modal
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

// Close with a click outside
document.addEventListener('click', (event) => {
  if (visibleModal === null) return
  const modalContent = visibleModal.querySelector('article')
  const isClickInside = modalContent.contains(event.target)
  !isClickInside && closeModal(visibleModal)
})

// Close with Esc key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && visibleModal) {
    closeModal(visibleModal)
  }
})

// Get scrollbar width
const getScrollbarWidth = () => {
  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth
  return scrollbarWidth
}

// Is scrollbar visible
const isScrollbarVisible = () => {
  return document.body.scrollHeight > screen.height
}

// -----------------------------------------------------------------------------

document.querySelectorAll('article').forEach((article) => {
  article.addEventListener('click', toggleModal)
})

document.querySelectorAll('dialog button').forEach((article) => {
  article.addEventListener('click', toggleModal)
})
