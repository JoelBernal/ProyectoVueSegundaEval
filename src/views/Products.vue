<template>
    <div>
        <Navbar/>
        <div style="display: flex;">
            <MenuLateral></MenuLateral>
            <Cards></Cards>
        </div>
        
    </div>
</template>
 
<script>
    import Navbar from '../components/Navbar.vue'
    import Cards from '../components/Cards.vue'
    import MenuLateral from '../components/MenuLateral.vue'

export default {
    name: 'Products',
    components: {
        Navbar,
        Cards,
        MenuLateral
    },
    props: {
        source: String,
    },

};
</script>
 
<style></style>
 