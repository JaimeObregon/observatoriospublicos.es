import { types, scopes, observatories } from './datasource.js'

const html = (strings, ...values) => {
  return String.raw({ raw: strings }, ...values)
}

const container = document.getElementsByTagName('section')[0]
const count = document.getElementsByTagName('mark')[0]

count.innerHTML = observatories.length

container.innerHTML = observatories
  .map(
    ({
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
    }) => html`
      <article>
        <h2>${name}</h2>
        ${parents ? `<div>${parents.join(', ')}</div>` : ''}
        ${website ? `<p><a href="${website}">Sitio web</a></p>` : ''}
        ${comment ? `<div>${comment}</div>` : ''}
        <div class="badges">
          ${type ? `<div>${types.find(({ key }) => key === type).name}</div>` : ''}
          ${scope ? `<div>${scopes.find(({ key }) => key === scope).name}</div>` : ''}
        </div>
      </article>
    `
  )
  .join('')

console.log(observatories.length)
