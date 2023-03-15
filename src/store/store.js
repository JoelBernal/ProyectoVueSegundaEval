import Vue from 'vue';
import Vuex from 'vuex';

var endpoint = "https://localhost:7222/Libros/GetDatosBBDD"
// 'https://localhost:7222/Libros/GetDatosBBDD'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        libro: []
    },
    mutations: {
        initLibro(state, libro) {
            state.libro = libro;
        },
        initOrdenarLibro(state, libro) {
            state.libroOrdenar = libro;
        },
        eliminarLibro(state, id){
            state.libro = state.libro.filter((libro) => libro.id != id)
          }
    },
    actions: {
        fetchLibros({ commit }) {

            fetch(endpoint)

                .then(response => { return response.json()})

                .then(response => {

                    commit("initLibro", response)

                })

        },

        fetchOrdenarLibros({ commit }) {

            fetch('https://localhost:7222/Libros/OrdenarPorPrecio-BBDD')

                .then(response => response.json())

                .then(response => {

                    commit("initOrdenarLibro", response)

                })

        },

        
        eliminarLibro({ commit }, id) {
            
          console.log("Este est mi id a eliminar" + id)
            return fetch(`https://localhost:7222/Libros/DeleteBBDD/${id}` ,{
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


