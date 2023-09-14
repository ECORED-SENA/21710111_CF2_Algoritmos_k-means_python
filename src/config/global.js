export default {
  global: {
    componenteFormativo: 'Aprendizaje no supervisado <i>K-means</i>',
    descripcionCurso:
      'Un tipo de <i>machine learning</i> es el aprendizaje no supervisado usando el algoritmo <i>K-means</i>. Este componente formativo se orienta a conocer cómo funciona el algoritmo a través de un ejercicio planteado e identificar el clúster de un <i>dataset</i> seleccionado, usando Python como lenguaje para realizar algoritmos de inteligencia artificial, por su potencia en cuanto a exploración estadística, sus librerías gráficas y librerías de <i>machine learning</i>.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Aprendizaje no supervisado <i>K-means</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Selección del algoritmo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Extracción y selección de características',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Refinamiento del algoritmo de agrupación',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Segmentación de conjuntos de datos por atributos compartidos',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Herramientas tecnológicas para el agrupamiento de datos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Validación del resultado del análisis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/21710111_CF02_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.1.	Selección del algoritmo',
      referencia:
        'Anaconda.documentation. (2022).  <i>Installing on Windows</i>.',
      tipo: 'Documento web',
      link: 'https://docs.anaconda.com/anaconda/install/windows/',
    },
    {
      tema: '1.1.	Selección del algoritmo	',
      referencia: 'Kaggle. (2022). <i>ris.csv</i>. Kaggle',
      tipo: 'Artículo web',
      link: 'https://www.kaggle.com/datasets/saurabh00007/iriscsv',
    },
    {
      tema: '1.1.1. Selección del conjunto de datos',
      referencia:
        'Cui, Y. (2020). <i>The iris dataset - a little bit of History and Biology</i>. Tds.',
      tipo: 'Artículo web',
      link:
        'https://towardsdatascience.com/the-iris-dataset-a-little-bit-of-history-and-biology-fb4812f5a7b5',
    },
    {
      tema: '1.3. Refinamiento del algoritmo de agrupación',
      referencia:
        'González, F. (2019). <i>Machine learning: construí tu primer algoritmo inteligente</i>. Somospnt.',
      tipo: 'Artículo web',
      link: 'https://somospnt.com/blog/58-hello-world-en-machine-learning',
    },
  ],
  glosario: [
    {
      termino: 'Aprendizaje automático',
      significado:
        'rama de la inteligencia artificial, cuyo objetivo es implementar técnicas que permitan a los computadores aprender mediante un proceso de inducción del conocimiento.',
    },
    {
      termino: 'Aprendizaje automático supervisado',
      significado:
        'el algoritmo recibe datos de entrenamiento consistente en datos etiquetados. ',
    },
    {
      termino: 'Aprendizaje automático no supervisado',
      significado:
        'el algoritmo identifica patrones y saca conclusiones de los datos que se le proporcionan.',
    },
    {
      termino: '<i>Clúster</i>',
      significado:
        'conjunto de objetos o registros que son similares entre sí.',
    },
    {
      termino: '<i>Clustering</i>',
      significado:
        'proceso de dividir un conjunto de objetos o registros en subconjuntos  llamados <b><i>clúster</i></b> que tienen semejanzas.',
    },
    {
      termino: 'Distancia euclídea',
      significado:
        'es la longitud de segmento entre dos puntos que definen las observaciones más cercanas para asignarlas a un <b><i>clúster</i></b>.',
    },
    {
      termino: 'Inteligencia artificial',
      significado:
        'sistemas informáticos que pueden aprender como aprende un ser humano.',
    },
    {
      termino: '<i>Machine learning</i>',
      significado: 'aprendizaje automático',
    },
    {
      termino: '<i>K-means</i>',
      significado:
        'lenguaje de alto nivel usado para construir todo tipo de aplicaciones y muy usado en la ciencia de datos.',
    },
    {
      termino: 'Python',
      significado:
        'proceso criptográfico que proporciona comunicaciones seguras a través de las redes, haciendo que la información  entre extremos se transporte en forma segura mediante el uso de criptografía.',
    },
    {
      termino: 'Método del codo',
      significado:
        'método consistente en ejecutar <i>K-means</i> para un <b><i>clúster</i></b>  hasta n <b><i>clúster</i></b> y graficar la inercia por cada uno, que es la sumatoria de la distancia al cuadrado  desde cada observación hasta el centroide, el valor k se toma de la gráfica.',
    },
  ],
  referencias: [
    {
      referencia:
        'Fedding the machine (2019). Schematic Diagram of Dataset in Dataverse 4.0. [Imagen].',
      link:
        'https://www.feedingthemachine.ai/wp-content/uploads/2019/03/DatasetDiagram.png',
    },
    {
      referencia: 'Github.com. (s.f.). iris.csv.',
      link: 'https://raw.githubusercontent.com/toneloy/data/master/iris.csv',
    },
    {
      referencia: 'Kaggle. (2022). Iris.csv. Kaggle.',
      link: 'https://www.kaggle.com/datasets/saurabh00007/iriscsv',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Héctor Henry Jurado Soto',
          cargo: 'Experto Temático',
          centro:
            'Regional Cauca – Centro de Teleinformática y Producción Industrial',
        },
        {
          nombre: 'Caterine Bedoya Mejía',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital – Centro de Gestión Industrial',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Metodóloga',
          centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Correctora de Estilo',
          centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
        },
        {
          nombre: 'Miroslava González Hernández',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Santander – Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad Didáctica',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
