<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col v-for="(item, index) in data" :key="index" cols="12" sm="4">
        <v-card style="margin-bottom: 30px;" class="mx-auto" max-width="400" tile>
          <v-img class="align-end text-white" height="200" :src="item.image" cover>
            <v-card-title>{{ item.autor }}</v-card-title>
          </v-img>
          <v-card-subtitle class="pt-4">Fecha de publicacion: {{ item.fechaPublicacion }}</v-card-subtitle>

          <v-card-text>
            <div>Autor: {{ item.autor  }}</div>
            <div>Paginas: {{ item.paginas }}</div>
            <div>Precio: {{ item.precio }}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange">Comprar</v-btn>
            <!-- <v-btn color="orange" @click="deleteItem(data.id)">Eliminar</v-btn> -->
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Cards",
  data() {
    return {
      data: { results: [] }
    };
  },
  mounted() {
    fetch("https://localhost:7222/Libros/GetDatosBBDD")
      .then((response) => response.json())
      .then((data) => {
        this.data = data;
        console.log(this.data); // para verificar que se ha obtenido los datos correctamente
      })
      .catch((error) => console.error(error));
  },
};
</script>

<style>
@media screen and (max-width: 400px) {
  .v-card__subtitle {
    font-size: 14px;
  }

  .v-card__text div {
    font-size: 12px;
  }
}
</style>