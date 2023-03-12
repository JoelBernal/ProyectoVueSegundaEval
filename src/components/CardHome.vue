<!-- <template>
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
                <div v-for="item in images" :key="item.image"
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
  data() {
    return {
      images: [
        { image: 'https://i.blogs.es/4f0662/consejos-foto-movil-01/1366_2000.jpg' },
        { image: 'https://i.blogs.es/4f0662/consejos-foto-movil-01/1366_2000.jpg' },
        { image: 'https://i.blogs.es/4f0662/consejos-foto-movil-01/1366_2000.jpg' },
      ],
      model: null,
    }
  },
};
</script>

<style>
.v-item-group {
  width: 100%;
}

.container {
    width: 100%;
    padding: 12px;
    margin-right: auto;
    margin-left: auto;
}

@media (min-width: 1264px){
.container {
    max-width: 100%;
}
}
</style> -->

<template>
  <div class="divGeneral" style="display: flex;">
    <v-item-group selected-class="bg-primary">
      <v-container>
        
        <!-- Fila 2 -->
        <v-row>
          <v-col cols="12" v-for="card in rows[1].cards" :key="card.id">
            <v-item v-slot="{ isSelected, selectedClass, toggle }">
              <v-card 
                :class="['d-flex align-center', selectedClass]"
                dark
                height="400px"
                width="100%"
                @click="toggle"
              >
                <div class="card-text">
                  {{ isSelected ? 'Selected' : 'Product Name!' }}
                </div>
                <img :src="card.image" :key="card.id" height="100%" width="100%">
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
  data() {
    return {
      rows: [
        {
          id: 1,
          cards: [
            { id: 1, image: 'https://www.dzoom.org.es/wp-content/uploads/2010/09/paisaje-profundidad-lineas-734x489.jpg' },
            { id: 2, image: 'https://i.blogs.es/4f0662/consejos-foto-movil-01/1366_2000.jpg' },
          ]
        },
        {
          id: 2,
          cards: [
            { id: 3, image: 'http://2.bp.blogspot.com/-_gQsO8DRHhY/VdvXpJgTPyI/AAAAAAAAszE/YEN6oYn2Zi4/s1600/Captura%2Bde%2Bpantalla%2B2015-08-24%2Ba%2Blas%2B21.48.12.png' },
          ]
        },
      ],
      model: null,
    }
  },
};
</script>

<style>
.v-item-group {
  width: 100%;
}

.container {
  width: 100%;
  padding: 12px;
  margin-right: auto;
  margin-left: auto;
  margin: 0px;
}

@media (min-width: 1264px){
  .container {
    max-width: 100%;
  }
}

.card-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 2em;
  text-align: center;
  width: 100%;
}
</style>
