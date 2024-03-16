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

const observatories = [
  {
    name: 'Observatorio contra el Fraude y la Corrupción Sanitaria',
    parent: 'Ministerio de Sanidad',
    description:
      '<a href="https://twitter.com/Monica_Garcia_G/status/1768227454223565199">Anunciado</a> por la ministra de Sanidad el 14 de marzo de 2024',
    scope: 'estatal',
    type: 'public',
  },
  {
    name: 'Observatorio de Salud de las Mujeres',
    parent:
      'Secretaría de Estado de Sanidad | Dirección General de Salud Pública | Ministerio de Sanidad',
    website: 'https://www.observatoriosaludmujeres.es',
    scope: 'estatal',
    type: 'public',
  },
  {
    name: 'Observatorio del ferrocarril en España',
    parent: 'Ministerio de Transportes y Movilidad Sostenible',

    website:
      'https://www.transportes.gob.es/ferrocarriles/observatorios/observatorio-del-ferrocarril-en-espana',
    scope: 'estatal',
    type: 'public',
  },
]

const ul = document.getElementsByTagName('main')[0]

console.log(ul)

ul.innerHTML = observatories
  .map(
    ({ name, parent, description, type, scope }) => `
    <article>
      <h2>${name}</h2>
      <p>${parent}</p>
      <p>${description ?? '…'}</p>
      <p>Tipo: ${types.find(({ key }) => key === type).name}</p>
      <p>Ámbito: ${scopes.find(({ key }) => key === scope).name}</p>
    </article>
`
  )
  .join('')

console.log(':)')
