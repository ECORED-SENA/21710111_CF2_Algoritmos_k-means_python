<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Validación del resultado del análisis
    .row.justify-content-center.mb-4         
      .col-lg-4.my-3(data-aos="fade-right")
        p Lo más importante al usar machine learning de algoritmos supervisados o no supervisados es la interpretación de los resultados. En el caso de la clusterización con k-means se deben revisar si los clúster encontrados tienen sentido lógico y cumplen con los objetivos, si un clúster tiene muy pocos o muchos datos lo más responsable es volver a ejecutar el análisis con otros centroides por ejemplo.
   
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/77.png', alt='') 

      .col-lg-4.my-3(data-aos="fade-left")
        .bg14.p-3.j
          p.mb-0 Una variable importante es la distancia euclídea definitiva entre cada punto y su centroide, sus promedios deben tener una variabilidad moderada, si esto no se cumple, lo mejor es repetir el proceso, también es importante medir qué tan separado está un clúster de otros. 

    .row.justify-content-center.mb-4
      .col-lg-4.up.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/78.png', alt='')        
      .col-lg-8.up.my-3
        p(data-aos="fade-down") Muchas veces la validación de los clúster es lo más difícil en el análisis de los clúster encontrados; pero es necesario hacerlo usando medidas internas y externas.

        p(data-aos="fade-down") Existen dos parámetros importantes: 

        .row.justify-content-center.text-center         
          .col-lg-6.my-3(data-aos="fade-left")
            .bg18.text-white.p-4.brad.h-100
              img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/79.png', alt='') 
              h5.t7 #[mark.m1.px-2 Cohesión]  
              p.mb-0 Es la distancia promedio del centroide a todos los demás puntos en el mismo #[i clúster]. 
          .col-lg-6.my-3(data-aos="fade-right")
            .bg18.text-white.p-4.brad.h-100
              img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/80.png', alt='') 
              h5.t7 #[mark.m1.px-2 Separación]  
              p.mb-0 Distancia promedio del centroide a todos los demás puntos en el #[i clúster] cercano.    

    p(data-aos="fade-down").mb-4 Para ir dando finalización al proceso ya iniciado se deben usar las muestras separadas inicialmente y observar a qué clúster pertenecen, además de forma preliminar observar los resultados que predice el algoritmo. Se retoma entonces la prueba original consistente en tres observaciones.     
    .row.justify-content-center.mb-5      
      .col-lg-8.up.my-3
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
        .row.justify-content-center.align-items-center         
          .col-lg-12.bg19.p-4
            .row.justify-content-center
              .col-auto      
                .bg15.p-1.px-4.mb-4.brad.text-white(data-aos="zoom-in")
                  ol.lista-ol.fa-ul.mb-0        
                    li.mb-0 
                      span 1 
                      p.mb-0.ps-4.text-bold Xmuestras #[b.t2 =] muestras.iloc[:, [#[b.t5 0, 1, 2, 3]]].values 
                    li.mb-0 
                      span 2
                      p.mb-0.ps-4.text-bold YMuestraPrediccion #[b.t2 =] algoritmo.#[b.t3 predict] (Xmuestras ) 
                    li.mb-0 
                      span 3
                      p.mb-0.ps-4.text-bold #[b.t3 print] (YMuestraPrediccion) 
              p(data-aos="fade-down") [0 2 1] es el resultado de cada una de las muestras, las cuales están ubicadas en el clúster 0, 2 y 1 respectivamente y de acuerdo con los resultados anteriores, el clúster 0 se refiere a la especie setosa, el clúster 1 es virginica y el clúster 2 es versicolor.                                   
      .col-lg-4.up.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/81.png', alt='')  

    p(data-aos="fade-down").mb-4 Con el siguiente código se ubica esta muestra tomada y al graficarla se observa en los círculos más grandes los clúster en donde fueron ubicadas las tres muestras. 
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10.bg20.p-4
        .row.justify-content-center
          .col-lg-10      
            .bg15.p-1.px-4.mb-4.brad(data-aos="zoom-in")
              p.mb-0
                span.text-white.text-bold #[b.t3 figure](#[i #[b.t4 figsize]] #[b.t2 =][#[b.t5 10,10]]) plt.#[b.t3 scatter](X[etiquetas #[b.t2 ==] #[b.t5 0,2]], X[etiquetas#[b.t2 ==]#[b.t5 0,3]], #[b.t4 s] #[b.t2 =] #[b.t5 15], #[b.t4 c]#[b.t2 =] ‘#[b.t8 red]’, #[i #[b.t4 label]] = ‘#[b.t8 Clúster_0]’)plt.#[b.t3 scatter](X[etiquetas#[b.t2 ==] #[b.t5 1,2], X[etiquetas#[b.t2 ==]#[b.t5 1,3]], #[b.t4 s] #[b.t2 =] #[b.t5 15], #[b.t4 c]= ‘#[b.t8 blue]’, #[i #[b.t4 label]] #[b.t2 =] ‘#[b.t8 Clúster_1]’) plt.#[b.t3 scatter](X[etiquetas #[b.t2 ==] #[b.t5 2,2]], X[etiquetas#[b.t2 ==]#[b.t5 2,3]], #[b.t4 s] #[b.t2 =] #[b.t5 15], #[b.t4 c]#[b.t2 =] ‘#[b.t8 green]’, #[i #[b.t4 label]] #[b.t2 =] ‘#[b.t8 Clúster_2]’) plt.#[b.t3 scatter](centroides[:,#[b.t5 2], centroides[:,#[b.t5 3], #[b.t4 s] #[b.t2 =] #[b.t5 55], #[b.t4 c] #[b.t2 =] ‘#[b.t8 black]’, #[i #[b.t4 label]] #[b.t2 =] ‘#[b.t8 Centroids]’) 
                span.t6 # Se dibujan las muestras iniciales para prueba y son pintadas en el gráfico plt.scatter(Xmuestras[0,2], Xmuestras[0,3], s = 90, c= ‘red’) plt.scatter(Xmuestras[1,2], Xmuestras[1,3], s = 90, c= ‘blue’) plt.scatter(Xmuestras[2,2], Xmuestras[2,3], s = 90, c= ‘green’) plt.legend() plt.show()   
          p(data-aos="fade-down") Esto conduce a que el resultado de este código es #[b #[mark.m1 array(&#91;2&#93;),]] lo cual significa que queda ubicada en el clúster 2, lo cual quiere decir que probablemente esta flor se encuentra clasificada como especie #[b #[mark.m1 versicolor.]]

    p(data-aos="fade-down").mb-4 También se puede predecir en qué clúster quedaría identificada una flor iris, con datos diferentes a los obtenidos en las muestras anteriores; el proceso que se debe hacer es tal como muestra el código, por ejemplo, se tiene una flor con longitud sépalo = 7, ancho sépalo = 3, longitud de pétalo = 5, ancho de pétalo = 2.           

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10.bg20.p-4
        .row.justify-content-center
          .col-lg-10      
            .bg15.p-1.px-4.mb-4.brad(data-aos="zoom-in")
              ol.lista-ol.fa-ul.mb-0        
                li.mb-0 
                  span.text-white 1 
                  p.mb-0.ps-4.text-bold
                    span.text-white datos_flor #[b.t2 =]np.#[b.t3 array]([#[b.t5 1,3,5,2]]) 
                li.mb-0 
                  span.text-white 2 
                  p.mb-0.ps-4.text-bold
                    span.text-white datos_flor_fm #[b.t2 =]datos_flor.#[b.t3 reshape](#[b.t5 1, #[b.t2 -]1]) 
                    span.t6 #con este comando se le dice a python que cambie el array a una matriz de una sola fila 
                li.mb-0 
                  span.text-white 3 
                  p.mb-0.ps-4.text-bold
                    span.text-white datos_flor_fm 
                li.mb-0 
                  span.text-white 4
                  p.mb-0.ps-4.text-bold
                    span.text-white algoritmo.#[b.t3 predict](datos_flor_rs)   
          p(data-aos="fade-down") En resumen K-means es un método de agrupamiento, con el cual no se debe evaluar la precisión, porque se entrena el modelo con datos de etiquetas de clase y por tanto, puede haber diferencia entre las etiquetas verdaderas y las etiquetas pronosticadas. 

    p(data-aos="fade-down") Es conveniente comparar los gráficos de dispersión originales y con el resultado de K-means para evaluar el rendimiento de agrupación.                                      
</template>

<script>
export default {
  name: 'Tema3',
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
