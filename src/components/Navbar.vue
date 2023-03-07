<template>
  <div class="NavbarDiv">
    <v-app-var class="appbar">
      <div>
        <h1>HOLA</h1>
      </div>

      <div style="display: flex">
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          variant="text"
          class="mx-2"
          rounded="xl"
        >{{ link }}</v-btn>
      </div>
    </v-app-var>
  </div>
</template>
  
<script>
export default {
  name: "Navbar",
  data: () => ({
    links: ["Home", "About Us", "Services", "Contact Us"],
  }),
};
</script>

<style>
.NavbarDiv {
  display: flex;
  width: 100%;
}
.appbar {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 65%;
}
</style>



