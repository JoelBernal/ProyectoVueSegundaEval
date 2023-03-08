<template>
  <v-app>
    <v-app-bar style="displey: flex; width: 100%; left:0px; z-index:9999" color="green" class="flex-grow-0" app dark>
              <img class="logoImgNavBar" src="https://images.vexels.com/media/users/3/267831/isolated/preview/cd079d709300f6af3cdfa75b83d35db8-icono-de-libros-acogedores-de-invierno.png" alt="">

        <v-title style="width: 100%; font-size: 37px; font-family: serif; margin-left: 10px" >LIBRERIAS PACO</v-title>
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
        { title: "Contact Us", path: "/Contact Us", icon: "Contact Us" },
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
.logoImgNavBar{
  width: 65px;
  margin-left: 10px;
}
</style>



