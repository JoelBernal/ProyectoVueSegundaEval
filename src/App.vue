<template>
  <v-app>
    <router-view>
    </router-view>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data: () => ({
    datos: []
  }),
  mounted() {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        this.datos = data;
        console.log(this.datos); // para verificar que se ha obtenido los datos correctamente
      })
      .catch(error => console.error(error));
  }
};
</script>

