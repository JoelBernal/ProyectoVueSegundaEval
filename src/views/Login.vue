<template>
  <div>
      <Login></Login>
      <store></store>
  </div>
</template>

<script>
import Login from "../components/Login.vue";
import store from "../components/store.vue";


export default {
  name: "Home",
  components: {
      Login,
      store
  },
};
</script>


<style>
</style>