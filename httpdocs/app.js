const html = (strings, ...values) => {
  return String.raw({ raw: strings }, ...values)
}

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
  // {
  //   name: '', // Nombre del observatorio
  //   website: '', // Sitio web
  //   email: '', // Correo electrónico,
  //   parents: [], // Organismos públicos de los que depende
  //   scope: '', // Ámbito territorial: estatal, comunidad autónoma o ayuntamiento,
  //   type: '', // Si es público o público-privado
  //   docs: [], // Muestra de algunos de sus últimos informes publicados
  //   members: [], // Algunos Organismos que lo componen, si es el caso
  //   comment: '', //
  // },

  {
    name: 'Observatorio contra el Fraude y la Corrupción Sanitaria',
    parents: ['Ministerio de Sanidad'],
    comment: html`<a
        href="https://twitter.com/Monica_Garcia_G/status/1768227454223565199"
        >Anunciado</a
      >
      por la ministra de Sanidad el 14 de marzo de 2024.`,
    scope: 'estatal',
    type: 'public',
  },
  {
    name: 'Observatorio de Salud de las Mujeres',
    parents: [
      'Ministerio de Sanidad',
      'Secretaría de Estado de Sanidad',
      'Dirección General de Salud Pública',
    ],
    website: 'https://www.observatoriosaludmujeres.es',
    scope: 'estatal',
    type: 'public',
  },
  {
    name: 'Observatorio del ferrocarril en España',
    parents: ['Ministerio de Transportes y Movilidad Sostenible'],
    docs: [
      {
        name: 'Informe 2022',
        url: 'https://cdn.transportes.gob.es/portal-web-transportes/ferroviario/observatorio/ofe_2022_feb2024_v3.3_prot.pdf',
      },
      {
        name: 'Informe 2021',
        url: 'https://cdn.mitma.gob.es/portal-web-drupal/ferroviario/observatorio/ofe_2021_feb2023_v2.pdf',
      },
      {
        name: 'Informe 2020',
        url: 'https://cdn.mitma.gob.es/portal-web-drupal/ferroviario/observatorio/ofe_2020.pdf',
      },
      {
        name: 'Informe 2019',
        url: 'https://cdn.mitma.gob.es/portal-web-drupal/ferroviario/observatorio/ofe_2019_mar2021.pdf',
      },
      {
        name: 'Informe 2018',
        url: 'https://cdn.mitma.gob.es/portal-web-drupal/ferroviario/observatorio/ofe2018_rev.pdf',
      },
    ],
    website:
      'https://www.transportes.gob.es/ferrocarriles/observatorios/observatorio-del-ferrocarril-en-espana',
    scope: 'estatal',
    type: 'public',
  },
  {
    name: "Observatori Municipal de l'Habitatge d'Alcoi",
  },
  {
    name: 'Observatorio Autonómico dos Ríos de Galicia',
  },
  {
    name: 'Observatorio da Sociedade da Información e a Modernización de Galicia',
  },
  {
    name: 'Observatorio da Violencia no Contorno Laboral',
  },
  {
    name: 'Observatorio de Administración Electrónica',
  },
  {
    name: 'Observatorio de Igualdad de Oportunidades entre Mujeres y Hombres',
  },
  {
    name: 'Observatorio de la Cadena Alimentaria',
  },
  {
    name: 'Observatorio de la Ciencia Ciudadana',
  },
  {
    name: 'Observatorio de la Gestión Empresarial en Biodiversidad',
  },
  {
    name: 'Observatorio de la Infancia de España',
  },
  {
    name: 'Observatorio de la Infancia de Andalucía',
  },
  {
    name: 'Observatorio de la Infancia de Cataluña / Observatori dels Drets dels Infants',
  },
  {
    name: 'Observatorio de la Infancia y la Adolescencia de Asturias',
  },
  {
    name: 'Observatorio de Infancia del País Vasco',
  },
  {
    name: 'Observatorio de Infancia de Cantabria',
  },
  {
    name: 'Observatorio de la Infancia y la Adolescencia de les Illes Balears',
  },
  {
    name: 'Observatorio de la Lectura y el Libro',
  },
  {
    name: 'Observatorio de la Realidad Social',
  },
  {
    name: 'Observatorio de las Ocupaciones del SEPE',
  },
  {
    name: 'Observatorio de Museos de España',
  },
  {
    name: 'Observatorio de Precios y Mercados de la Junta de Andalucía',
  },
  {
    name: 'Observatorio de Salud Pública de Cantabria',
  },
  {
    name: 'Observatorio de Salud y Cambio Climático',
  },
  {
    name: 'Observatorio de Vivienda y Suelo',
  },
  {
    name: 'Observatorio del Ferrocarril en España',
  },
  {
    name: 'Observatorio del Medio Ambiente Urbano',
  },
  {
    name: 'Observatorio del Transporte y la Logística en España',
    website: 'https://otle.transportes.gob.es',
  },
  {
    name: 'Observatorio do Sector Lácteo de Galicia',
  },
  {
    name: 'Observatorio Español contra la LGBTfobia',
  },
  {
    name: 'Observatorio Español de Acuicultura',
  },
  {
    name: 'Observatorio Español de I+D+I (ICONO)',
  },
  {
    name: 'Observatorio Español de la Economía Social',
  },
  {
    name: 'Observatorio Español de las Drogas y las Adicciones',
  },
  {
    name: 'Observatorio Español del Mercado del Vino',
  },
  {
    name: 'Observatorio Español del Racismo y la Xenofobia',
  },
  {
    name: 'Observatorio Estatal de Condiciones de Trabajo',
  },
  {
    name: 'Observatorio Estatal de Familias',
  },
  {
    name: 'Observatorio Estatal de la Convivencia Escolar',
  },
  {
    name: 'Observatorio Estatal de la Dependencia',
  },
  {
    name: 'Observatorio Estatal de la Discapacidad',
  },
  {
    name: 'Observatorio Estatal de los Servicios Deportivos a las Administraciones Públicas',
  },
  {
    name: 'Observatorio Estatal de Violencia sobre la Mujer',
  },
  {
    name: 'Observatorio Galego Contra a Discriminación por Orientación Sexual e Identidade de Xénero',
  },
  {
    name: 'observatorio Galego da biodiversidade',
  },
  {
    name: 'Observatorio Galego da Violencia de Xénero',
  },
  {
    name: 'Observatorio Galego de Acción Voluntaria',
  },
  {
    name: 'Observatorio Galego de Convivencia Escolar',
  },
  {
    name: 'Observatorio Galego de Dinamización Demográfica',
  },
  {
    name: 'Observatorio Galego de Educación Ambiental',
  },
  {
    name: 'Observatorio Nacional 5G',
  },
  {
    name: 'Observatorio Nacional contra el Despoblamiento',
  },
  {
    name: 'Observatorio Nacional de la Calidad de los Servicios Públicos',
  },
  {
    name: 'Observatorio Nacional de las Telecomunicaciones y de la Sociedad de la Información',
  },
  {
    name: 'Observatorio Nacional de Seguridad Vial',
  },
  {
    name: 'Observatorio Nacional de Sequías e Inundaciones',
  },
  {
    name: 'Observatorio Profesional del Instituto Nacional de las Cualificaciones',
  },
  {
    name: 'Observatorio Territorial de Andalucía',
  },
  {
    name: 'Observatorio Mujeres, Ciencia e Innovación',
  },
  {
    name: 'Observatorio da Mobilidade de Terras de Galicia',
  },
  {
    name: 'Observatorio Galego da Xuventude',
  },
  {
    name: 'Observatorio Coruñés contra a LGTBIfobia',
  },
  {
    name: 'Observatorio de costes de transportes de mercancías por carretera de Galicia',
  },
  {
    name: 'Observatorio Gallego de la Familia y de la Infancia',
  },
  {
    name: 'Observatorio da Vivenda de Galicia',
  },
  {
    name: 'Observatorio da Lingua Galega',
  },
  {
    name: 'Observatorio Argos de la Junta de Andalucía',
  },
  {
    name: 'Observatorio del Mercado de Trabajo del Instituto Aragonés de Empleo',
  },
  {
    name: 'Observatorio del Mercado de Trabajo del Servicio Público de Empleo del Principado de Asturias',
  },
  {
    name: 'Observatorio del Trabajo del Servicio de Ocupación de las Illes Balears',
  },
  {
    name: 'Observatorio de Empleo y Formación del Servicio Cántabro de Empleo',
  },
  {
    name: 'Observatorio Canario del Empleo y la Formación Profesional',
  },
  {
    name: 'Observatorio Socioeconómico de la Provincia de Badajoz',
  },
  {
    name: 'Observatorio del Sector TIC en Extremadura',
  },
  {
    name: 'Observatorio de las Familias y la Infancia de Extremadura',
  },
  {
    name: 'Observatorio para la Convivencia Escolar de Extremadura',
  },
  {
    name: 'Observatorio de Prevención de Riesgos Laborales de la Comunidad Autónoma de la Región de Murcia',
  },
  {
    name: 'Observatorio de Turismo de Extremadura',
  },
  {
    name: 'Observatorio Extremeño de la Cultura',
  },
  {
    name: 'Observatorio de Responsabilidad Social de Extremadura',
  },
  {
    name: 'Observatorio sobre Drogas de la Región de Murcia',
  },
  {
    name: 'Observatorio Global del Español',
    parents: [
        'Ministerio de Asuntos Exteriores, Unión Europea y Cooperación',
        'Secretaría de Estado para Iberoamérica y el Caribe',
        'Secretaría de Estado de Digitalización e Inteligencia Artificial',
        'Dirección del Instituto Cervantes',
        'Comisionado Especial para la Alianza por la Nueva Economía de la Lengua',
        'Ministerio de Educación y Formación Profesional',
        'Ministerio de Política Territorial',
        'Ministerio de Cultura y Deporte',
        'Ministerio de Ciencia e Innovación',
        'Ministerio de Universidades',
        'Consejo de Gobierno de la Comunidad Autónoma de La Rioja',
        ],
    scope: 'estatal',
    type: 'public',
    docs: [
        {
         name: 'Creación en el BOE, junio de 2022',
         url: 'https://www.boe.es/eli/es/rd/2022/06/07/431/con',
        },
        {
         name: 'Primera comisión ejecutiva, marzo de 2024',
         url: 'https://cervantes.org/es/sobre-nosotros/sala-prensa/notas-prensa/observatorio-global-espanol-materializa-su-puesta-marcha',
        },
        ],
  },
]

const container = document.getElementsByTagName('section')[0]
const count = document.getElementsByTagName('mark')[0]

count.innerHTML = observatories.length

container.innerHTML = observatories
  .map(
    ({
      name,
      website,
      email,
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
        ${type ? `<p>${types.find(({ key }) => key === type).name}` : ''}
        ${scope ? `<p>${scopes.find(({ key }) => key === scope).name}` : ''}
      </article>
    `
  )
  .join('')

console.log(observatories.length)
