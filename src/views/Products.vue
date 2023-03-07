<template>
  <div>
    <Navbar />
    <div style="display: flex;">
      <div class="MenuClass">
        <MenuLateral></MenuLateral>
      </div>
      <div>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        
      </div>
    </div>
  </div>
</template>
 
<script>
import Navbar from "../components/Navbar.vue";
import MenuLateral from "../components/MenuLateral.vue";
import Cards from "../components/Cards.vue";

export default {
  name: "Products",
  components: {
    Navbar,
    Cards,
    MenuLateral,
  },
  props: {
    source: String,
  },
};
</script>
 
<style>
    .MenuClass{
            height: auto;
    max-height: 100%;
    }
</style>
 