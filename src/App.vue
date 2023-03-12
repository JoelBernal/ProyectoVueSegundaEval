<template>
  <v-app>
    <router-view>
    </router-view>
  </v-app>
</template>

<!-- <template>
  <v-app>
    <router-view>
      <div class="container">
        <Counter></Counter><br />
        <div class="columns">
          <div class="column is-11">
            <AddCounter></AddCounter>
          </div>
          <div class="column auto">
            <RemoveCounter></RemoveCounter>
          </div>
        </div>
      </div>
    </router-view>
  </v-app>
</template> -->



<script>
// import Counter from './components/Counter.vue';
// import AddCounter from './components/AddCounter.vue';
// import RemoveCounter from './components/RemoveCounter.vue';

export default {
  name: 'App',
  components: {
    // Counter,
    // AddCounter,
    // RemoveCounter
  },
  data: () => ({
    //
  }),
};
</script>
