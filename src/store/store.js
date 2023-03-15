import Vue from 'vue';
import Vuex from 'vuex';

var endpoint = "https://localhost:7222/Libros/GetDatosBBDD"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    libro: [],
    libroOrdenar: []
  },
  mutations: {
    initLibro(state, libro) {
      state.libro = libro;
    },
    initOrdenarLibro(state, libro) {
      state.libroOrdenar = libro;
    },
    eliminarLibro(state, id) {
      state.libro = state.libro.filter((libro) => libro.id != id)
    }
  },
  actions: {
    fetchLibros({ commit }) {

      fetch(endpoint)

        .then(response => { return response.json() })

        .then(response => {

          commit("initLibro", response)

        })

    },

    //Ordenar precio de mayor a menor
    OrdenarPrecioMayorMenor({ commit }) {
      console.log("Se editan los datos")
      fetch('https://localhost:7222/Libros/OrdenarPorPrecio-BBDD')

        .then(response => { return response.json() })

        .then(data => {

          commit("initLibro", data)

        })
        .catch(error => {
          console.error(error);
        })

    },

    //Ordenar precio de mayor a menor
    OrdenarPrecioMenorMayor({ commit }) {
      console.log("Se editan los datos")
      fetch('https://localhost:7222/Libros/OrdenarPorPrecio-BBDD-MayorMenor')

        .then(response => { return response.json() })

        .then(data => {

          commit("initLibro", data)

        })
        .catch(error => {
          console.error(error);
        })

    },

    //Ordenar precio por defecto
    OrdenarPrecioPorDefecto({ commit }) {
      console.log("Se editan los datos")
      fetch('https://localhost:7222/Libros/GetDatosBBDD')

        .then(response => { return response.json() })

        .then(data => {

          commit("initLibro", data)

        })
        .catch(error => {
          console.error(error);
        })

    },



    eliminarLibro({ commit }, id) {

      console.log("Este est mi id a eliminar" + id)
      return fetch(`https://localhost:7222/Libros/DeleteBBDD/${id}`, {
        method: 'DELETE'
      })

        .then(() => {
          commit(`eliminarLibro`, id)
        })
        .catch((error) => {
          console.error(error);
        })

    },

  }, modules: {}
});


