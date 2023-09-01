<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p(data-aos="fade-down").mb-5 Se da la bienvenida al componente formativo denominado #[b #[mark.m1 “Aprendizaje no supervisado #[i K-Means]”]], el cual hace parte del programa de formación complementaria #[b #[mark.m1 “Algoritmo de agrupamiento no supervisado #[i K-means] con Python”]]. En el siguiente video se amplía la información que se desarrollará alrededor de esta temática. 
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/yVIf4MtNg_c?si=HGISsrbSsOUS73Gm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 
        figcaption Video. Aprendizaje no supervisado K-means
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
