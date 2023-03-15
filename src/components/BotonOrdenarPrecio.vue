<template>
  <div class="text-center">
    <v-select v-model="location" :items="locations" label="Ordenar por precio:"></v-select>
    <v-menu :location="location">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" dark v-bind="props">Dropdown</v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    // methods: {
    //   ...mapActions(["OrdenarPrecioMayorMenor"]),
    //   ...mapActions(["OrdenarPrecioMenorMayor"]),
    //   ...mapActions(["OrdenarPrecioPorDefecto"]),
    // },
    items: [
      { title: "Ordenar por precio: Por Defecto" },
      { title: "Ordenar por precio: Mayor a menor" },
      { title: "Ordenar por precio: Menor a mayor" },
    ],
    locations: [
      "Ordenar por precio: Por Defecto",
      "Ordenar por precio: Mayor a menor",
      "Ordenar por precio: Menor a mayor",
    ],
    location: "end",
  }),
};
</script>