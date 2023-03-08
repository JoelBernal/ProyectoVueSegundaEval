<template>
  <v-app>
    <v-app-bar style="displey: flex; width: 100%" color="green" class="flex-grow-0" app dark>
      
        <v-title style="width: 70%; width: 30%; font-size: 30px; font-family: serif; margin-left: 20px" >LIBRERIAS PACO</v-title>
      

      <v-toolbar-items style="gap: 0px; width: 70%" class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.path">{{ item.title }}</v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      appTitle: "Awesome App",
      sidebar: false,
      menuItems: [
        { title: "Home", path: "/home", icon: "home" },
        { title: "Products", path: "/products", icon: "products" },
        { title: "Abous Us", path: "/Abous Us", icon: "Abous Us" },
        { title: "Sign Up", path: "/signup", icon: "face" },
        { title: "Sign In", path: "/signin", icon: "lock_open" },
      ],
    };
  },
};
</script>

<style>
.v-application--wrap {
  flex: 1 1 auto;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  min-height: 6vh;
  max-width: 100%;
  position: relative;
}

.v-toolbar__content{
  display: flex;
  width: 100%;
}

.v-toolbar__content, .v-toolbar__extension {
    padding: 0px 0px;
}

.v-toolbar__items{
    gap: 0px;
    width: 70%;
    display: flex;
    justify-content: flex-end;
}
</style>



