<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-4          
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/1.png', alt='') 
      .col-lg-8.my-3
        p(data-aos="fade-down") Como se ha visto en el desarrollo de este ejercicio es necesario que antes de aplicar cualquier algoritmo de #[i #[b #[mark.m1 machine learning]]] se realice la exploración de los datos y detectar patrones que luego permitirán identificar cuál es el algoritmo de aprendizaje que se puede usar, el entendimiento de los datos es lo que más debería consumir tiempo.
        .bg1.p-4.mb-4(data-aos="flip-down")
          .row.justify-content-center.align-items-center         
            .col-lg-auto.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/2.svg', alt='')           
            .col.my-3  
              p(data-aos="fade-down").mb-0 El algoritmo de aprendizaje no supervisado, específicamente #[i K-means] está basado en la identificación de patrones como clúster y los datos toman una gran importancia en el aprendizaje automático, conceptualizando la importancia de la ciencia de datos, #[i bigdata], tipos de variables y códigos fuente en Python.
        p(data-aos="fade-down") Con el algoritmo #[i K-means] se pueden revisar patrones en diferentes exploraciones o en una muestra determinada obtenida aleatoriamente y en nuevas muestras diferentes al daset inicial. Con Python se hace la exploración de datos usando anaconda y júpiter lab, donde se toman las estadísticas descriptivas del #[i dataset] y se pueden realizar gráficos como #[b #[mark.m1 boxplots]], gráficos de dispersión y gráficos de pares o #[b #[mark.m1 paiplot.]]
    p(data-aos="fade-down").mb-5 Así pues, un resumen de lo visto en el presente componente podrá ser visualizado en el siguiente mapa conceptual:
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
