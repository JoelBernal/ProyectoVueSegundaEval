import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    datos: []
  },
  mutations: {
    setDatos(state, datos) {
      state.datos = datos
    }
  },
  actions: {
    async fetchDatos({ commit }) {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        commit('setDatos', data)
      } catch (error) {
        console.error(error)
      }
    }
  }
})

