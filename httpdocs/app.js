const types = [
  {
    key: 'public',
    name: 'Público'
  },
  {
    key: 'mixed',
    name: 'Público-privado'
  }
]

const scopes = [
  {
    key: 'estatal',
    name: 'Estatal',
  },
  {
    key: 'ayuntamiento',
    name: 'Ayuntamiento',
  },
  {
    key: 'cataluna',
    name: 'Cataluña',
  },
  {
    key: 'madrid',
    name: 'Madrid',
  },
  {
    key: 'pais-vasco',
    name: 'País Vasco',
  },
]

import { observatories } from './observatories.js'

const container = document.getElementsByTagName('section')[0]
const count = document.getElementsByTagName('mark')[0]

count.innerHTML = observatories.length.toString()

container.innerHTML = observatories
  .map(createObservatoryComponent)
  .join('')

function createObservatoryComponent({ name, website, email, parents, scope, type, docs, members, comment }) {
  const typeObj = types.find(({ key }) => key === type)
  const scopeObj = scopes.find(({ key }) => key === scope)

  return `
    <article>
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
