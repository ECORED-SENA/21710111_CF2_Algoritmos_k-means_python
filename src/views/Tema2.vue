<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo1
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Herramientas tecnológicas para el agrupamiento de datos
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")         
      .col-lg-auto.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/34.png', alt='')           
      .col.my-3
        p.mb-0 Todos los algoritmos de agrupación de observaciones buscan el mismo objetivo, identificar el clúster basado en patrones ocultos en los datos, los datos en el mismo clúster tienen características parecidas, los puntos con características no similares deben estar ubicados en clúster diferentes, algunos algoritmos más utilizados son los siguientes: 

    .row.bg17.align-items-center.pt-3.mb-4
      .col-lg-12.col-12.px-lg-5.px-4.up
        .row.justify-content-center.align-items-center
          .col-md-11.col-lg-8.mb-4.mb-md-0.up(data-aos="fade-left")
            SlyderF.text-center.pb-4(columnas="col-lg-6")(data-aos="fade-right")
              .tarjeta.bgcard.ts.h-100.p-4
                img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/67.png', alt='')           
                h4.t1 Algoritmos de clustering
                p.mb-0 Identifica a los grupos que se forman naturalmente tal como el K-means del que ya se ha hablado bastante, basado en la identificación de un punto centroide en el plano en dos o tres dimensiones. 
              .tarjeta.bgcard.ts.h-100.p-4
                img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/68.png', alt='')           
                h4.t1 Análisis de componentes principales
                p.mb-0 Es un método que reduce la información de múltiples variables en algunos componentes, de esta forma puede emplearse para encontrarse patrones cuando se dispone de muchos predictores. 
              .tarjeta.bgcard.ts.h-100.p-4
                img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/69.png', alt='')           
                h4.t1 Descomposición en valores singulares
                p.mb-0 Es una técnica de reducción de dimensiones semejante al análisis de componentes principales, muy usado en sistemas de recomendación.
              .tarjeta.bgcard.ts.h-100.p-4
                img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/70.png', alt='')           
                h4.t1 DbScan
                p.mb-0 Significa #[i Density Based Spatial Clustering of Applications with Noise], algoritmo de #[i clustering] que se basa en densidades, identifica como valores atípicos aquellas observaciones que no cumplen con una propiedad de densidad establecida.
              .tarjeta.bgcard.ts.h-100.p-4
                img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/71.png', alt='')           
                h4.t1 Agrupamiento jerárquico
                p.mb-0 Los algoritmos de agrupación jerárquica buscan fusionar pares de clúster hasta identificar un solo clúster definitivo que contiene todos los puntos de datos, los clúster se representan en un árbol llamado dendograma.
          .col-md-6.col-lg-4.mb-4.mb-md-0.up(data-aos="fade-right")
            img(src='@/assets/curso/temas/66.png', alt='')

    p(data-aos="fade-down").mb-5 Continuando con el caso presentado, y como bien se ha visto, en Python se ha usado la librería scikit-learn para obtener los clúster #[b #[mark.m1 K-means.]] 

    .row.justify-content-center.mb-4
      .col-lg-5.up.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/72.png', alt='')        
      .col-lg-7.up.my-3
        .row
          .col-auto      
            .bg15.p-1.px-4.mb-4.text-white(data-aos="zoom-in")
              ol.lista-ol.fa-ul.mb-0        
                li.mb-0 
                  span 1 
                  p.mb-0.ps-4.text-bold #[b.t2 from] sklearn.clúster #[b.t2 import] KMeans 
                li.mb-0 
                  span 2 
                  p.mb-0.ps-4.text-bold 
                li.mb-0 
                  span 3 
                  p.mb-0.ps-4.text-bold km #[b.t2 =] #[b.t3 KMeans]( 
                li.mb-0 
                  span 4 
                  p.mb-0.ps-5.text-bold #[b.t4 n_clústers]#[b.t2 =]#[b.t5 3], #[b.t4 init]#[b.t2 =]‘random’, 
                li.mb-0 
                  span 5 
                  p.mb-0.ps-5.text-bold #[b.t4 n_init]#[b.t2 =]#[b.t5 10], #[b.t4 max_iter]#[b.t2 =]#[b.t5 300], 
                li.mb-0 
                  span 6 
                  p.mb-0.ps-5.text-bold #[b.t4 tol]#[b.t2 =]#[b.t5 1e-04], #[b.t4 random_state]#[b.t2 =]#[b.t5 0] 
                li.mb-0 
                  span 7 
                  p.mb-0.ps-4.text-bold )
                li.mb-0 
                  span 8
                  p.mb-0.ps-4.text-bold y_km #[b.t2 = ]km.#[b.t3 fit_predict](X)   

        h5.t1(data-aos="fade-down") En el código fuente la función tiene los siguientes parámetros de entrada:

        p(data-aos="fade-down") #[b.t1 n_clúster:] número de clúster deseados y obtenidos mediante algún método como el del codo.

        p(data-aos="fade-down") #[b.t1 n_init:] dice cuántas veces va a correr el algoritmo independientemente, con diferentes centroides aleatorios para escoger un modelo final con el más bajo error posible.

        p(data-aos="fade-down") #[b.t1 max_iter:] especifica el máximo número de iteraciones para cada ejecución única.   

    p(data-aos="fade-down") #[mark.m1 El algoritmo detiene la ejecución al momento en que los centroides ya no cambian, a pesar de que no se haya alcanzado el máximo número de iteraciones.]

    p(data-aos="fade-down").mb-5 Existen otras técnicas para realizar la clusterización, tales como:  

    .row.justify-content-center.mb-4         
      .col-lg-4.my-3(data-aos="fade-left")
        .bg14.p-4.brad.h-100
          img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/74.png', alt='') 
          h5 #[mark.m1 Gráficos silhouette o silueta]  
          p.mb-0 Es un método usado para seleccionar un óptimo valor de K  
      .col-lg-4.my-3(data-aos="fade-right")
        .bg14.p-4.brad.h-100
          img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/75.png', alt='') 
          h5 #[mark.m1 K-means++]  
          p.mb-0 Es una variante de K-means para mejorar el agrupamiento a través de una inicialización más inteligente de los centros de agrupamiento.   
      .col-lg-4.my-3(data-aos="fade-right")
        .bg14.p-4.brad.h-100
          img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/76.png', alt='') 
          h5 #[mark.m1 Clúster jerárquicos]  
          p.mb-0 Se basa en la #[b densidad], para no especificar número de clúster, ni estructuras esféricas en el conjunto de datos.    
    .row.justify-content-center.align-items-center(data-aos="fade-right")         
      .col-lg-auto.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/34.png', alt='')           
      .col.my-3.text-white
        p.mb-0 Una librería importante también es #[b.t7 #[mark.m1 TensorFlow]], que fue liberada por Google, esta contiene cálculos numéricos e inteligencia artificial y fue desarrollada por miembros del equipo de Google y corre en una variedad de plataformas como Python.                                      
</template>

<script>
export default {
  name: 'Tema2',
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
