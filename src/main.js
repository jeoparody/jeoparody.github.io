import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    jeoparody: {},
    options: {
      turnEndsOnWrongAnswer: false
    },
    currentPlayer: 0,
    players: [],
    started: false,
    grid: []
  },
  plugins: [createPersistedState()],
  mutations: {
    setJeoparody(state, json) {
      state.jeoparody = json;
    },
    setOption(state, options) {
      state.options = options;
    },
    setCurrentPlayer(state, index) {
      state.currentPlayer = index;
    },
    addPlayer(state, player) {
      state.players.push({ name: player, money: 0 });
    },
    removePlayer(state, player) {
      state.players = state.players.filter(function(item) {
        return item !== player;
      });
    },
    nextPlayer(state) {
      state.currentPlayer = state.currentPlayer + 1;
      if (state.currentPlayer >= state.players.length) {
        state.currentPlayer = 0;
      }
      console.log(state.currentPlayer);
    },
    addMoney(state, amount) {
      state.players[state.currentPlayer].money += amount;
    },
    setGameState(state, bool) {
      state.started = bool;
    },
    setGrid(state, array) {
      state.grid = array;
    },
    reset(state) {
      state.players.forEach(player => {
        player.money = 0;
      });
      state.started = false;
      for (let i = 0; i < state.grid.length; ++i) {
        for (let j = 0; j < state.grid[i].length; ++j) {
          state.grid[i][j] = false;
        }
      }
      state.jeoparody = {};
    }
  },
  actions: {},
  modules: {},
  getters: {
    getJeoparody(state) {
      return state.jeoparody;
    },
    getOptions(state) {
      return state.options;
    },
    getCurrentPlayer(state) {
      return state.currentPlayer;
    },
    getPlayers(state) {
      return state.players;
    },
    getGameState(state) {
      return state.started;
    },
    getGrid(state) {
      return state.grid;
    }
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
