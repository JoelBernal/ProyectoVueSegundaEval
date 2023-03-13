import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        games: [],
    },
    mutations: {
        initGames(state, games) {
            state.games = games;
        },
    },
    actions: {
        async fetchGames({ commit }) {
            try {
                let res = await fetch('https://localhost:7222/Libros/GetDatosBBDD');
                let data = await res.json();
                console.log(data);
                commit("initGames", data);
            } catch (error) {
                console.error(error);
            }
        },
    },
    getters: {
        getGames(state) {
            return state.games;
        },
    },
    modules: {},
});

