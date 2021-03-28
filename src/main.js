import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex, VueAxios, axios);

export const store = new Vuex.Store({
  state: {
    jeoparody: {},
    createJeoparody: {},
    activeCell: [0, 0],
    options: {
      everybodyCanAnswer: false,
      turnEndsOnWrongAnswer: false,
      underdogAdjustment: true,
    },
    currentPlayer: 0,
    players: [],
    started: false,
    grid: [],
  },
  plugins: [createPersistedState()],
  mutations: {
    setJeoparody(state, json) {
      state.jeoparody = json;
    },
    setCreateJeoparody(state, json) {
      state.createJeoparody = json;
    },
    setActiveCell(state, value) {
      state.activeCell = value;
    },
    setOptions(state, option) {
      switch (option) {
        case "everybodyCanAnswer":
          state.options.everybodyCanAnswer = !state.options.everybodyCanAnswer;
          break;
        case "turnEndsOnWrongAnswer":
          state.options.turnEndsOnWrongAnswer = !state.options.turnEndsOnWrongAnswer;
          break;
        case "underdogAdjustment":
          state.options.underdogAdjustment = !state.options.underdogAdjustment;
          break;
      }
      if (state.options.everybodyCanAnswer) {
        state.options.turnEndsOnWrongAnswer = false;
        state.options.underdogAdjustment = false;
      }
      if (state.options.turnEndsOnWrongAnswer) {
        state.options.underdogAdjustment = false;
      }
    },
    setCurrentPlayer(state, index) {
      state.currentPlayer = index;
    },
    addPlayer(state, player) {
      state.players.push({ name: player, money: 0, answers: 0 });
    },
    removePlayer(state, player) {
      state.players = state.players.filter(function(item) {
        return item !== player;
      });
    },
    setPlayers(state, players) {
      state.players = players;
    },
    nextPlayer(state) {
      state.players[state.currentPlayer].answers += 1;
      state.currentPlayer = state.currentPlayer + 1;
      if (state.currentPlayer >= state.players.length) {
        state.currentPlayer = 0;
      }
      console.log(state.currentPlayer);
    },
    addMoney(state, amount) {
      /*       (function myLoop(i) {
        setTimeout(function() {
          state.players[state.currentPlayer].money += 1;
          if (--i) {
            myLoop(i);
          }
        }, 2);
      })(amount); */
      state.players[state.currentPlayer].money += amount;
    },
    setGameState(state, bool) {
      state.started = bool;
    },
    setGrid(state, array) {
      state.grid = array;
    },
    reset(state) {
      state.players.forEach((player) => {
        player.money = 0;
        player.answers = 0;
      });
      state.started = false;
      for (let i = 0; i < state.grid.length; ++i) {
        for (let j = 0; j < state.grid[i].length; ++j) {
          state.grid[i][j] = false;
        }
      }
      state.jeoparody = {};
    },
  },
  actions: {},
  modules: {},
  getters: {
    getJeoparody(state) {
      return state.jeoparody;
    },
    getCreateJeoparody(state) {
      return state.createJeoparody;
    },
    getActiveCell(state) {
      return state.activeCell;
    },
    getOptions(state) {
      return state.options;
    },
    getCurrentPlayer(state) {
      return state.currentPlayer;
    },
    getLeadingPlayer(state) {
      var lead = state.players[0];
      state.players.forEach((player) => {
        if (player.money > lead.money) {
          lead = player;
        }
      });
      return lead;
    },
    getPlayers(state) {
      return state.players;
    },
    getGameState(state) {
      return state.started;
    },
    getGrid(state) {
      return state.grid;
    },
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
