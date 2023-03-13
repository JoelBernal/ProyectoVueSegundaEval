<template>
  <v-container fluid>
    <button id="orden" @click="fetchOrdenarLibros"> Ordenar por Precio </button>
    <v-row no-gutters>
      <v-col v-for="(item) in libro" :key="item" cols="12" sm="15">
        <v-card id="tarjeta" style="margin-bottom: 30px; " class="mx-auto" max-width="400" tile>
          <v-img class="align-end text-white" height="200" :src="item.image" cover>
            <img src="https://tse4.mm.bing.net/th?id=OIP.Yhvj0zPqOsS3B2ZFeha44gAAAA&pid=Api&P=0" alt="foto libros">
            <v-card-title>{{ item.titulo }}</v-card-title>
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
import store from "@/store/store.js"
import { mapState, mapActions } from 'vuex';

export default {
  name: "Cards",
  methods:{
    ...mapActions([store.dispatch("fetchLibros")])
  },

  computed:{
    user(){
      return this.libro
    },
    ...mapState(["libro"])
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

.div.container.container--fluid{
  margin-left: 300px

}

#orden{
  background-color: #80461b !important;
  border-radius: 3px;
  color: white;
  margin-left: 100px;
  height: 30px;
}

</style>