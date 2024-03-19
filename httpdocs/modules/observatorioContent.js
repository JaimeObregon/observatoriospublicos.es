import { scopes, types } from '../datasource.js'

// helpers para crear el contenido del modal
function getParentsSection(parents) {
  if (!parents) return ''

  return `
      <p>
        <strong>Depende de</strong>:
        <ul>
          ${parents.map((parent) => `<li>${parent}</li>`).join('')}
       </ul>
      </p>
    `
}

export function createObservatoryDetailsComponent(observatory) {
  const { scope, type, description, location, website, docs, parents } =
    observatory

  const scopeObj = scopes.find(({ key }) => key === scope)

  const typeText = type && types.find(({ key }) => key === type).name

  return `
      <section>
        ${location ? `<small>📍 ${location}</small>` : ''}
        ${
          description
            ? `<p>${description}</p>`
            : `
        <p>
          <small
            >Debido al retraso en los fondos que nos ha prometido la ministra
            esta sección está temporalmente en construcción.
            <a href="https://www.youtube.com/watch?v=FSJFTa2jvhk"
              >Estamos trabajando en ellou</a
            >.</small
          >
        </p>
        `
        }
        ${getParentsSection(parents)}
        ${website ? `<p><a href="${website}">🌐 Sitio web</a></p>` : ''}
        ${scopeObj ? `<span class="badge">${scopeObj.name}</span>` : ''}
        ${typeText ? `<span class="badge">${typeText}</span>` : ''}
      </section>`
}

// Helpers para crear las cards de observatorios

function observatoryId(id) {
  return `<span>#${id}</span>`
}

function observatoryTitle({ scope, location }) {
  if (!scope) return ''
  return `
      <span>
        ${scope.key === 'municipal' ? location : scope.name}
      </span>
      `
}

function observatoryName(name) {
  if (!name) return ''
  return `<h2>${name}</h2>`
}

function observatoryDescription(description) {
  if (!description) return ''
  return `<div>${description}</div>`
}

export function createObservatoryCardComponent({
  id,
  name,
  scope,
  description,
  location,
}) {
  const scopeObj = scopes.find(({ key }) => key === scope)

  return `
      <article class="contrast" data-target="observatory" data-observatory="${name}">
        <small>
          ${observatoryTitle({ scopeObj, location })}
          ${observatoryId(id)}
        </small>
        ${observatoryName(name)}
        ${observatoryDescription(description)}
      </article>`
}
