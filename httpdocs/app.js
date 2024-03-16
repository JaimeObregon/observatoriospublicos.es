import observatories from './assets/observatories.json' assert { type: 'json' }

console.log(observatories)

const types = [
  {
    key: 'public',
    name: 'Público',
  },
  {
    key: 'mixed',
    name: 'Público-privado',
  },
]

const scopes = [
  {
    key: 'estatal',
    name: 'Estatal',
  },
  {
    key: 'cataluna',
    name: 'Cataluña',
  },
]

const ul = document.getElementsByTagName('ul')[0]

console.log(ul)

ul.innerHTML = observatories
  .map(
    ({ name, parent, description, type, scope }) => `
    <li>
      <h2>${name}</h2>
      <p>${parent}</p>
      <p>${description ?? '…'}</p>
      <p>Tipo: ${types.find(({ key }) => key === type).name}</p>
      <p>Ámbito: ${scopes.find(({ key }) => key === scope).name}</p>
    </li>
`
  )
  .join('')

console.log(':)')
