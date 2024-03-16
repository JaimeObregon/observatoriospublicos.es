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

const observatories = [
  {
    name: 'Observatorio contra el Fraude y la Corrupción Sanitaria',
    parent: 'Ministerio de Sanidad',
    description:
      '<a href="https://twitter.com/Monica_Garcia_G/status/1768227454223565199">Anunciado</a> por la ministra de Sanidad el 14 de marzo de 2024',

    type: 'public',
  },
]

const ul = document.getElementsByTagName('ul')[0]

console.log(ul)

ul.innerHTML = observatories
  .map(
    ({ name, parent, description, type }) => `
    <li>
      <h2>${name}</h2>
      <p>${parent}</p>
      <p>${description}</p>
      <p>${types.find(({ key }) => key === type).name}</p>
    </li>
`
  )
  .join('')

console.log(':)')
