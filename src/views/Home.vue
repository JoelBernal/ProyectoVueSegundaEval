<template>
  <div>
    <Navbar />
    <Carrusel />
    <div style="display: flex; justify-content: space-evenly;">
      <CardHome style="width: 50%" />
      <CardHome style="width: 50%"/>
    </div>
    <CardHome style="width: 100%;"/>

    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Carrusel from "../components/Carrusel.vue";
import Footer from "../components/Footer.vue";
import CardHome from "../components/CardHome.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Carrusel,
    CardHome,
    Footer,
  },
};
</script>


<style>
</style>