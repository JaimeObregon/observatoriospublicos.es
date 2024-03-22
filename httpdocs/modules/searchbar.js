import { updateObservatories } from './observatoriospublicos.js'

// Estategia de normalización del texto:
// "NFC": Canonical Decomposition, followed by Canonical Composition.
// "NFD": Canonical Decomposition.
// "NFKC": Compatibility Decomposition, followed by Canonical Composition
// "NFKD": Compatibility Decomposition.
const normaliceStategy = 'NFD'

// Claves de filtrado para el objeto
const filterKeys = ['scope', 'name', 'description']

/**
 * Inicia la barra de búsqueda
 *
 * @param {*} parent        Elemento del HTML vecino donde será inyectado el elemento
 * @param {*} observatories Lista de observatorios inicial
 */
export function initSearchBar(parent, observatories) {
  // Puntero a observatorios
  const originalObservatories = addFilterElement(observatories.slice())

  // Crear el input de búsqueda
  const searchInput = document.createElement('input')
  searchInput.setAttribute('type', 'text')
  searchInput.setAttribute('id', 'searchbar')
  searchInput.setAttribute('placeholder', 'Filtrar…')
  searchInput.setAttribute('autofocus', '')
  searchInput.style.width = '100%'

  // Se añade al padre antes de los observatorios
  parent.parentNode.insertBefore(searchInput, parent)

  // Función para filtrar observatorios basado en la búsqueda
  searchInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value
    const filteredObservatories = filterObservatories(
      searchTerm,
      originalObservatories
    )
    updateObservatories(filteredObservatories)
  })
}

/**
 * Genera el campo de filtrado en la lista de observatorios
 *
 * @param {*} thisObservatories Lista de observatorios
 * @param  {...any} attributes  Atributos que serán añadidos al campo de filtrado
 *
 * @returns Obtiene la lista de observatorios con el campo de filtrado añadido
 */
function addFilterElement(thisObservatories) {
  return thisObservatories.map((element) => {
    const filterElement = filterKeys
      .map((attribute) => normalizeText(element[attribute] || ''))
      .join(' ')
    return { ...element, filterElement }
  })
}

/**
 * Filtrado tokenizado de los observatories a partir de una cadena que representará los términos de búsqueda
 *
 * @param {*} searchTerm                 Términos de búsqueda
 * @param {*} thisOriginalObservatories  Observatorios de filtrado
 *
 * @returns La lista resultante
 */
function filterObservatories(searchTerm, thisOriginalObservatories) {
  // Separamos el término de búsqueda en palabras individuales
  const searchTerms = normalizeText(searchTerm).split(/\s+/)

  // Aplicamos cada término de búsqueda sucesivamente
  return searchTerms.reduce((filteredObservatories, term) => {
    return filteredObservatories.filter((observatory) =>
      observatory.filterElement.includes(term)
    )
  }, thisOriginalObservatories)
}

/**
 * Normalización de texto.
 *
 * @param {*} text Texto a normalizar
 *
 * @returns Texto normalizado
 */
function normalizeText(text) {
  if (!text.trim) return ''
  return text
    .trim()
    .normalize(normaliceStategy)
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}
