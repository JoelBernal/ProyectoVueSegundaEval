<template>
  <div>
    <Navbar/>
    <Carrusel/>
    <CardHome/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Carrusel from '../components/Carrusel.vue'
import Footer from '../components/Footer.vue'
import CardHome from '../components/CardHome.vue'


export default {
  name: 'Home',
  components: {
    Navbar,
    Carrusel,
    CardHome,
    Footer,
  }
}
</script>


<style>

</style>