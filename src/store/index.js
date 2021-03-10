import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    currentPlayer: 1
  },
  mutations: {
    setCurrentPlayer(state, index) {
      state.currentPlayer = index;
    }
  },
  actions: {},
  modules: {},
  getters: {
    getCurrentPlayer(state) {
      return state.currentPlayer;
    }
  }
});
