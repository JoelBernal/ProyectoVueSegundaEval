

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
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    items: [
      { title: 'Librerias', icon: 'mdi-view-dashboard' },
      { title: 'Libros', icon: 'mdi-account-box' },
      { title: 'Ajustes', icon: 'mdi-cog' },
    ],
  }),
};
</script>

<style>

</style>
