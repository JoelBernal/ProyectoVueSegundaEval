<template>
    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title>
              <h1>{{ count }}</h1>
            </v-card-title>
            <v-card-actions>
              <v-btn color="primary" @click="increment">Increment</v-btn>
              <v-btn color="primary" @click="decrement">Decrement</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { mapState, mapMutations } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['count'])
    },
    methods: {
      ...mapMutations(['increment', 'decrement'])
    }
  };
  </script>
  