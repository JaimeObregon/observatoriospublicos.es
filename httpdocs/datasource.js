// Tipo de observatorio según su origen, financiación y/o composición
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
    comment: `<a
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
  {
    name: 'Observatorio Permanente de la Inmigración (OPI) ',
    website:
      'https://www.inclusion.gob.es/web/opi/estadisticas/observatorio_permanente_inmigracion',
    email: 'sgam@inclusion.gob.es',
    parents: [
      'Ministerio de Inclusión, Seguridad Social y Migraciones',
      'Secretaría de Estado de Migraciones',
      'Subdirección General de Análisis Migratorio',
    ],
    scope: 'estatal',
    type: 'public',
    docs: [
      {
        name: 'Ciudadanos ucranianos en España con documentación de residencia en vigor',
        url: 'https://www.inclusion.gob.es/web/opi/estadisticas/catalogo/ucranianos',
      },
      {
        name: 'Menores no acompañados y jóvenes extutelados con autorización de residencia',
        url: 'https://www.inclusion.gob.es/web/opi/estadisticas/catalogo/Menores',
      },
    ],
  },
  {
    name: 'Observatorio Estatal de Violencia sobre la Mujer',
    website:
      'https://violenciagenero.igualdad.gob.es/instituciones/observatorioEstatal/home.htm',
    parents: [
      'Ministerio de Igualdad',
      'Secretaría de Estado de Igualdad y contra la Violencia de Género',
      'Delegación del Gobierno contra la Violencia de Género',
    ],
    docs: [
      {
        name: 'Informe Ejecutivo del XV Informe Anual del Observatorio Estatal de Violencia sobre la Mujer 2021',
        url: 'https://violenciagenero.igualdad.gob.es/violenciaEnCifras/observatorio/informesEjecutivos/informes/Informe_Ejecutivo_2021.htm',
      },
      {
        name: 'Informe del Grupo de Trabajo de Investigación sobre la Infancia Víctima de la Violencia de Género. Año 2011',
        url: 'https://violenciagenero.igualdad.gob.es/violenciaEnCifras/observatorio/gruposTrabajo/informes/informe2011.htm',
      },
      {
        name: 'XV Informe Anual del Observatorio Estatal de Violencia sobre la Mujer. Año 2021',
        url: 'https://violenciagenero.igualdad.gob.es/violenciaEnCifras/observatorio/informesAnuales/informes/XV_Informe_2021.htm',
      },
    ],
  },
  {
    name: 'Observatorio Urbano de Alcalá de Henares',
    parents: ['Ayuntamiento de Alcalá de Henares'],
    website:
      'https://www.ayto-alcaladehenares.es/el-salon-de-plenos-acoge-el-acto-ejecutivo-del-plan-de-accion-de-la-agenda-urbana-de-alcala/',
    scope: 'ayuntamiento',
    type: 'public',
  },
  {
    name: 'Observatorio de violencia de género de Alcalá',
    parents: ['Ayuntamiento de Alcalá de Henares'],
    website:
      'https://www.ayto-alcaladehenares.es/el-observatorio-de-violencia-de-genero-de-alcala-ha-atendido-a-mas-de-1500-mujeres-desde-2004-2/',
    scope: 'ayuntamiento',
    type: 'public',
  },
  {
    name: 'Observatorio Sociodemográfico del Ayuntamiento de Alcalá de Henares',
    parents: ['Ayuntamiento de Alcalá de Henares'],
    website:
      'https://urbanismo.ayto-alcaladehenares.es/observatorio-sociodemografico-2/',
    scope: 'ayuntamiento',
    type: 'public',
  },
  {
    name: 'Observatorio Alcalá en cifras',
    parents: ['Ayuntamiento de Alcalá de Henares'],
    website:
      'https://www.ayto-alcaladehenares.es/presentacion-del-observatorio-urbano-alcala-en-cifras/',
    scope: 'ayuntamiento',
    type: 'public',
  },
  {
    name: 'Observatorio de Comercio del Gobierno Vasco',
    website: 'https://www.euskadi.eus/gobierno-vasco/observatorio-comercio',
    scope: 'pais-vasco',
    type: 'public',
  },
  {
    name: 'Observatorio Vasco del Emprendimiento',
    website: 'https://eeb-ove.eus/inicio/',
    twitter: '@eeb_ove',
    scope: 'pais-vasco',
    type: 'public',
  },
  {
    name: 'Observatorio Vasco de Vivienda',
    website: 'https://www.euskadi.eus/observatoriovivienda/',
    scope: 'pais-vasco',
    type: 'public',
  },
  {
    name: 'Observatorio Vasco del Juego',
    website: 'https://www.euskadi.eus/gobierno-vasco/observatorio-vasco-juego/',
    scope: 'pais-vasco',
    type: 'public',
  },
  {
    name: 'Observatorio de Periodismo Machista',
    website: 'https://periodismomachista.com/',
    twitter: '@pemachista',
    scope: 'pais-vasco',
    type: 'public',
  },
  {
    name: 'Observatorio Vasco sobre Acoso y Discriminación',
    website: 'https://www.observatoriovascosobreacoso.com/',
    twitter: '@ObservVascoAcos',
    scope: 'pais-vasco',
    type: 'public',
  },
  {
    name: 'Observatorio Vasco de la Juventud - Gobierno Vasco',
    website: 'https://www.gazteaukera.euskadi.eus/hasiera/',
    twitter: '@gaztebehatokia',
    scope: 'pais-vasco',
    type: 'public',
  },
  {
    name: 'Observatorio de Coyuntura Industrial',
    website:
      'https://www.irekia.euskadi.eus/es/tags/observatoriodecoyunturaindustrial?uid=5196',
    scope: 'pais-vasco',
    type: 'public',
  },
  {
    name: 'Observatorio Vasco de Inmigración',
    website: 'https://www.ikuspegi.eus/',
    twitter: '@ikuspegi_eus',
    scope: 'pais-vasco',
    type: 'public',
  },
  {
    name: 'Observatorio Vasco LGTBI+',
    website: 'https://lgtbi-behatokia.eus/',
    twitter: '@BehatokiaLGTBI',
    scope: 'pais-vasco',
    type: 'public',
  },
]

export { observatories, types, scopes }
