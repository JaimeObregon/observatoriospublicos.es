// Tipo de observatorio según su origen y/o financiación
const types = [
  {
    key: 'publico',
    name: 'Público',
  },
  {
    key: 'hibrido',
    name: 'Público-privado',
  },
]

const scopes = [
  {
    key: 'estatal',
    name: 'Estatal',
  },
  {
    key: 'municipal',
    name: 'Municipal',
  },
  {
    key: 'andalucia',
    name: 'Andalucía',
  },
  {
    key: 'aragon',
    name: 'Aragón',
  },
  {
    key: 'asturias',
    name: 'Asturias',
  },
  {
    key: 'cantabria',
    name: 'Cantabria',
  },
  {
    key: 'castilla_la_mancha',
    name: 'Castilla-La Mancha',
  },
  {
    key: 'castilla_y_leon',
    name: 'Castilla y León',
  },
  {
    key: 'cataluna',
    name: 'Cataluña',
  },
  {
    key: 'extremadura',
    name: 'Extremadura',
  },
  {
    key: 'galicia',
    name: 'Galicia',
  },
  {
    key: 'islas_baleares',
    name: 'Islas Baleares',
  },
  {
    key: 'canarias',
    name: 'Canarias',
  },
  {
    key: 'la_rioja',
    name: 'la_rioja',
  },
  {
    key: 'comunidad_de_madrid',
    name: 'Comunidad de Madrid',
  },
  {
    key: 'region_de_murcia',
    name: 'Región de Murcia',
  },
  {
    key: 'navarra',
    name: 'Navarra',
  },
  {
    key: 'pais_vasco',
    name: 'País Vasco',
  },
  {
    key: 'comunidad_valenciana',
    name: 'Comunidad Valenciana',
  },
  {
    key: 'ceuta',
    name: 'Ceuta',
  },
  {
    key: 'melilla',
    name: 'Melilla',
  },
]

const observatories = [
  {
    id: '1',
    name: 'Observatorio contra el Fraude y la Corrupción Sanitaria',
    parents: ['Ministerio de Sanidad'],
    description: `<a
        href="https://twitter.com/Monica_Garcia_G/status/1768227454223565199"
        >Anunciado</a
      > en rueda de prensa por la ministra de Sanidad el 14 de marzo de 2024.`,
    scope: 'estatal',
    type: 'publico',
  },
  {
    id: '2',
    name: 'Observatorio de Salud de las Mujeres',
    parents: [
      'Ministerio de Sanidad',
      'Secretaría de Estado de Sanidad',
      'Dirección General de Salud Pública',
    ],
    description:
      'Para <q>la disminución de las desigualdades de género en salud, mediante la participación y colaboración entre el conjunto de agentes implicados, generando y difundiendo conocimiento que permita el análisis de género y promueva la inclusión del enfoque de género y la equidad en las políticas públicas de salud</q>.',
    website: 'https://www.observatoriosaludmujeres.es',
    scope: 'estatal',
    type: 'publico',
  },
  {
    id: '3',
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
    type: 'publico',
  },
  {
    id: '4',
    name: "Observatori Municipal de l'Habitatge d'Alcoi",
    url: 'https://www.omha.alcoi.org/',
    scope: 'municipal',
    location: 'Alcoy',
    type: 'publico',
    docs: [
      {
        name: 'Plan General de Ordenación Urbana',
        url: 'https://www.alcoi.org/export/sites/default/es/areas/urbanismo/transparencia/descargas_planeam/20200714-Normativa-Urbanistica-del-PGOU-completa.pdf',
      },
      {
        name: 'Que es el OMHA?',
        url: 'https://www.omha.alcoi.org/es/que-es-omha/',
      },
    ],
  },
  {
    id: '5',
    name: 'Observatorio Autonómico dos Ríos de Galicia',
  },
  {
    id: '6',
    name: 'Observatorio da Sociedade da Información e a Modernización de Galicia',
  },
  {
    id: '7',
    name: 'Observatorio da Violencia no Contorno Laboral',
  },
  {
    id: '8',
    name: 'Observatorio de Administración Electrónica',
  },
  {
    id: '9',
    name: 'Observatorio de Igualdad de Oportunidades entre Mujeres y Hombres',
    website:
      'https://www.inmujeres.gob.es/observatorios/observIgualdad/home.htm',
    type: 'publico',
    scope: 'estatal',
    parents: ['Ministerio de Igualdad', 'Instituto de las Mujeres'],
    docs: [
      {
        name: 'Real Decreto 1686/2000, de 6 de octubre, por el que se crea el Observatorio de la Igualdad de Oportunidades entre mujeres y hombres',
        url: 'https://www.inmujeres.gob.es/observatorios/observIgualdad/docs/realDecreto.pdf',
      },
    ],
  },
  {
    id: '10',
    name: 'Observatorio de la Imagen de las Mujeres',
    website: 'https://www.inmujeres.gob.es/observatorios/observImg/home.htm',
    type: 'publico',
    scope: 'estatal',
    parents: ['Ministerio de Igualdad', 'Instituto de las Mujeres'],
  },
  {
    id: '11',
    name: 'Observatorio de la Cadena Alimentaria',
    website:
      'https://www.mapa.gob.es/es/alimentacion/temas/observatorio-cadena/organizacion-y-estructura/',
    parents: [
      'Dirección General de la Industria Alimentaria',
      'Ministerio de Agricultura, Pesca y Alimentación',
    ],
    scope: 'estatal',
    type: 'publico',
  },
  {
    id: '12',
    name: 'Observatorio de la Ciencia Ciudadana',
  },
  {
    id: '13',
    name: 'Observatorio de la Gestión Empresarial en Biodiversidad',
  },
  {
    id: '14',
    name: 'Observatorio de la Infancia de España',
    website:
      'https://observatoriodelainfancia.mdsocialesa2030.gob.es/queEs/home.htm',
  },
  {
    id: '15',
    name: 'Observatorio de la Infancia de Andalucía',
  },
  {
    id: '16',
    name: 'Observatorio de la Infancia de Cataluña / Observatori dels Drets dels Infants',
  },
  {
    id: '17',
    name: 'Observatorio de la Infancia y la Adolescencia de Asturias',
  },
  {
    id: '18',
    name: 'Observatorio de Infancia del País Vasco',
  },
  {
    id: '19',
    name: 'Observatorio de Infancia de Cantabria',
  },
  {
    id: '20',
    name: 'Observatorio de la Infancia y la Adolescencia de les Illes Balears',
  },
  {
    id: '21',
    name: 'Observatorio de la Lectura y el Libro',
  },
  {
    id: '22',
    name: 'Observatorio de la Realidad Social de Navarra',
    website: 'https://www.observatoriorealidadsocial.es/es/',
  },
  {
    id: '23',
    name: 'Observatorio de las Ocupaciones del Servicio Público de Empleo Estatal',
    website:
      'https://www.sepe.es/HomeSepe/que-es-el-sepe/comunicacion-institucional/publicaciones/publicaciones-oficiales/listado-pub-mercado-trabajo/observatorio-ocupaciones.html',
    email: 'observatorio.ocupacional@sepe.es',
    type: 'publico',
    scope: 'estatal',
  },
  {
    id: '24',
    name: 'Observatorio de Museos de España',
    website:
      'https://www.cultura.gob.es/observatorio-museos-espana/el-observatorio-de-museos-de-espana.html',
    parents: ['Ministerio de Cultura'],
    scope: 'estatal',
    type: 'publico',
    email: 'observatorio.museos@cultura.gob.es',
  },
  {
    id: '25',
    name: 'Observatorio de Precios y Mercados de la Junta de Andalucía',
    scope: 'andalucia',
  },
  {
    id: '26',
    name: 'Observatorio de Salud Pública de Cantabria',
    scope: 'cantabria',
    type: 'publico',
    description:
      'Su misión es <q>Generar información relevante y de calidad a políticos, gestores, investigadores, profesionales de la salud y a la sociedad civil en general con el fin de mejorar las políticas, programas y servicios sanitarios-sociosanitarios de forma que respondan equitativa y eficientemente a las necesidades de salud de la población y a la reducción de las desigualdades en salud en Cantabria</Q>.',
    parents: [
      'Consejería de Sanidad',
      'Gobierno de Cantabria',
      'Fundación Marques de Valdecilla',
    ],
    website:
      'https://fmvaldecilla.es/unidad/observatorio-de-salud-publica-de-cantabria/',
  },
  {
    id: '27',
    name: 'Observatorio de Salud y Cambio Climático',
    scope: 'estatal',
    parents: ['Ministerio de Ciencia e Innovación'],
    description:
      'Nace <q>como un órgano colegiado intersectorial para apoyar el análisis, diagnóstico, evaluación y seguimiento de los efectos de la emergencia climática en la salud, al tiempo que ofrece apoyo científico-técnico a las Administraciones públicas</q>.',
    docs: [
      {
        name: 'Nota de prensa de la creación',
        url: 'https://www.miteco.gob.es/content/dam/miteco/es/prensa/23.07.18%20El%20Gobierno%20aprueba%20la%20creaci%C3%B3n%20del%20Observatorio%20de%20Salud%20y%20Cambio%20Clim%C3%A1tico.pdf',
      },
    ],
  },
  {
    id: '28',
    name: 'Observatorio de Vivienda y Suelo',
    scope: 'estatal',
    parents: ['Ministerio de Transportes y Movilidad Sostenible'],
  },
  {
    id: '29',
    name: 'Observatorio del Ferrocarril en España',
    scope: 'estatal',
  },
  {
    id: '30',
    name: 'Observatorio del Medio Ambiente Urbano',
  },
  {
    id: '31',
    name: 'Observatorio del Transporte y la Logística en España',
    website: 'https://otle.transportes.gob.es',
  },
  {
    id: '32',
    name: 'Observatorio do Sector Lácteo de Galicia',
    website:
      'https://fogga.xunta.gal/es/sector_lacteo/observatorio_del_sector_lacteo',
    scope: 'galicia',
    type: 'publico',
    docs: [
      {
        name: 'Creación en el DOG, 9 de abril de 2007',
        url: 'https://fogga.xunta.gal/sites/w_fogga/files/ficheiros/pdf/d_61_2007.pdf',
      },
    ],
  },
  {
    id: '33',
    name: 'Observatorio Español contra la LGBTfobia',
  },
  {
    id: '34',
    name: 'Observatorio Español de Acuicultura',
    website: 'https://www.mapa.gob.es/es/pesca/temas/acuicultura/observatorio/',
  },
  {
    id: '35',
    name: 'Observatorio Español de I+D+I (ICONO)',
  },
  {
    id: '36',
    name: 'Observatorio de Salud y Medio Ambiente de Andalucía',
    website: 'https://www.osman.es',
    scope: 'andalucia',
    type: 'publico',
    parents: ['Junta de Andalucía', 'Consejería de Salud y Consumo'],
  },
  {
    id: '37',
    name: 'Observatorio Español de la Economía Social',
    website: 'http://www.observatorioeconomiasocial.es',
    parents: [
      'Ministerio de Trabajo y Economía Social',
      'Instituto Universitario de Economía Social y Cooperativa',
      'Universidad de Valencia',
    ],
  },
  {
    id: '38',
    name: 'Observatorio Español de las Drogas y las Adicciones',
    type: 'publico',
    scope: 'estatal',
    parents: ['Ministerio de Sanidad'],
    website:
      'https://pnsd.sanidad.gob.es/profesionales/sistemasInformacion/home.htm',
  },
  {
    id: '39',
    name: 'Observatorio Español del Racismo y la Xenofobia',
    website: 'https://www.inclusion.gob.es/oberaxe/',
    parents: ['Ministerio de Inclusión, Seguridad Social y Migraciones'],
    type: 'publico',
    scope: 'estatal',
  },
  {
    id: '40',
    name: 'Observatorio Estatal de Condiciones de Trabajo',
    scope: 'estatal',
  },
  {
    id: '41',
    name: 'Observatorio Estatal de Familias',
    scope: 'estatal',
  },
  {
    id: '42',
    name: 'Observatorio Estatal de la Convivencia Escolar',
    scope: 'estatal',
    website:
      'https://www.educacionyfp.gob.es/mc/sgctie/convivencia-escolar/observatorio.html',
  },
  {
    id: '43',
    name: 'Observatorio Estatal de la Dependencia',
    scope: 'estatal',
  },
  {
    id: '44',
    name: 'Observatorio Estatal de la Discapacidad',
    scope: 'estatal',
  },
  {
    id: '45',
    name: 'Observatorio Estatal de los Servicios Deportivos a las Administraciones Públicas',
    scope: 'estatal',
  },
  {
    id: '46',
    name: 'Observatorio de la Comunidad de Castilla y León (Sección de Género)',
    website:
      'https://familia.jcyl.es/web/es/mujer/observatorio-comunidad-seccion-genero.html',
    type: 'publico',
    scope: 'castilla_y_leon',
  },
  {
    id: '47',
    name: 'Observatorio de la Convivencia Escolar',
    website:
      'https://www.educa.jcyl.es/convivenciaescolar/es/observatorio-convivencia-escolar',
    type: 'publico',
    scope: 'castilla_y_leon',
  },
  {
    id: '48',
    name: 'Observatorio TransfomAcción y ParticipAcción',
    website: 'https://www.observatoriotransformacion.com',
    type: 'publico',
    scope: 'castilla_y_leon',
  },
  {
    id: '49',
    name: 'Observatorio Regional de la Sociedad de la Información de Castilla y León (ORSI)',
    website:
      'https://www.aytoburgos.es/-/observatorio-regional-de-la-sociedad-de-la-informacion-de-castilla-y-leon-orsi-',
    type: 'publico',
    scope: 'castilla_y_leon',
  },
  {
    id: '50',
    name: 'Observatorio de Agresiones',
    website:
      'https://www.saludcastillayleon.es/profesionales/es/prevencion-riesgos-laborales/plan-integral-frente-agresiones/observatorio-agresiones',
    type: 'publico',
    scope: 'castilla_y_leon',
  },
  {
    id: '51',
    name: 'Observatorio Galego Contra a Discriminación por Orientación Sexual e Identidade de Xénero',
    scope: 'galicia',
  },
  {
    id: '52',
    name: 'Observatorio Galego da biodiversidade',
    scope: 'galicia',
  },
  {
    id: '53',
    name: 'Observatorio Galego da Violencia de Xénero',
    scope: 'galicia',
  },
  {
    id: '54',
    name: 'Observatorio Galego de Acción Voluntaria',
    scope: 'galicia',
  },
  {
    id: '55',
    name: 'Observatorio Galego de Convivencia Escolar',
    scope: 'galicia',
  },
  {
    id: '56',
    name: 'Observatorio Galego de Dinamización Demográfica',
    scope: 'galicia',
  },
  {
    id: '57',
    name: 'Observatorio Galego de Educación Ambiental',
    scope: 'galicia',
  },
  {
    id: '58',
    name: 'Observatorio Nacional 5G',
    parents: ['Ministerio de Economía'],
    scope: 'estatal',
    is_active: 'No',
  },
  {
    id: '59',
    name: 'Observatorio Nacional contra el Despoblamiento',
    scope: 'estatal',
    parents: ['Gobierno de Cantabria', 'Ayuntamiento de Valderredible'],
    description:
      'Iniciativa del Ayuntamiento de Valderredible con el Gobierno de Cantabria, presentada en 2021 y 2022. A fecha de la primavera de 2024 no consta que se haya puesto en marcha.',
    docs: [
      {
        name: 'Marcano valora de forma “muy positiva” la propuesta de crear en Valderredible un Observatorio Nacional y Centro de Iniciativas contra el despoblamiento',
        url: 'https://www.cantabria.es/web/gobierno/detalle/-/journal_content/56_INSTANCE_DETALLE/16413/14868508',
      },
      {
        name: 'Valderredible quiere acoger un Observatorio Nacional contra el despoblamiento rural',
        url: 'https://www.eldiario.es/cantabria/ultimas-noticias/valderredible-quiere-acoger-observatorio-nacional-despoblamiento-rural_1_8004681.html',
      },
      {
        name: 'El Plan de Dinamización de Valderredible desarrollará un plan de actuaciones con el apoyo del Gobierno para potenciar su desarrollo y sus valores patrimoniales',
        url: 'https://www.cantabria.es/web/comunicados/w/el-plan-de-dinamizaci%C3%B3n-de-valderredible-desarrollar%C3%A1-un-plan-de-actuaciones-con-el-apoyo-del-gobierno-para-potenciar-su-desarrollo-y-sus-valores-patrimoniales',
      },
    ],
    is_active: 'No',
  },
  {
    id: '60',
    name: 'Observatorio Vasco de la Cultura',
    website: 'https://www.euskadi.eus/observatorio-vasco-cultura/',
    email: 'kulturabehatokia@euskadi.eus',
    parents: [
      'Gobierno Vasco',
      'Departamento de Cultura y Política Lingüística',
      'Viceconsejería de Cultura',
      'Dirección de Promoción de la Cultura',
    ],
    scope: 'pais_vasco',
    type: 'publico',
    docs: [
      {
        name: 'Edición del libro en euskera 2022',
        url: 'https://www.euskadi.eus/2024/edicion-del-libro-en-euskera-2022/web01-a3kebarg/eu/',
      },
      {
        name: 'Comercio interior del libro en la CAE 2022',
        url: 'https://www.euskadi.eus/2024/comercio-interior-del-libro-en-la-cae-2022/web01-a3kebarg/eu/',
      },
      {
        name: 'Análisis de la programación cultural de la CAE. Año 2023',
        url: 'https://www.euskadi.eus/2023/analisis-de-la-programacion-cultural-de-la-cae-ano-2023/web01-a3kebarg/eu/',
      },
    ],
    from_date: '14/02/2006',
  },
  {
    id: '61',
    name: 'Observatorio Nacional de las Telecomunicaciones y de la Sociedad de la Información',
    scope: 'estatal',
  },
  {
    id: '62',
    name: 'Observatorio Nacional de Seguridad Vial',
    scope: 'estatal',
  },
  {
    id: '63',
    name: 'Observatorio Nacional de Sequías e Inundaciones',
    scope: 'estatal',
  },
  {
    id: '64',
    name: 'Observatorio Profesional del Instituto Nacional de las Cualificaciones',
  },
  {
    id: '65',
    name: 'Observatorio Tecnológico',
    website: 'http://educalab.es/intef/tecnologia/observatorio-tecnologico',
  },
  {
    id: '66',
    name: 'Observatorio Territorial de Andalucía',
    scope: 'andalucia',
  },
  {
    id: '67',
    name: 'Observatorio para la Cibersociedad',
    // Kaputt
  },
  {
    id: '68',
    name: 'Sociedad de la Información en Navarra',
    scope: 'navarra',
    // Kaputt ?
  },
  {
    id: '69',
    name: 'Observatorio de Prospectiva Tecnológica Industrial',
    website: 'http://www.opti.org',
  },
  {
    id: '70',
    name: 'Observatorio de formación en red Scopeo',
    website: 'https://scopeo.usal.es',
  },
  {
    id: '71',
    name: 'Observatorio Mujeres, Ciencia e Innovación',
  },
  {
    id: '72',
    name: 'Observatorio da Mobilidade de Terras de Galicia',
    scope: 'galicia',
  },
  {
    id: '73',
    name: 'Observatorio Galego da Xuventude',
    scope: 'galicia',
  },
  {
    id: '74',
    name: 'Observatorio Coruñés contra a LGTBIfobia',
  },
  {
    id: '75',
    name: 'Observatorio de costes de transportes de mercancías por carretera de Galicia',
    scope: 'galicia',
  },
  {
    id: '76',
    name: 'Observatorio Gallego de la Familia y de la Infancia',
    scope: 'galicia',
  },
  {
    id: '77',
    name: 'Observatorio da Vivenda de Galicia',
    scope: 'galicia',
  },
  {
    id: '78',
    name: 'Observatorio da Lingua Galega',
    scope: 'galicia',
  },
  {
    id: '79',
    name: 'Observatorio Argos de la Junta de Andalucía',
    scope: 'andalucia',
  },
  {
    id: '80',
    name: 'Observatorio del Mercado de Trabajo del Instituto Aragonés de Empleo',
    scope: 'aragon',
  },
  {
    id: '81',
    name: 'Observatorio del Mercado de Trabajo del Servicio Público de Empleo del Principado de Asturias',
    scope: 'asturias',
  },
  {
    id: '82',
    name: 'Observatorio del Trabajo del Servicio de Ocupación de las Illes Balears',
    scope: 'islas_baleares',
  },
  {
    id: '83',
    name: 'Observatorio de Empleo y Formación del Servicio Cántabro de Empleo',
    scope: 'cantabria',
  },
  {
    id: '84',
    name: 'Observatorio Canario del Empleo y la Formación Profesional',
    scope: 'canarias',
  },
  {
    id: '85',
    name: 'Observatorio Socioeconómico de la Provincia de Badajoz',
  },
  {
    id: '86',
    name: 'Observatorio del Sector TIC en Extremadura',
    scope: 'extremadura',
  },
  {
    id: '87',
    name: 'Observatorio de las Familias y la Infancia de Extremadura',
    scope: 'extremadura',
  },
  {
    id: '88',
    name: 'Observatorio para la Convivencia Escolar de Extremadura',
    scope: 'extremadura',
  },
  {
    id: '89',
    name: 'Observatorio de Prevención de Riesgos Laborales de la Comunidad Autónoma de la Región de Murcia',
    scope: 'region_de_murcia',
  },
  {
    id: '90',
    name: 'Observatorio de Turismo de Extremadura',
    scope: 'extremadura',
  },
  {
    id: '91',
    name: 'Observatorio Extremeño de la Cultura',
    scope: 'extremadura',
  },
  {
    id: '92',
    name: 'Observatorio de Responsabilidad Social de Extremadura',
    scope: 'extremadura',
  },
  {
    id: '93',
    name: 'Observatorio sobre Drogas de la Región de Murcia',
    scope: 'region_de_murcia',
  },
  {
    id: '94',
    name: 'Observatorio Urbano de A Coruña',
    parents: ['Concello de A Coruña'],
    website:
      'https://www.coruna.gal/encifras/es/observatorios-municipales/observatorio-urbano-de-a-coruna',
    scope: 'municipal',
    location: 'A Coruña',
  },
  {
    id: '95',
    name: 'Observatorio municipal de igualdade e diversidade',
    parents: ['Concello de A Coruña'],
    website: 'https://www.coruna.gal/igualdade/es/servicios/observatorio',
    scope: 'municipal',
    location: 'A Coruña',
  },
  {
    id: '96',
    name: 'Observatorio turístico de A Coruña',
    parents: ['Concello de A Coruña', 'Universidade da Coruña'],
    website: 'https://acorunaot.udc.es',
    scope: 'municipal',
    location: 'A Coruña',
  },
  {
    id: '97',
    name: 'Observatorio de Accesibilidad Web',
    type: 'publico',
    scope: 'estatal',
    website:
      'https://administracionelectronica.gob.es/pae_Home/pae_Estrategias/pae_Accesibilidad/pae_Observatorio_de_Accesibilidad.html',
    // https://www.discapnet.es/innovacion/observatorio-accesibilidad-tic
  },
  {
    id: '98',
    name: 'Observatorio de Innovación de Navarra',
    type: 'publico',
    scope: 'navarra',
    website: 'https://observatorioinnovacion.navarra.es/es/el-observatorio',
    docs: [
      {
        name: 'Memoria 2022',
        url: 'https://www.navarra.es/documents/18551208/23439727/Infografia-memoria-2022.pdf/263da2df-efcd-0054-3007-26d0c4a692f5?t=1677834556413',
      },
    ],
  },
  {
    id: '99',
    name: 'Observatorio de la Movilidad Metropolitana (OMM)',
    parents: [
      'Ministerio para la Transición Ecológica y el Reto Demográfico',
      'Vicepresidencia Tercera del Gobierno',
    ],
    type: 'publico',
    scope: 'estatal',
    website:
      'https://www.miteco.gob.es/es/calidad-y-evaluacion-ambiental/temas/movilidad/omm.html',
  },
  {
    id: '100',
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
    type: 'publico',
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
    from_date: '2022-06',
    is_active: 'Sí',
  },
  {
    id: '101',
    name: 'Observatorio Permanente de la Inmigración (OPI)',
    website:
      'https://www.inclusion.gob.es/web/opi/estadisticas/observatorio_permanente_inmigracion',
    email: 'sgam@inclusion.gob.es',
    parents: [
      'Ministerio de Inclusión, Seguridad Social y Migraciones',
      'Secretaría de Estado de Migraciones',
      'Subdirección General de Análisis Migratorio',
    ],
    scope: 'estatal',
    type: 'publico',
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
    id: '102',
    name: 'Observatorio Estatal de Violencia sobre la Mujer',
    scope: 'estatal',
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
    id: '103',
    name: 'Observatorio Urbano de Alcalá de Henares',
    parents: ['Ayuntamiento de Alcalá de Henares'],
    website:
      'https://www.ayto-alcaladehenares.es/el-salon-de-plenos-acoge-el-acto-ejecutivo-del-plan-de-accion-de-la-agenda-urbana-de-alcala/',
    scope: 'municipal',
    location: 'Alcalá de Henares',
    type: 'publico',
  },
  {
    id: '104',
    name: 'Observatorio de violencia de género de Alcalá',
    parents: ['Ayuntamiento de Alcalá de Henares'],
    location: 'Alcalá de Henares',
    website:
      'https://www.ayto-alcaladehenares.es/el-observatorio-de-violencia-de-genero-de-alcala-ha-atendido-a-mas-de-1500-mujeres-desde-2004-2/',
    scope: 'municipal',
    type: 'publico',
  },
  {
    id: '105',
    name: 'Observatorio Sociodemográfico del Ayuntamiento de Alcalá de Henares',
    parents: ['Ayuntamiento de Alcalá de Henares'],
    location: 'Alcalá de Henares',
    website:
      'https://urbanismo.ayto-alcaladehenares.es/observatorio-sociodemografico-2/',
    scope: 'municipal',
    type: 'publico',
  },
  {
    id: '106',
    name: 'Observatorio Alcalá en cifras',
    parents: ['Ayuntamiento de Alcalá de Henares'],
    location: 'Alcalá de Henares',
    website:
      'https://www.ayto-alcaladehenares.es/presentacion-del-observatorio-urbano-alcala-en-cifras/',
    scope: 'municipal',
    type: 'publico',
  },
  {
    id: '107',
    name: 'Observatorio de Comercio del Gobierno Vasco',
    website: 'https://www.euskadi.eus/gobierno-vasco/observatorio-comercio',
    scope: 'pais_vasco',
    type: 'publico',
  },
  {
    id: '108',
    name: 'Observatorio Vasco del Emprendimiento',
    website: 'https://eeb-ove.eus/inicio/',
    twitter: '@eeb_ove',
    scope: 'pais_vasco',
    type: 'publico',
  },
  {
    id: '109',
    name: 'Observatorio Vasco de Vivienda',
    website: 'https://www.euskadi.eus/observatoriovivienda/',
    scope: 'pais_vasco',
    type: 'publico',
  },
  {
    id: '110',
    name: 'Observatorio Vasco del Juego',
    website: 'https://www.euskadi.eus/gobierno-vasco/observatorio-vasco-juego/',
    scope: 'pais_vasco',
    type: 'publico',
  },
  {
    id: '111',
    name: 'Observatorio de Periodismo Machista',
    website: 'https://periodismomachista.com/',
    twitter: '@pemachista',
    scope: 'pais_vasco',
    type: 'publico',
  },
  {
    id: '112',
    name: 'Observatorio Vasco sobre Acoso y Discriminación',
    website: 'https://www.observatoriovascosobreacoso.com/',
    twitter: '@ObservVascoAcos',
    scope: 'pais_vasco',
    type: 'publico',
  },
  {
    id: '113',
    name: 'Observatorio Vasco de la Juventud - Gobierno Vasco',
    website: 'https://www.gazteaukera.euskadi.eus/hasiera/',
    twitter: '@gaztebehatokia',
    scope: 'pais_vasco',
    type: 'publico',
  },
  {
    id: '114',
    name: 'Observatorio de Coyuntura Industrial',
    website:
      'https://www.irekia.euskadi.eus/es/tags/observatoriodecoyunturaindustrial?uid=5196',
    scope: 'pais_vasco',
    type: 'publico',
  },
  {
    id: '115',
    name: 'Observatorio Vasco de Inmigración',
    website: 'https://www.ikuspegi.eus/',
    twitter: '@ikuspegi_eus',
    scope: 'pais_vasco',
    type: 'publico',
  },
  {
    id: '116',
    name: 'Observatorio Vasco LGTBI+',
    website: 'https://lgtbi-behatokia.eus/',
    twitter: '@BehatokiaLGTBI',
    scope: 'pais_vasco',
    type: 'publico',
  },
  {
    id: '117',
    name: 'Observatorio para la Convivencia Escolar',
    website:
      'https://www.carm.es/web/pagina?IDCONTENIDO=5316&RASTRO=c792$m4001&IDTIPO=100',
    email: 'observatorio.convivencia@murciaeduca.es',
    parents: [
      'Subdirección General de Evaluación Educativa y Ordenación Académica',
      'Dirección General de Recursos Humanos, Planificación Educativa e Innovación',
      'Consejería de Educación, Formación Profesional y Empleo',
      'Gobierno de la Región de Murcia',
    ],
    scope: 'region_de_murcia',
    type: 'publico',
    docs: [
      {
        name: 'Informe 2022',
        url: 'https://www.carm.es/web/descarga?ARCHIVO=INFORME%20CONVIVENCIA%202022.pdf&ALIAS=ARCH&IDCONTENIDO=187826&IDTIPO=60&RASTRO=c792$m4001,5316,8320',
      },
      { name: 'Informe 2021' },
      { name: 'Informe 2020' },
      { name: 'Informe 2019' },
      { name: 'Informe 2018' },
      { name: 'Informe 2017' },
      { name: 'Informe 2016' },
      { name: 'Informe 2015' },
      { name: 'Informe 2014' },
      { name: 'Informe 2013' },
      { name: 'Informe 2012' },
      { name: 'Informe 2011' },
      { name: 'Informe 2010' },
      { name: 'Informe 2009' },
      { name: 'Informe 2008' },
      { name: 'Informe 2007' },
    ],
  },
  {
    id: '118',
    name: 'Observatorio de Prevención de Riesgos Laborales',
    website: 'https://www.carm.es/web/pagina?IDCONTENIDO=740&IDTIPO=140',
    parents: ['Gobierno de la Región de Murcia'],
    scope: 'region_de_murcia',
    type: 'publico',
  },
  {
    id: '119',
    name: 'Observatorio Ocupacional',
    website:
      'https://www.carm.es/web/pagina?IDCONTENIDO=227&IDTIPO=200&__PLANT_PERSONALIZADA=/JSP/CARM/carm2018/organigramas/plantillaDetalleOrganigrama.jsp&IDESTRUCTURAJERARQUICA=473&RASTRO=c77$m5782',
    parents: [
      'Dirección General del Servicio Regional de Empleo y Formación > Servicio Regional de Empleo y Formación > Organismo Autónomo > Consejería de Educación, Formación Profesional y Empleo > Comunidad Autónoma de la Región de Murcia',
    ],
    scope: 'region_de_murcia',
    type: 'publico',
    docs: [
      {
        name: 'Último mes publicado de 2024: Paro',
        url: 'https://www.sefcarm.es/web/servlet/descarga?ARCHIVO=Paro%20Febrero%202024.xlsx&ALIAS=ARCH&&IDCONTENIDO=189145',
      },
      {
        name: 'Último mes publicado de 2024: Contratos',
        url: 'https://www.sefcarm.es/web/servlet/descarga?ARCHIVO=Contratos%20Febrero%202024.xlsx&ALIAS=ARCH&&IDCONTENIDO=189144',
      },
    ],
  },
  {
    id: '120',
    name: 'Observatorio Virtual del Paisaje Mediterráneo',
    website:
      'https://www.carm.es/web/pagina?IDCONTENIDO=5137&IDTIPO=11&RASTRO=c374$m5828',
    scope: 'region_de_murcia',
    type: 'publico',
  },
  {
    id: '121',
    name: 'Observatorio Regional de la Discapacidad',
    website:
      'https://www.carm.es/web/pagina?IDCONTENIDO=5137&IDTIPO=11&RASTRO=c374$m5828',
    scope: 'region_de_murcia',
    type: 'publico',
  },
  {
    id: '122',
    name: 'Observatorio de la Calidad de los Servicios de la Comunidad Autónoma de la Región de Murcia',
    website:
      'https://transparencia.carm.es/-/observatorio-de-la-calidad-de-los-servicios#gsc.tab=0',
    scope: 'region_de_murcia',
    type: 'publico',
    docs: [
      {
        name: 'Acta 2022',
        url: 'https://transparencia.carm.es/wres/transparencia/doc/Organos-colegiados/observatorio_calidad/2022-07-18/20220718_ACTA_SESION_CONSTITUTIVA_OCS_C.pdf',
      },
    ],
  },
  {
    id: '123',
    name: 'Observatorio de Igualdad',
    website:
      'https://transparencia.carm.es/-/observatorio-de-igualdad#gsc.tab=0',
    scope: 'region_de_murcia',
    type: 'publico',
  },
  {
    id: '124',
    name: 'Observatorio Regional contra la Discriminación por Orientación Sexual e Identidad de Género',
    website:
      'https://transparencia.carm.es/-/observatorio-regional-contra-la-discriminacion-por-orientacion-sexual-e-identidad-de-genero-en-la-comunidad-autonoma-de-la-region-de-murcia#gsc.tab=0',
    scope: 'region_de_murcia',
    type: 'publico',
  },
  {
    id: '125',
    name: 'Observatori Agroalimentari de Preus',
    website:
      'https://agricultura.gencat.cat/ca/departament/estadistiques/observatori-agroalimentari-preus/',
    email: 'estudis_prospectiva.daam@gencat.cat',
    parents: ['Generalitat de Catalunya'],
    scope: 'cataluna',
    type: 'publico',
    is_active: 'Sí',
  },
  {
    id: '126',
    name: 'Observatorio contra la Violencia Doméstica y de Género',
    website:
      'https://www.poderjudicial.es/cgpj/es/Temas/Violencia-domestica-y-de-genero/El-Observatorio-contra-la-violencia-domestica-y-de-genero/',
    parents: [
      'Consejo General del Poder Judicial',
      'Ministerio de Justicia',
      'Ministerio de Sanidad',
      'Ministerio del Interior',
      'Fiscalía General del Estado',
      'Comunidades autónomas con competencias transferidas en Justicia',
      'Consejo General de la Abogacía Española',
      'Consejo General de Procuradores de España',
    ],
    description:
      'Es <q>un instrumento de análisis y de actuación que, en el ámbito de la Administración de la Justicia, promueve iniciativas y medidas dirigidas a erradicar el problema social de la violencia doméstica y de género</q>.',
    scope: 'estatal',
    docs: [
      {
        name: 'Convenio de creación del Observatorio',
        url: 'https://www.poderjudicial.es/stfls/CGPJ/OBSERVATORIO%20DE%20VIOLENCIA%20DOM%C3%89STICA/FICHERO/Convenio%20creaci%C3%B3n%20Observatorio.pdf',
      },
      {
        name: 'Folleto conmemorativo del 20 aniversario del Observatorio contra la Violencia Doméstica y de Género',
        url: 'https://www.poderjudicial.es/stfls/CGPJ/OBSERVATORIO%20DE%20VIOLENCIA%20DOM%C3%89STICA/FICHEROS/20221123%20Folleto%20conmemorativo%20del%2020%20aniversario%20del%20Observatorio%20contra%20la%20Violencia%20Dom%C3%A9stica.pdf',
      },
    ],
    type: 'publico',
    is_active: 'Sí',
    from_date: '2002',
  },
  {
    id: '127',
    scope: 'estatal',
    name: 'Observatorio de seguridad y eficiencia de las operaciones aéreas',
    parents: ['ENAIRE', 'Colegio Oficial de Pilotos de la Aviación Comercial'],
    from_date: '2019',
    docs: [
      {
        name: 'Resolución de 27 de junio de 2022, de la Entidad Pública Empresarial ENAIRE, por la que se publica el Convenio con el Colegio Oficial de Pilotos, para la operación del Observatorio de seguridad y eficiencia de las operaciones aéreas',
        url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2022-13358',
      },
    ],
  },
  {
    id: '128',
    name: 'Observatorio Permanente del Mercado de los Servicios Portuarios',
    website: 'https://observatorio.puertos.es/Paginas/Observatorio.aspx',
    email: 'observatorio@puertos.es',
    parents: ['Puertos del Estado'],
    scope: 'estatal',
    type: 'public',
    description:
      'Nace <q>para analizar las condiciones de competitividad en relación con los precios y calidad de los servicios portuarios, y acordar las variables de competitividad sobre las que establecer recomendaciones</q>.',
    from_date: '2012-12-11',
    is_active: 'Sí',
  },
]

export { observatories, types, scopes }
