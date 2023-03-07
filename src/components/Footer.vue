<template>
  <div class="footerDiv">
    <template>
      <v-footer style="background-color: grey; height: 150px" class="bg-grey-lighten-1">
        <!-- <v-row justify="center" no-gutters>
                    <v-btn v-for="link in links" :key="link" color="white" variant="text" class="mx-2" rounded="xl">
                        {{ link }}
                    </v-btn>
                    <v-col class="text-center mt-4" cols="12">
                        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                    </v-col>
        </v-row>-->
        <div>
          <h1>HOLA</h1>
        </div>

        <div>
          <v-btn
            v-for="link in links"
            :key="link"
            color="white"
            variant="text"
            class="mx-2"
            rounded="xl"
          >{{ link }}</v-btn>
        </div>
      </v-footer>
    </template>
  </div>
</template>
  
<script>
export default {
  name: "Footer",
  data: () => ({
    links: ["Home", "About Us", "Services", "Contact Us"],
  }),
};
</script>

<style>
</style>
  