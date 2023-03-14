<template>
  <v-app class="menuDiv">
    <v-navigation-drawer app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> NOMBRE PAGINA </v-list-item-title>
          <v-list-item-subtitle> Navigation drawers</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="mandangon">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <LibrosForm></LibrosForm>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import LibrosForm from './librosForm.vue';

export default {
    name: "App",
    data: () => ({
        items: [
            { title: "Libros", icon: "mdi-book" },
            { title: "Librerias", icon: "mdi-view-dashboard" },
            { title: "Ajustes", icon: "mdi-cog" },
        ],
    }),
    components: { LibrosForm }
};
</script>

<style></style>
