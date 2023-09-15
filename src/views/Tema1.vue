<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Aprendizaje no supervisado #[i K-means]
    .row.justify-content-center.align-items-center.mb-4          
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/3.svg', alt='') 
      .col-lg-8.my-3
        p(data-aos="fade-down") Python es un lenguaje bastante útil para realizar implementaciones de algoritmos de #[i machine learning], cuenta con una sintaxis clara y fácil de aprender. También, posee tipos de datos de alto nivel, permite procesar y manipular el texto para procesar datos no numéricos, cuenta con librerías como SciPy y Numpy, entre otras, para realizar operaciones de vectores y matrices.

        p(data-aos="fade-down").mb-0 A continuación, se conocerán las librerías más usadas en el ámbito de Python:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.up.my-3(data-aos="fade-right") 
        AcordionA(tipo="a" clase-tarjeta="tarjeta bgac")
          div.ps-5(titulo="Clusterización") 
            p El campo del #[i machine learning] está relacionado con el #[b #[mark.m1 aprendizaje no supervisado]], en los algoritmos clúster solo se cuenta con conjuntos de datos de entrada sin etiquetar, donde se desea conocer información; pero sin importar cuál es la salida.

            p.mb-0 La técnica de clusterización tiene muchos usos prácticos en muchos campos del mundo real, tales como análisis de ADN, reconocimiento de imágenes, diagnósticos médicos, estudios de datos científicos, aplicaciones web, mercadeo, astronomía, entre otros.
          div.ps-5(titulo="Pandas") 
            p.mb-0 Es una librería de Python para manipular, procesar y analizar los datos, permite la creación de #[i dataframes], la cual puede contener datos heterogéneos en forma tabular parecidos a las tablas SQL. Referirse a Pandas es hablar de la ciencia de datos.
          div.ps-5(titulo="Matplotlib") 
            p.mb-0 Es una librería para gráficos en 2D, provee una rápida forma de visualizar datos y gráficos de calidad desde Python, tales como diagramas de barras, histogramas, diagramas de sectores, diagramas de caja y bigotes, diagramas de violín, diagramas de dispersión o puntos, diagramas de líneas, diagramas de áreas, diagramas de contorno y mapas de color.
          div.ps-5(titulo="Seaborn") 
            p.mb-0 Son librerías para Python, que permiten generar diagramas o gráficos elegantes y de alto nivel, muy útiles en la ciencia de datos.
          div.ps-5(titulo="Scikit-Learn") 
            p.mb-0 Son librerías que cuentan con algoritmos para la clasificación, #[i clustering] como #[i k-means], reducción de dimensiones usando componentes principales, regresión, y es compatible con las demás librerías de Python.                                               
      .col-lg-5.up.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/4.png', alt='')  

    .bg2 
      .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")         
        .col-lg-auto.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/6.png', alt='')           
        .col.my-3
          p.mb-0 Con la información anterior es importante tener en cuenta que Python es usado por los científicos de datos, sobrepasando el uso de R, su gama de paquetes y librerías hacen que el estudio de la ciencia de datos sea una ciencia. 
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-3.up.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/7.svg', alt='') 
        .col-lg-9.up.my-3 
          p(data-aos="fade-down") Con el aprendizaje no supervisado se trata de aprender las relaciones y estructuras que existen en los datos sin etiquetarlos como variables independientes o variables dependientes; realmente un algoritmo de aprendizaje no supervisado no requiere datos de entrenamiento a diferencia de los algoritmos de aprendizaje supervisado. El algoritmo de aprendizaje no supervisado lo que hace es interpretar y agrupar datos, sin la necesidad de contener datos de entrenamiento, de modo que intentará averiguar a qué grupo o clúster pertenecen los nuevos datos, comparando sus características con las de los clústeres, tal como se representa a continuación.        
          .row.justify-content-center.align-items-center.mb-5           
            .col-lg-10.up
              .titulo-sexto.color-acento-contenido(data-aos="fade-right")
                h5 Figura 1.
                span Algoritmo de aprendizaje
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/8.svg', alt='Presentación visual del resultado de agrupación de datos de acuerdo a la interpretación hecha por el algoritmo de aprendizaje.')
        .col-10
          .bg1.p-4(data-aos="fade-left")
            .row.justify-content-center.align-items-center
              .col.my-3.j
                p.mb-0 En general, lo que se busca con el aprendizaje no supervisado es el conocimiento o patrones existentes entre un montón de datos, de los cuales no se conocen relaciones entre sus variables, no hay datos de referencia; el algoritmo #[i k-means] es un algoritmo de aprendizaje no supervisado. Los modelos predictivos se aprenden de manera supervisada mientras que los modelos descriptivos son producidos por técnicas de aprendizaje no supervisado.                
              .col-lg-auto.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/9.png', alt='')   

    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1  Selección del algoritmo                        
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")         
      .col-lg-auto.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/10.png', alt='')           
      .col.my-3
        p.mb-0 La agrupación con #[i k-means] es una de las técnicas más usadas para particionar datos, si tiene (#[b n]) observaciones y (#[b k]) clúster conocidos, entonces, cada observación pertenece al clúster con la media más cercana. Como medida se usa la distancia euclidiana; entre muchas ventajas que tiene este algoritmo las principales son la #[b velocidad y la sencillez] al implementarlo, por tanto, se puede usar con millones de observaciones.   
    p(data-aos="fade-down").mb-5 El algoritmo se resume como se muestra a continuación:
    .row.justify-content-center.align-items-center          
      .col-lg-12.up(data-aos="fade-left")
        .bg3.p-5.mb-5
          .bgw.p-4.brad 
            SlyderE(indicadores="derecha")
              .row.justify-content-center
                .col-lg-5.my-3
                  p Se selecciona la cantidad (k) de clúster a formar.          
                .col-lg-5.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/13.png', alt='')           
              .row.justify-content-center
                .col-lg-5.my-3
                  p Se seleccionan (k) puntos al azar, los cuales se llaman centroides.          
                .col-lg-5.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/14.png', alt='') 
              .row.justify-content-center
                .col-lg-5.my-3
                  p Se mide la distancia desde cada punto al centroide.           
                .col-lg-5.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/15.png', alt='')           
              .row.justify-content-center
                .col-lg-5.my-3
                  p Se actualizan los centroides, buscando la media en cada clúster formado.         
                .col-lg-5.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/16.png', alt='') 
              .row.justify-content-center
                .col-lg-5.my-3
                  p Una vez se obtienen los nuevos centroides se ejecuta nuevamente el paso 3 y 4 en forma iterativa hasta que no haya cambios en los clústeres formados.          
                .col-lg-5.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/17.png', alt='')                             
          
    .bg4
      p(data-aos="fade-down").mb-5 Explicado de otra forma, se puede visualizar por medio del siguiente diagrama. 
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-auto.up
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Figura 2.
            span Proceso de selección de algoritmo
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/19.svg', alt='Diagrama de flujo que representa la selección de algortimo.') 
      p(data-aos="fade-down").mb-5 Como ejemplo de aplicación del algoritmo se agruparán diez puntos ubicados en una dimensión para demostrar la sencillez del algoritmo:

      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-12(data-aos="fade-left")     
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/JJ0goUiXpj4?si=yaQIIyQt9bMiK3NG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Aplicación del algoritmo

    p(data-aos="fade-down").mb-5 Ahora bien, en otro ejemplo como el que presenta la siguiente figura, la distancia es observada fácilmente, puesto que es la medida de una línea recta; en dos dimensiones, se debe trabajar principalmente con el concepto de la distancia euclídea.  
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10.bg5.p-4
        .row.justify-content-center.align-items-start       
          .col-lg-5.up
            .titulo-sexto.color-acento-contenido(data-aos="fade-right")
              h5 Figura 3.
              span Distancia euclídea en el plano
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/21.svg', alt='Representación gráfica en un plano cartesiano de la distancia euclídea con su respectiva fórmula, aplicando el teorema de Pitágoras.') 
          .col-lg-7.up.pt-5
            p(data-aos="fade-down") Aplicando el teorema de Pitágoras la distancia euclídea en dos dimensiones es:
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/22.svg', alt='Representación gráfica en un plano cartesiano de la distancia euclídea con su respectiva fórmula, aplicando el teorema de Pitágoras.') 

    .row.justify-content-start.mb-3
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bg6.p-0.px-4
            h4.mb-1 Selección del conjunto de datos 
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")         
      .col-lg-auto.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/23.svg', alt='')           
      .col.my-3
        p.mb-0 Un conjunto de datos o #[i dataset] es un componente de la #[i bigdata] que representa un conjunto de información en una matriz o tabla conformada por filas y columnas, cada fila es una instancia del #[i dataset], representa la observación o un registro y cada columna representa una variable o una característica de datos, cada valor puede ser numérico como enteros o decimales y cadenas.

    .bg7.p-4.mb-5
      .row.justify-content-center.align-items-center   
        .col-lg-auto.up
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Figura 4.
            span Diagrama de un #[i dataset]
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/24.svg', alt='Diagrama de un Dataset, el cual está conformado por archivos de datos, documentación, código y metadatos.')
          figcaption Nota. Tomado de Feeding the machine (2019)

    p(data-aos="fade-down").mb-5 Antes de realizar cualquier estudio de aprendizaje automático es prioritario conocer muy bien el problema que se quiere resolver y por ende, el #[i dataset] involucrado; los datos tienen más sentido si se conocen las historias detrás de cada dato. Para comprender mejor la información anterior se presenta el siguiente ejemplo, que será el ejercicio base de todo este componente formativo y del cual se desprenderá la información temática relacionada en el contenido:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        h4.t1(data-aos="fade-down") Problema:
        .bg8.p-4(data-aos="flip-down") 
          p(data-aos="fade-down").mb-0 #[b #[mark.m1 “Clasificar]] las flores tipo iris, con el objetivo de #[b #[mark.m1 predecir]] a qué tipo de especie pertenece, de la cual se conocen las longitudes de sus pétalos y sépalos”. 

    p(data-aos="fade-down") A continuación se muestra una variedad de flores llamada iris, esta flor tiene tres especies distintas: iris setosa, iris virginica e iris versicolor, que se diferencian por los anchos y altos de los pétalos y de los sépalos.  
    img.img-a.img-t.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/25.png', alt='')
    .row.justify-content-start.mb-4
      .col-lg-3.up.my-3
        p(data-aos="fade-down") Hay similitudes en morfología entre esas especies, aunque todas tienen el mismo nombre, hay alguna diferencia entre las tres especies. Se observa que hay una diferencia notable en las semillas de esas tres especies, además de la diferencia en los tamaños de sus pétalos y sépalos.
      .col-lg-7.up.my-3
        .bg1.p-4.brad 
          .row.justify-content-center.align-items-center   
            .col-lg-auto.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/26.png', alt='')           
            .col.my-3.j
              p(data-aos="fade-down") La flor de iris puede identificarse atendiendo a los anchos y altos de sus pétalos y sépalos. 

              p(data-aos="fade-down").mb-0 Si no se conoce qué es el pétalo y qué es el sépalo, observe la figura, los sépalos protegen la flor, brindan protección, ya que los pétalos rodean las unidades reproductoras de las flores. Los sépalos en conjunto forman el cáliz y los pétalos en conjunto forman la corola.         

    .row.justify-content-center.mb-4
      .col-lg-4.up.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/27.png', alt='')
      .col-lg-8.up.my-3
        p(data-aos="fade-down") Para resolver el problema con Python se usará una #[i dataset] en la nube llamado iris.csv (Kagle.com, 2022), cuyos datos contienen características (longitud y anchura de sépalos y pétalos) de 50 muestras de cada una de las tres especies de iris (setosa, virginica y versicolor) para un total de 150 observaciones.

        p(data-aos="fade-down") El #[i dataset] se puede obtener en la siguiente ruta #[b #[mark.m1 https://www.kaggle.com/datasets/saurabh00007/iriscsv]] o directamente se puede cargar de la ruta #[b #[mark.m1 https://raw.githubusercontent.com/toneloy/data/master/iris.csv]] como se muestra en el código fuente

        p(data-aos="fade-down") A continuación se comparte el archivo en el que se muestran los datos de #[i dataset]: #[b #[mark.m1 Anexo1-iris.csv.]] De igual forma, el código también se encontrará en el anexo denominado: #[b #[mark.m1 Anexo2-ejecutable-iris.ipynb.]] 
        .row
          .col-lg-auto.my-3
            a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo1-iris.csv')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p.mb-0 #[b Anexo.] iris.csv    
          .col-lg-auto.my-3
            a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo2-ejecutable-iris.ipynb')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p.mb-0 #[b Anexo.] ejecutable-iris.ipynb

    .row.justify-content-start.mb-3
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bg6.p-0.px-4
            h4.mb-1 Procedimiento de resolución del problema  
    .row.justify-content-center.mb-4
      .col-lg-8.up.my-3
      
        h4(data-aos="fade-down") Introducción a los #[i dataframes] 
        p(data-aos="fade-down") En Python un #[i dataframe] es la estructura de datos fundamental de la librería denominada #[b #[mark.m1 Pandas]] (Python Data Analysis Library) y para iniciar la exploración de este #[i dataset] en Python se debe primero importar la librería; Pandas permite importar archivos csv, excel, json, html o sql, el código fuente de ejemplo se encuentra en el anexo indicado previamente: #[b #[mark.m1 Anexo1-iris]]. Observe el ejemplo a continuación: 
        .bg10.p-4.brad.mb-4
          h4(data-aos="fade-down").mb-0 import pandas as pd # importa pandas como pd , es un alias para referirse a panda iris_df = pd.read_csv #[mark.m2 (https://raw.githubusercontent.com/toneloy/data/master/iris.csv)] iris_df.head(8) # este comando permite visualizar los primeros 8 registros. 
        p(data-aos="fade-down") Los #[i dataset] pueden estar almacenados en repositorios de archivos o en discos duros, memorias etc., y los #[i dataframes] son estructuras que se obtienen a través de los #[i datasets] y se guardan en la memoria RAM, de este modo se pueden hacer operaciones sobre sus datos.

        p(data-aos="fade-down") A continuación, conocerá cómo inicia el procedimiento con la introducción de datos en el #[i dataframe]:        
      .col-lg-4.up.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/28.svg', alt='')  

    .bg11.mb-5
      .row.justify-content-center.pt-4
        .col-lg-8.up.my-3
          .row.mb-4
            .col-auto.up
              .bg12.brad.p-1
                h4.mb-0(data-aos="fade-down") Identificación de observaciones en comando #[i head]
          p(data-aos="fade-down") Luego de introducir los datos en los #[i dataframes], se puede realizar el análisis exploratorio y así detectar similitudes o patrones iniciales para resolver el problema. 

          p(data-aos="fade-down") El cuadro muestra los datos importados a analizar.
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Tabla 1.
            span Resultado de visualización de comando #[i head] para 8 observaciones           
          .tabla-a.color-acento-botones.mb-5
            table.text-center
              thead
                tr
                  th.wt 
                  th sepal_length
                  th sepal_width
                  th petal_length
                  th petal_width
                  th species
              tbody.bgw
                tr
                  td.wt 0
                  td 5.1
                  td 3.5
                  td 1.4
                  td 0.2
                  td setosa
                tr
                  td.wt 1
                  td 4.9
                  td 3.0
                  td 1.4
                  td 0.2
                  td setosa
                tr
                  td.wt 2
                  td 4.7
                  td 3.2
                  td 1.3
                  td 0.2
                  td setosa
                tr
                  td.wt 3
                  td 4.6
                  td 3.1
                  td 1.5
                  td 0.2
                  td  setosa
                tr
                  td.wt 4
                  td 5.0
                  td 3.6
                  td 1.4
                  td 0.2
                  td setosa
                tr
                  td.wt 5
                  td 5.4
                  td 3.9
                  td 1.7
                  td 0.4
                  td setosa
                tr
                  td.wt 6
                  td 4.6
                  td 3.4
                  td 1.4
                  td 0.3
                  td setosa
                tr
                  td.wt 7
                  td 5.0
                  td 3.4
                  td 1.5
                  td 0.2
                  td setosa          
        .col-lg-4.up.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/30.png', alt='')  

    p(data-aos="fade-down") Si se desea solo ver dos columnas a la vez se utiliza, por ejemplo, especie (#[i species]) y longitud del pétalo (#[i petal_length]), acá se usa el código:
    p(data-aos="fade-down").mb-5 iris_df[[‘species’, ‘petal_length’]] # los campos que se visualizan se usan en medio de doble corchete.   

    .row.justify-content-center.pt-4
      .col-lg-7.up.my-3
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 2.
          span Visualización de dos columnas de #[i dataset]       
        .tabla-a.color-acento-botones.mb-5
          table.text-center
            thead
              tr
                th.wt 
                th species
                th petal_length
            tbody.bgw
              tr
                td.wt 0
                td setosa
                td 1.4
              tr
                td.wt 1
                td setosa
                td 1.4
              tr
                td.wt 2
                td setosa
                td 1.3  
              tr
                td.wt 3
                td setosa
                td 1.5
              tr
                td.wt 4
                td setosa
                td 1.4 
              tr
                td.wt ...
                td ...
                td ...
              tr
                td.wt 145
                td virginica
                td 5.2
              tr
                td.wt 146
                td virginica
                td 5.0
              tr
                td.wt 147
                td virginica
                td 5.2
              tr
                td.wt 148
                td virginica
                td 5.4
              tr
                td.wt 149
                td virginica
                td 5.1                                              
      .col-lg-5.up.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/31.png', alt='')  

    .bg11.mb-5
      .row.pt-4
        .col-lg-6.up.my-3
          .row.mb-4
            .col-auto.up
              .bg12.brad.p-1
                h4.mb-0(data-aos="fade-down") Obtener media de las longitudes
          p(data-aos="fade-down") Para obtener la media de las longitudes de los pétalos se usa el comando: 
          p(data-aos="fade-down") <b> iris_df[‘petal_length’].mean() # </b>sirve para obtener la media.
        .col-lg-3.up.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/32.svg', alt='')  

    .row.mb-4
      .col-auto.up
        .bg12.brad.p-1
          h4.mb-0(data-aos="fade-down") Obtención de datos estadísticos descriptivos
    p(data-aos="fade-down") Para obtener todos los datos estadísticos descriptivos del #[i dataset] se usará el método que describe el #[i dataset] como muestra el código fuente: 
    p(data-aos="fade-down").mb-5 #[b iris_df.describe() # ]sirve para obtener todos los estadísticos descriptivos del #[i dataset].           
    .bg11
      .row.mb-4.pt-4
        .col-auto.up
          .bg12.brad.p-1
            h4.mb-0(data-aos="fade-down") Resultados
      .row
        .col-lg-5.up.my-3
          p(data-aos="fade-down") El resultado muestra la cantidad de registros, media, desviación estándar, mínimo, máximo y los principales percentiles de cada uno de las variables numéricas que tenga el #[i dataset].
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/33.png', alt='')  
        .col-lg-7.up.my-3
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Tabla 3.
            span Estadísticos descriptivos de #[i dataset] iris.csv         
          .tabla-a.color-acento-botones
            table.text-center
              thead
                tr
                  th.wt 
                  th sepal_length
                  th sepal_width
                  th petal_length
                  th petal_width
              tbody
                tr
                  td.wt count
                  td 150.000000
                  td 150.000000
                  td 150.000000
                  td 150.000000
                tr
                  td.wt mean
                  td 5.843333
                  td 3.057333
                  td 3.758000
                  td 1.199333
                tr
                  td.wt std
                  td 0.828066
                  td  0.435866
                  td 1.765298
                  td 0.762238
                tr
                  td.wt min
                  td 4.300000
                  td 2.000000
                  td 1.000000
                  td 0.100000
                tr
                  td.wt 25 %
                  td 5.100000
                  td 2.800000
                  td 1.600000
                  td 0.300000
                tr
                  td.wt 50 %
                  td 5.800000
                  td 3.000000
                  td 4.350000
                  td 1.300000
                tr
                  td.wt 75 %
                  td 6.400000
                  td 3.300000
                  td 5.100000
                  td 1.800000
                tr
                  td.wt max
                  td 7.900000
                  td 4.400000
                  td 6.900000
                  td 6.900000 
    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.2  Extracción y selección de características 

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")         
      .col-lg-auto.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/34.png', alt='')           
      .col.my-3
        p.mb-0 El análisis exploratorio de datos es usado para ganar un mejor entendimiento de los datos y conocimiento de la información en profundidad del problema propuesto, como características principales, variables y relaciones ocultas entre ellas.  
    p(data-aos="fade-down").mb-5 Existe un sinnúmero de métodos para realizar la exploración de datos como:                            

    .bg13.mb-5 
      .row.justify-content-center.mb-4         
        .col-lg-5.my-3(data-aos="fade-left")
          .bg14.p-4.brad.h-100
            img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/35.png', alt='') 
            h5 #[mark.m1 Estadísticas descriptivas]  
            p.mb-0 Muestran una breve descripción general del #[i dataframe], incluyendo medidas y tipos de variables.   
        .col-lg-5.my-3(data-aos="fade-right")
          .bg14.p-4.brad.h-100
            img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/36.png', alt='') 
            h5 #[mark.m1 Correlación]  
            p.mb-0 Indica con qué fuerza una variable afecta a la otra y existen medidas de esta relación como la correlación de Pearson. 
        .col-lg-5.my-3(data-aos="fade-left")
          .bg14.p-4.brad.h-100
            img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/37.png', alt='') 
            h5 #[mark.m1 Análisis de varianza ]  
            p.mb-0 Usado para comparar varianzas entre las medias de diferentes grupos.   
        .col-lg-5.my-3(data-aos="fade-right")
          .bg14.p-4.brad.h-100
            img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/38.png', alt='') 
            h5 #[mark.m1 Agrupación de datos]  
            p.mb-0 Permite determinar el efecto de atributos categóricos en otras variables.  

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .bg10.p-4
          p(data-aos="fade-down").mb-0 Para comprender los datos se debe #[mark.m2 #[b iniciar con un análisis exploratorio]], de esta forma se conoce la información en profundidad del problema propuesto, en Python se puede realizar fácilmente.

    p(data-aos="fade-down").mb-5 Lo primero que se debe hacer es importar las librerías necesarias como muestra el código fuente: 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8
        .bg15.p-4.px-5.brad.text-white(data-aos="fade-down")
          p 1 #[b.t2 import] #[b pandas] #[b.t2 as] #[b pd] # librería para obtener datos y usar la ciencia de datos. 
          p 2 #[b.t2 import] #[b matplotlib.pyplot] #[b.t2 as] #[b plt] # librería para realizar gráficas. 
          p 3 #[b.t2 import] #[b seaborn] #[b.t2 as] #[b sns] #librería para hacer gráficas, más elaboradas que la anterior. 
          p 4 #[b.t2 import] #[b numpy] #[b.t2 as] #[b np ]# librería que tiene métodos numéricos para Python. 
          p 5 #[b.t2 from] #[b scipy.stats] #[b.t2 import] #[b norm ]
          p 6 #[b.t2 from] #[b sklearn.preprocessing] #[b.t2 import] #[b StandardScaler] 
          p 7 #[b.t2 from] #[b scipy ]#[b.t2 import] #[b stats] 
          p.mb-0 8 #[b.t2 %]#[b matplotlib inline] 

    .row.justify-content-start.mb-3
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bg6.p-0.px-4
            h4.mb-1 Uso de #[i boxplot] 

    p(data-aos="fade-down").mb-5 Para realizar la exploración de los datos se usarán gráficos como: el diagrama de dispersión y el diagrama de pares o #[b #[mark.m1.fst-italic boxplot]] (el diagrama de cajas y bigotes); con este último, se puede observar la variable categórica especies (#[b #[mark.m1.fst-italic species]]) y su variación de longitudes y anchos de los sépalos (#[b #[mark.m1.fst-italic petal_length, petal_width]]) y pétalos (#[b #[mark.m1.fst-italic sepal_length, sepal_width]]) para cada especie. Con este diagrama se puede comparar la variación de datos entre las diferentes especies, tal como se evidencia en el siguiente recurso.

    AcordionA(tipo="a" clase-tarjeta="tarjeta bgac")(data-aos="fade-left")
      div.ps-5(titulo="Creación de conjuntos") 
        p Con el código relacionado se crean conjuntos de datos variables en las que se guardan las variables de interés, concatenando la variable categórica #[i species] con la longitud respectiva de la variable como
        h5.mb-5 sepal_length, sepal_width , petal_length, petal_width.
        .row.justify-content-center.align-items-center.mb-5           
          .col-lg-8
            .bg15.p-4.px-5.text-white
              ol.lista-ol.fa-ul
             
                li 
                  span 1 
                  p.mb-0.ps-4  datosLongitudSepalo #[b.t2 =] 
                li 
                  span 2 
                  p.mb-0.ps-4  pd.#[b.t3 concat]([iris_df[‘sepal_length’],iris_df[var]], #[b.t4 axis] #[b.t2 =] #[b.t5 1]) 
                li 
                  span 3 
                  p.mb-0.ps-4  datosAnchoSepalo #[b.t2 =] 
                li 
                  span 4 
                  p.mb-0.ps-4  pd.#[b.t3 concat]([iris_df[‘sepal_width’],iris_df[var]], #[b.t4 axis] #[b.t2 =] #[b.t5 1])
                li 
                  span 5 
                  p.mb-0.ps-4  datosLongitudPetalo #[b.t2 =] 
                li 
                  span 6 
                  p.mb-0.ps-4  pd.#[b.t3 concat]([iris_df[‘petal_length’],iris_df[var]], #[b.t4 axis] #[b.t2 =] #[b.t5 1])
                li 
                  span 7 
                  p.mb-0.ps-4  datosAnchoPetalo #[b.t2 =] 
                li 
                  span 8 
                  p.mb-0.ps-4  pd.#[b.t3 concat]([iris_df[‘petal_width’],iris_df[var]], #[b.t4 axis] #[b.t2 =] #[b.t5 1])
                li 
                  span 9 
                  p.mb-0.ps-4  
                li 
                  span 10 
                  p.mb-0.ps-4  datosLongitudSepalo.#[b.t3 head](#[b.t5 5])
                li 
                  span 11 
                  p.mb-0.ps-4  datosAnchoSepalo.#[b.t3 head](#[b.t5 5])
                li 
                  span 12 
                  p.mb-0.ps-4  datosLongitudPetalo.#[b.t3 head](#[b.t5 5])
                li 
                  span 13 
                  p.mb-0.ps-4  datosAnchoPetalo.#[b.t3 head](#[b.t5 5]) 
                       
      div.ps-5(titulo="Primeras observaciones") 
        p Las primeras 5 filas de cada variable se muestran así:
        .titulo-sexto.color-acento-contenido
            h5 Tabla 4.
            span Cinco primeras filas de cada variable         
        .tabla-a.color-acento-botones
          table.text-center
            thead
              tr
                th.wt 
                th sepal_length
                th species 
                th sepal_width
                th species
                th petal_length
                th species
                th petal_width
                th species
            tbody.bgw
              tr
                td.wt 0
                td 5.1
                td setosa
                td 3.5
                td setosa
                td 1.4
                td setosa 
                td 0.2
                td setosa
              tr
                td.wt 1
                td 4.9
                td setosa
                td 3.0
                td setosa 
                td 1.4
                td setosa 
                td 0.2
                td setosa
              tr
                td.wt 2
                td 4.7
                td setosa
                td 3.2
                td setosa
                td 1.3
                td setosa
                td 0.2
                td setosa
              tr
                td.wt 3
                td 4.6
                td setosa 
                td 3.1
                td setosa 
                td 1.5
                td setosa 
                td 0.2
                td setosa
              tr
                td.wt 4
                td 5.0
                td setosa 
                td 3.6
                td setosa 
                td 1.4
                td setosa
                td 0.2
                td setosa                
      div.ps-5(titulo="Graficar <i>boxplot</i>") 
        p Con el siguiente código se grafican los #[b #[i boxplots]] de las especies con cada una de sus variables.
        .row.justify-content-center.align-items-center.mb-5           
          .col-lg-8
            .bg15.p-4.px-5.text-white
              p.text-boldd var #[b.t2 =] ‘species’ 

              p.t6 #[b.text-white f, ax] #[b.t2 =] #[b.text-white plt.]#[b.t3 subplots]#[b.text-white (]#[b.t4 figsize]#[b.t2 =]#[b.text-white (]#[b.t5 15,8]#[b.text-white )]#[b.text-white )] #área en donde voy a graficar 

              p.t6 #[b.text-white plt.]#[b.t3 subplot] #[b.text-white (]#[b.t5 2,2,1]#[b.text-white )] # define posición para primer gráfico quiere decir 2 que la tabla tiene 2 filas 2 columnas y se grafica en la posicion 1 fig = sns.boxplot(x=var, y=“sepal_length”, data =datosLongitudSepalo, palette =[‘blue’, ‘orange’, ‘green’]) # se dibuja el boxplot fig.axis (ymin=4, ymax=8) 

              p.t6 #[b.text-white plt.]#[b.t3 subplot] #[b.text-white (]#[b.t5 2,2,2]#[b.text-white )] #define posición para segundo gráfico en posición 2 fig = sns.boxplot(x=var, y=“sepal_width”, data =datosAnchoSepalo, palette =[‘blue’, ‘orange’, ‘green’]) # se dibuja el boxplot fig.axis (ymin=1, ymax=5) 

              p.t6 #[b.text-white plt.]#[b.t3 subplot] #[b.text-white (]#[b.t5 2,2,3]#[b.text-white )] # define posicion izquierda para primer gráfico en posición 3 fig = sns.boxplot(x=var, y=“petal_length”, data =datosLongitudPetalo, palette =[‘blue’, ‘orange’, ‘green’]) # se dibuja el boxplot fig.axis (ymin=1, ymax=7) 

              p.t6.mb-0 #[b.text-white plt.]#[b.t3 subplot] #[b.text-white (]#[b.t5 2,2,4]#[b.text-white )] #define posición para segundo gráfico fig = sns.boxplot(x=var, y=“petal_width”, data =datosAnchoPetalo, palette =[‘blue’, ‘orange’, ‘green’]) # se dibuja el boxplot fig.axis (ymin=0, ymax=3)                    
      div.ps-5(titulo="Resultado") 
        p A partir de lo anterior se obtiene el siguiente gráfico:
        img.img-a.img-t(src='@/assets/curso/temas/40.png', alt='')           

    p(data-aos="fade-down").my-5 Observando los cuatro gráficos #[i boxplot] se puede obtener algunas conclusiones preliminares, por ejemplo: 

    .row.justify-content-center.mb-4
      .col-lg-4.up.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/41.png', alt='')
      .col-lg-8.up.my-3
        p(data-aos="fade-down") La longitud de los sépalos de la especie setosa son menores que las otras especies; pero su ancho es de longitud mayor que las otras especies, se observa que la longitud y ancho del sépalo se diferencia de las otras dos especies; pero hay una diferenciación menor entre las otras dos especies. 
        .bg10.p-4.brad
          .row.justify-content-center.align-items-center(data-aos="fade-right")         
            .col-lg-auto.my-2
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/42.png', alt='')           
            .col.my-2
              p.mb-0 Las variables de los pétalos de las tres especies tienen variaciones importantes tanto en longitud del pétalo como el ancho del pétalo respecto a las variaciones de los anchos y longitudes de los sépalos, lo cual hace que las variables de longitud y ancho de los pétalos contribuyan más a la hora de definir a qué especie pertenece una flor. 

    .row.justify-content-start.mb-3
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bg6.p-0.px-4
            h4.mb-1 Uso de #[i Scatter Plot] o diagrama de dispersión
    p(data-aos="fade-down").mb-5 El #[i Scatter Plot] o diagrama de dispersión es un tipo de despliegue de datos que muestra la relación entre dos variables numéricas en un #[i dataframe]; el diagrama muestra qué tanto se afectan entre sí dichas variables o que grado de independencia hay entre ellas; pero se deben entender que la dispersión se define como la medida de distancia entre los valores de un #[i dataset] a su punto medio.            

    .bg14.p-4.mb-5 
      .row.justify-content-center
        .col-lg-4.up.my-3
          p(data-aos="fade-down") En el caso del #[i dataset] iris.csv (Kagle.com, 2022) se va a revisar la relación entre longitudes y anchos del sépalo y entre longitudes y anchos del pétalo, para lo cual se usará el siguiente código:   
          img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/43.png', alt='')
        .col-lg-8.up.my-3
          .bg15.p-4.px-5.text-white(data-aos="zoom-in")
            p.t6 #[b.text-white f, ax] #[b.t2 =] #[b.text-white plt.subplots]#[b.text-white (]#[b.t4 figsize]#[b.t2 =]#[b.text-white (]#[b.t5 18,8]#[b.text-white )]#[b.text-white )] #área en donde voy a graficar 
            p.text-boldd plt.#[b.t3 subplot] (#[b.t5 1,2,1]) 
            p.text-boldd sns.#[b.t3 scatterplot] (#[b.t4 x] #[b.t2 =] iris_df.sepal_length, #[b.t4 y] #[b.t2 =] iris_df.sepal_width, #[b.t4 hue] #[b.t2 =] iris_df.species, #[b.t4 style] #[b.t2 =] iris_df.species, #[b.t4 palette] #[b.t2 =][‘blue’, ‘orange’, ‘green’]) 

            p.text-boldd plt.#[b.t3 subplot] (#[b.t5 1,2,2]) 
            p.text-boldd sns.#[b.t3 scatterplot] (#[b.t4 x] #[b.t2 =] iris_df.petal_length, #[b.t4 y] #[b.t2 =] iris_df.petal_width, #[b.t4 hue] #[b.t2 =] iris_df.species, #[b.t4 style] #[b.t2 =] iris_df.species, #[b.t4 palette] #[b.t2 =][‘blue’, ‘orange’, ‘green’]) 

    p(data-aos="fade-down").mb-5 Se obtienen los siguientes gráficos: 
    .row.justify-content-center
      .col-lg-7.up.my-3
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 5.
          span Distribución de longitud y ancho de sépalo y pétalo
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/44.png', alt='Dos gráficos en el que se presentan la distribución de longitud y ancho de sépalo (lado izquierdo) y longitud y ancho de pétalo (lado derecho)') 
      .col-lg-5.up.my-3 
        .bg10.p-4.brad.h-100.j
          .row.justify-content-center.align-items-center(data-aos="fade-right")
            p El gráfico confirma las observaciones realizadas con los #[i boxplot], que las longitudes de las especies setosa son más pequeñas que la de las otras dos especies y con el ancho del sépalo más grande que las otras dos especies, mostrando el patrón de la figura; las otras dos especies no se agrupan de una manera diferenciadora, si se desea clasificar solo la especie setosa. 
            p.mb-0 En cambio, en el gráfico de dispersión de longitudes y en el ancho del pétalo sí se muestra un patrón que permite clasificar una flor en cada especie, así se concluye que las variables longitud y ancho de los pétalos contribuyen enormemente a la hora de clasificar el tipo de especie a la que pertenece una flor.    

    .row.justify-content-start.mb-3
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bg6.p-0.px-4
            h4.mb-1 Uso de Pairplot o gráfica de pare
    p(data-aos="fade-down").mb-5 Con esta gráfica se puede observar a simple vista todas las relaciones de las columnas o valores entre sí, en una cuadrícula con ejes X y Y. Las variables pueden ser continuas o categóricas, se usa para entender mejor el conjunto de características que ayuda a interpretar la relación entre dos variables o para formar los clústeres más separados, también ayuda a formar modelos de clasificación simples observando y separando los datos.

    .row.justify-content-center.align-items-center.mb-5.bg16.p-4           
      .col-lg-10
        p(data-aos="fade-down") Se usa el mismo ejemplo para entender la gráfica de pares, aplicando: sns.pairplot(iris_df, hue=‘species’, height=2)
        .row.justify-content-center.align-items-start       
          .col-lg-5.up
            .titulo-sexto.color-acento-contenido(data-aos="fade-right")
              h5 Figura 6.
              span Gráfico de pares o pairplot
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/46.png', alt='Representación gráfica del uso de Pairplot de todas las variables.') 
          .col-lg-7.up.pt-5
            p(data-aos="fade-down") Esta gráfica permite observar algunos patrones tales como la longitud del sépalo y el ancho del sépalo que presenta mucho traslape entre las especies, a diferencia de la longitud y el ancho de los pétalos, cuyo traslape es poco, de esta forma se puede escoger la longitud del pétalo (#[i petal_length]) y el ancho del pétalo (#[i petal_width]) como características para la clasificación. 

    Separador 
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.3  Refinamiento del algoritmo de agrupación   
    p(data-aos="fade-down").mb-5 La agrupación de datos es un método de clasificación no supervisada, cuyo principal objetivo es buscar patrones ocultos en los datos y con estos crear grupos específicos llamados clúster, estos métodos son usados en la detección de anomalías y en muchas áreas del conocimiento tales como la medicina, las matemáticas, la biología, la astronomía y la industria. A continuación, se explica un poco más en qué consiste el refinamiento del algoritmo de agrupación:  

    TabsA.color-acento-botones
      .tarjeta.color-acento-botones--borde.p-4.mb-3(titulo="Agrupación de datos")
        .row.justify-content-center
          .col-lg-6.my-3        
            h4 Agrupación de datos 
            p Uno de los algoritmos más usados para agrupar datos es el #[i k-means] o K-medias, por su sencillez y facilidad de implementación, ya que arroja excelentes resultados, aunque presenta algunas desventajas como identificar clúster no esféricos, de tamaños diversos. 

            p.mb-0 Este algoritmo es sensible a datos atípicos y al ruido, además exige escoger el tamaño de #[b k] y la inicialización aleatoria de centroides.                      
          .col-lg-6.my-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/47.png', alt='')   
      .tarjeta.color-acento-botones--borde.p-4.mb-3(titulo="Sklearn Clúster")
        .row.justify-content-center
          .col-lg-6.my-3        
            h4 Sklearn clúster 
            p.mb-0 Con el ejemplo del #[i daset iris] se busca agrupar los datos del #[i dataset] #[b.fst-italic iris.csv] usando el algoritmo de agrupamiento #[i k-means], donde ya se presentaron y se visualizaron los datos del caso estudiado para identificar patrones iniciales, entonces, para continuar con la solución se debe usar Python, específicamente la librería #[b.fst-italic sklearn] clúster.                      
          .col-lg-6.my-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/47.png', alt='')
      .tarjeta.color-acento-botones--borde.p-4.mb-3(titulo="Integración de datos")
        .row.justify-content-center
          .col-lg-6.my-3        
            h4 Integración de datos
            p Lo primero que se debe hacer en Python es importar las librerías necesarias para ejecutar el algoritmo no supervisado con #[i k-means]:  
            p from sklearn.clúster import #[i k-means] 

            p.mb-0 De los datos originales se obtiene únicamente los valores de #[i sepal_length] (longitud del sépalo), #[i sepal_width] (ancho del sépalo), #[i petal_length] (longitud del pétalo) y #[i petal_width] (ancho del pétalo).                               
          .col-lg-6.my-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/47.png', alt='') 

    .bg11.my-5
      .row.justify-content-start.mb-3.pt-4
        .col-auto(data-aos="flip-down")
          .list
            .list__item
              .list__item__icon
                img(src='@/assets/curso/temas/icon.svg', alt='')
            .list__txt.bg6.p-0.px-4
              h4.mb-1  Continuación del procedimiento  
      p(data-aos="fade-down").mb-5 Antes de realizar el procesamiento de los datos se separan unas filas que pueden ser los datos de muestra, las cuales posteriormente se usan para verificar a qué clúster pertenecen, pues los datos se eligen al azar.
      .row.justify-content-center.mb-4
        .col-lg-7.up.my-3
          .bg10.p-1.mb-4
            h5(data-aos="fade-down").mb-0 Nota: en este ejercicio se obtendrá una muestra de 3 registros de los 150 registros originales. 
          p(data-aos="fade-down") Se elige aleatoriamente con cualquier mecanismo el registro 30, el registro 51 y el registro 120, usando la función #[b.m1 loc] del #[i dataframe], tal como se presenta a continuación: 
          .bg15.brad.p-4.px-5.text-white.mb-4(data-aos="zoom-in") 
            ol.lista-ol.fa-ul.mb-0        
              li 
                span 1 
                p.mb-0.ps-4.text-boldd indiceMuestra #[b.t2 =] [#[b.t5 30,51,120]] 
              li 
                span 2 
                p.mb-0.ps-4.text-boldd muestras #[b.t2 =]  pd.#[b.t3 DataFrame] (iris_df.loc[indiceMuestra], #[b.t4 columns] #[b.t2 =]  
              li.mb-0 
                span 3
                p.mb-0.ps-4.text-boldd iris_df.#[b.t3 keys]()).#[b.t3 reset_index](#[b.t4 drop] #[b.t2 =] True)  

          p(data-aos="fade-down") Dando como resultado 
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Tabla 5.
            span Resultado de la función #[b loc]          
          .tabla-a.color-acento-botones
            table.text-center
              thead
                tr
                  th.wt 
                  th sepal_length
                  th sepal_width
                  th petal_length
                  th petal_width
                  th species
              tbody.bgw
                tr
                  td.wt 0
                  td 4.8
                  td 3.1
                  td 1.6
                  td 0.2
                  td setosa
                tr
                  td.wt 1
                  td 6.4
                  td 3.2
                  td 4.5
                  td 1.5
                  td versicolor
                tr
                  td.wt 2
                  td 6.9
                  td 3.2
                  td 5.7
                  td 2.3
                  td virginica          
        .col-lg-5.up.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/50.png', alt='')        
    
    p(data-aos="fade-down").mb-5 Una vez escogidas las muestras, estas se eliminan de la data original #[b iris_df], de los datos de muestra, para que estos no se integren con el resto de la información y para ello se usa el siguiente código.     

    .row.justify-content-center
      .col-lg-5.up.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/51.svg', alt='')
      .col-lg-7.up.my-3
        .bg15.p-1.px-4.mb-4.text-white(data-aos="zoom-in")
          p.t6.mb-0 #[b.text-white iris_df]#[b.t2 =] #[b.text-white iris_df.]drop#[b.text-white (indiceMuestra,] #[b.t4 axis] #[b.t2 =] #[b.text-white 0) ]#axis = 0 significa que se eliminan filas  

        p(data-aos="fade-down") En una variable #[b #[mark.m1 X]] se guardan las columnas con valores del #[i dataset] original, con los cuales se va a entrenar el algoritmo; para esto se usa la función #[b iloc] sobre el #[i dataset] original #[b #[mark.m1 iris_df.]] Estos datos corresponden a las #[b #[mark.m1 variables de longitudes y anchos de los sépalos y los pétalos únicamente.]]
        p(data-aos="fade-down") El conjunto de datos no cuenta con una columna de variable dependiente o #[b #[mark.m1 Y]] en aprendizaje no supervisado, todos son variables dependientes, en este caso es #[b #[mark.m1 X]].
        .row
          .col-lg-auto         
            .bg15.p-1.px-4.mb-4.text-white(data-aos="zoom-in")
              ol.lista-ol.fa-ul.mb-0        
                li.mb-0 
                  span 1 
                  p.mb-0.ps-4.text-boldd X #[b.t2 =] iris_df.iloc[:, [#[b.t5 0, 1, 2,3]]].values                  
        p(data-aos="fade-down") Al imprimir #[b X] una muestra de los resultados es: 
        .row          
          .col-lg-auto
            .titulo-sexto.color-acento-contenido(data-aos="fade-right")
              h5 Figura 7.
              span Variable X consistente en resultados a entrenar con el algoritmo #[i k-means]
            img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/52.png', alt='Se presentan los datos de las medidas de los pétalos y sépalos.')  

    p(data-aos="fade-down").my-5 Todos los datos son medidas en centímetros de los pétalos y los sépalos, por lo cual no es necesario realizar algún trabajo de transformación en las variables.  

    .row.justify-content-center.mb-4
      .col-lg-7.up.my-3
        p(data-aos="fade-down") Para hallar el valor óptimo de K necesario en #[i k-means] se aplicará el #[b #[mark.m1 método del codo]], calculando el algoritmo de agrupación para diferentes valores de #[b #[mark.m1 (K)]]. 
        p(data-aos="fade-down") #[b #[mark.m1 El método del codo o método Elbow]] se construye calculando la inercia después de aplicar el método #[i k-means] a 1 , 2 , 3, …, N clúster, siendo la inercia la suma de las distancias al cuadrado de cada objeto del clúster a su centroide.
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/54.svg', alt='')
        p(data-aos="fade-down") El punto en el que se observa un cambio brusco en los datos de las inercias se tomará como el valor de #[b #[mark.m1 K]], la línea forma algo similar a la de un brazo y su codo, el código fuente en #[i k-means] se muestra a continuación:
      .col-lg-5.up.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/53.png', alt='')
                         

    .row.justify-content-center.mb-4
      .col-lg-5.up.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/55.svg', alt='')        
      .col-lg-7.up.my-3
        .bg15.p-1.px-4.mb-4.text-white(data-aos="zoom-in")
          ol.lista-ol.fa-ul.mb-0        
            li.mb-0 
              span 1 
              p.mb-0.ps-4.text-bold.t6 #[b.text-white inercia] #[b.t2 =]#[b.text-white [ ]] # suma de cuadrados 
            li.mb-0 
              span 2 
              p.mb-0.ps-4.text-bold #[b.t2 for] i #[b.t2 in] #[b.t3 range] (#[b.t5 1,20]): 
            li.mb-0 
              span 3
              p.mb-0.ps-5.text-bold algoritmo #[b.t2 =] #[b.t3 KMeans] (#[b.t4 n_clústers] #[b.t2 =] i, #[b.t4 max_iter] #[b.t2 =]#[b.t5 300]).#[b.t3 fit](X)
            li.mb-0 
              span 4
              p.mb-0.ps-5.text-bold inercia.#[b.t3 append](algoritmo.inertia_)
        p(data-aos="fade-down") Una vez se obtiene la inercia se grafica el vector de inercia con el siguiente código:  
        .bg15.p-1.px-4.mb-4.text-white(data-aos="zoom-in")
          ol.lista-ol.fa-ul.mb-0        
            li.mb-0 
              span 1 
              p.mb-0.ps-4.text-bold plt.#[b.t3 figure](#[b.t4 figsize] #[b.t2 =][#[b.t5 10,6]]) 
            li.mb-0 
              span 2 
              p.mb-0.ps-4.text-bold plt.#[b.t3 title](‘Método del codo’) 
            li.mb-0 
              span 3 
              p.mb-0.ps-4.text-bold plt.#[b.t3 xlabel](‘Número de clústers’) 
            li.mb-0 
              span 4
              p.mb-0.ps-4.text-bold plt.#[b.t3 ylabel](‘Inercia’) plt.#[b.t3 plot] ( #[b.t3 #[i list]](#[b.t3 range](#[b.t5 1,20])), inercia, #[b.t4 marker]#[b.t2 =]‘o’) 
            li.mb-0 
              span 5
              p.mb-0.ps-4.text-bold plt.show   

    p(data-aos="fade-down").mb-5 Generando la siguiente figura.

    .row.justify-content-center.mb-5          
      .col-lg-auto
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 8.
          span Diagrama de codo
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/56.png', alt='')  

    .row.justify-content-center.mb-4
      .col-lg-5.up.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/57.png', alt='')        
      .col-lg-7.up.my-3
        p(data-aos="fade-down") Se observa que el codo se encuentra entre los valores de 2.5 y 5, se usará por tanto #[b K=3].

        p(data-aos="fade-down") Definido el valor de #[b K ]ya se podrá aplicar el algoritmo de agrupamiento con el siguiente código fuente:

        .bg15.p-1.px-4.mb-4.text-white(data-aos="zoom-in")
          ol.lista-ol.fa-ul.mb-0        
            li.mb-0 
              span 1 
              p.mb-0.ps-4.text-bold algoritmo #[b.t2 =] #[b.t3 KMeans]( #[b.t4 n_clústers]#[b.t2 =]#[b.t5 3], #[b.t4 init] #[b.t2 =]‘k-means#[b.t2 ++]’, #[b.t4 max_iter]#[b.t2 =]300, #[b.t4 n_init] #[b.t2 =]#[b.t5 10])   

        p(data-aos="fade-down") #[b #[mark.m1 n clúster:]] se refiere a los clústeres que se averiguó anteriormente.
        p(data-aos="fade-down") #[b #[mark.m1 max_iter:]] número máximo de iteraciones en una misma ejecución.
        p(data-aos="fade-down") #[b #[mark.m1 n_init:]] número de veces que se ejecutará con diferentes centroides.

        p(data-aos="fade-down") Una vez definido el algoritmo y sus parámetros se entrena junto con los datos de la variable #[b #[mark.m1 X]] , para realizar esto se usa el comando #[b #[mark.m1 fit]].
        .row
          .col-auto         
            .bg15.p-1.px-4.text-white(data-aos="zoom-in")
              ol.lista-ol.fa-ul.mb-0        
                li.mb-0 
                  span 1 
                  p.mb-0.ps-4.text-bold algoritmo.#[b.t3 fit](X) 

    p(data-aos="fade-down").mb-5 Una vez entrenado el algoritmo se debe revisar los datos de los centroides y las etiquetas obtenidas, estas etiquetas no son más que la identificación del clúster en donde queda la flor.    

    .row.justify-content-center.mb-4
      .col-lg-3.up.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/58.svg', alt='')        
      .col-lg-9.up.my-3
        .row
          .col-auto       
            .bg15.p-1.px-4.text-white.mb-4(data-aos="zoom-in")
              p.mb-0.text-bold centroides, etiquetas #[b.t2 =] algoritmo.clúster_centers_, algoritmo.labels_  
        p(data-aos="fade-down") El algoritmo genera centroides en la variable algoritmo.cluster_centers_ y las etiquetas en la variable algoritmo.labels_

        p(data-aos="fade-down") En el caso del ejercicio del ejemplo, el algoritmo arroja los siguientes centroides y etiquetas.  

    p(data-aos="fade-down").mb-5 Los centroides y etiquetas se muestran a continuación.  
    .row.justify-content-center.align-items-end.mb-4       
      .col-lg-5.up.my-3
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 9.
          span Centroides y etiquetas
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/59.png', alt='Se presentan los datos de los centroides y etiquetas') 
      .col-lg-3.up.my-3
        .bg10.p-4
          img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/60.svg', alt='')
          p(data-aos="fade-down").mb-0 Indicando los centroides son las coordenadas y las etiquetas representan el clúster en el que queda cada una de las observaciones.  

    Separador 
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.4  Segmentación de conjuntos de datos por atributos compartidos                                                            
    p(data-aos="fade-down") Una de las principales aplicaciones del aprendizaje no supervisado es la segmentación de #[i dataset], cada clúster es mutuamente excluyente y se conoce como segmentos, la técnica de agrupar se conoce como segmentación. En las empresas, la segmentación permite identificar diferentes preferencias de los clientes, el resultado es importante para realizar el mercadeo efectivo de los productos y los servicios.

    p(data-aos="fade-down").mb-5 Entre aplicaciones de segmentación o #[i clustering] están:   

    .row.justify-content-center.mb-4
      .col-lg-5.up.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/61.png', alt='')        
      .col-lg-7.up.my-3
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-angle-right.vi
            p.mb-0 Identificación de patrones de compra, recomendaciones de películas o series a los usuarios de #[i streaming].
          li 
            i.fas.fa-angle-right.vi
            p.mb-0 Detección de fraudes bancarios.
          li 
            i.fas.fa-angle-right.vi
            p.mb-0 Detección de atípicos.
          li 
            i.fas.fa-angle-right.vi
            p.mb-0 Riesgos de seguros.
          li 
            i.fas.fa-angle-right.vi
            p.mb-0 Comportamiento de los pacientes.
          li 
            i.fas.fa-angle-right.vi
            p.mb-0 Clasificación de documentos.
          li 
            i.fas.fa-angle-right.vi
            p.mb-0 Identificación de síntomas.  

    p(data-aos="fade-down").mb-5 En el caso del ejemplo propuesto es conveniente graficar los datos obtenidos en clúster, para lo cual se usa el siguiente código de las longitudes y ancho de los sépalos:

    .row.justify-content-center.mb-4     
      .col-lg-7.up.my-3
        .bg15.p-1.px-4.mb-4.text-white(data-aos="zoom-in")
          ol.lista-ol.fa-ul.mb-0        
            li.mb-0 
              span 1 
              p.mb-0.ps-4.t6 #Aplicando K-means al dataset / creación del clasificador con k-means 
            li.mb-0 
              span 2 
              p.mb-0.ps-4.text-bold plt.#[b.t3 scatter](X[etiquetas #[b.t2 ==] #[b.t5 0,0]], X[etiquetas#[b.t2 ==]#[b.t5 0,1]], #[b.t4 s] #[b.t2 =] 15, c#[b.t2 =] ‘red’, #[b.t4 label] #[b.t2 =] ‘Clúster_0’) 
            li.mb-0 
              span 3 
              p.mb-0.ps-4.text-bold plt.#[b.t3 scatte]r(X[etiquetas#[b.t2 ==] #[b.t5 1,0]], X[etiquetas#[b.t2 ==]#[b.t5 1,1]], #[b.t4 s] #[b.t2 =] 15, c#[b.t2 =] ‘blue’, #[b.t4 label] #[b.t2 =] ‘Clúster_1’) 
            li.mb-0 
              span 4
              p.mb-0.ps-4.text-bold plt.#[b.t3 scatter](X[etiquetas #[b.t2 ==] #[b.t5 2,0]], X[etiquetas#[b.t2 ==]#[b.t5 2,1]], #[b.t4 s] #[b.t2 =] 15, c#[b.t2 =] ‘green’, #[b.t4 label] #[b.t2 =] ‘Clúster_2’) 
            li.mb-0 
              span 5
              p.mb-0.ps-4.text-bold plt.#[b.t3 scatter](centroides[:,#[b.t5 0]], centroides[:,1], s #[b.t2 =] #[b.t5 55], #[b.t4 c] #[b.t2 =] ‘black’, #[b.t4 label] #[b.t2 =] ‘Centroids’) 
            li.mb-0 
              span 6
              p.mb-0.ps-4.text-bold  
            li.mb-0 
              span 7
              p.mb-0.ps-4.text-bold plt.#[b.t3 legend]() 
            li.mb-0 
              span 8
              p.mb-0.ps-4.text-bold plt.#[b.t3 show]()   
      .col-lg-5.up.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/62.png', alt='') 

    .row.justify-content-center.align-items-end.mb-4       
      .col-lg-4.up.my-3
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 10.
          span Centroides y clúster
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/64.png', alt='Gráfica de centroides y clúster obtenidos teniendo en cuenta la longitud y ancho del sépalo.') 
      .col-lg-4.up.my-3
        .bg10.p-4
          img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/63.png', alt='')
          p(data-aos="fade-down").mb-0 En este caso se han graficado los clústeres obtenidos, teniendo en cuenta la longitud y ancho del sépalo que son las columnas 0 y 1 del #[i dataset], se observa que el clúster 0 de color rojo podría ser los datos de la especie setosa, el clúster 1 de color azul equivale a la especie virgínica y el clúster 2 de color verde corresponde al versicolor.                                            
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
