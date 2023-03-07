<template>
  <div class="divGeneral" style="display: flex;">
    <v-item-group selected-class="bg-primary">
      <v-container>
        <v-row>
          <v-col v-for="n in 1" :key="n" cols="12" md="12">
            <v-item v-slot="{ isSelected, selectedClass, toggle }">
              <v-card
                :class="['d-flex align-center', selectedClass]"
                dark
                height="400px"
                width="100%"
                @click="toggle"
              >
                <div
                  class="text-h3 flex-grow-1 text-center"
                >{{ isSelected ? 'Selected' : 'Product Name!' }}</div>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </div>
</template>
  
<script>
export default {
  name: "cardHome",
  data: () => ({
    model: null,
  }),
};
</script>

<style>
.v-item-group {
  width: 100%;
}
</style>