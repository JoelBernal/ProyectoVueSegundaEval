import Vue from 'vue';
import Vuex from 'vuex';

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
    },
    actions: {
        fetchLibros({ commit }) {

            fetch('https://localhost:7222/Libros/GetDatosBBDD')

                .then(response => response.json())

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


    }, modules: {}
});


