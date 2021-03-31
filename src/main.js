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
      useCustomJeoparody: true,
      everybodyCanAnswer: false,
      turnEndsOnWrongAnswer: false,
      underdogAdjustment: true,
    },
    currentPlayer: 0,
    players: [],
    started: false,
    grid: [],
    // Trivia
    tempQuestions: [],
    stats: {
      correctAnswers: 0,
      incorrectAnswers: 0,
      streak: 0,
      longestStreak: 0,
    },
    triviaCategories: [
      { name: "General Knowledge", id: 9, priority: 5 },
      { name: "Entertainment: Books", id: 10, priority: 5 },
      { name: "Entertainment: Film", id: 11, priority: 5 },
      { name: "Entertainment: Music", id: 12, priority: 5 },
      { name: "Entertainment: Musicals & Theatres", id: 13, priority: 5 },
      { name: "Entertainment: Television", id: 14, priority: 5 },
      { name: "Entertainment: Video Games", id: 15, priority: 5 },
      { name: "Entertainment: Board Games", id: 16, priority: 5 },
      { name: "Science & Nature", id: 17, priority: 5 },
      { name: "Science: Computers", id: 18, priority: 5 },
      { name: "Science: Mathematics", id: 19, priority: 5 },
      { name: "Mythology", id: 20, priority: 5 },
      { name: "Sports", id: 21, priority: 5 },
      { name: "Geography", id: 22, priority: 5 },
      { name: "History", id: 23, priority: 5 },
      { name: "Politics", id: 24, priority: 5 },
      { name: "Art", id: 25, priority: 5 },
      { name: "Celebrities", id: 26, priority: 5 },
      { name: "Animals", id: 27, priority: 5 },
      { name: "Vehicles", id: 28, priority: 5 },
      { name: "Entertainment: Comics", id: 29, priority: 5 },
      { name: "Science: Gadgets", id: 30, priority: 5 },
      { name: "Entertainment: Japanese Anime & Manga", id: 31, priority: 5 },
      { name: "Entertainment: Cartoon & Animations", id: 32, priority: 5 },
    ],
    triviaQuestion: {},
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
        case "useCustomJeoparody":
          state.options.useCustomJeoparody = !state.options.useCustomJeoparody;
          break;
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
    setTempQuestions(state, questions) {
      state.tempQuestions = questions;
    },
    setTriviaStats(state, stats) {
      state.stats = stats;
    },
    setTriviaCategories(state, categories) {
      state.triviaCategories = categories;
    },
    setTriviaQuestion(state, question) {
      state.triviaQuestion = question;
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
    getTempQuestions(state) {
      return state.tempQuestions;
    },
    getTriviaStats(state) {
      return state.stats;
    },
    getTriviaCategories(state) {
      return state.triviaCategories;
    },
    getTriviaQuestion(state) {
      return state.triviaQuestion;
    },
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
