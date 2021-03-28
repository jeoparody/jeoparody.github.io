// import jsonData from "./data.json";
import Modal from "@/components/Modal/Modal";
import Results from "@/components/Results/Results.vue";
import axios from "axios";

export default {
  name: "Play",
  components: { Modal, Results },

  data() {
    return {
      img: {
        check: "@/assets/check.png",
        wrong: "@/assets/wrong.png",
      },
      json: {},
      players: [
        { name: "Julain", money: 0 },
        { name: "Mias", money: 0 },
        { name: "Joël", money: 0 },
        { name: "Miro", money: 0 },
      ],
      currentPlayer: 0,
      addPlayerActive: false,
      addPlayerInput: "",
      started: false,
      grid: [],
      options: {},
    };
  },
  mounted() {
    this.json = this.$store.getters.getJeoparody;
    this.options = this.$store.getters.getOptions;
    this.currentPlayer = this.$store.getters.getCurrentPlayer;
    this.players = this.$store.getters.getPlayers;
    this.started = this.$store.getters.getGameState;
    this.grid = this.$store.getters.getGrid;
  },
  computed: {
    getGrid: function() {
      return this.$store.getters.getGrid;
    },
    getCurrentPlayer: function() {
      return this.$store.getters.getCurrentPlayer;
    },
  },
  methods: {
    activatePlayerInput() {
      this.addPlayerActive = true;
      this.$nextTick(() => this.$refs.playerInput.focus());
    },
    previewFiles() {
      let file = this.$refs.fileInput.files[0];
      let reader = new FileReader();
      reader.readAsText(file, "JSON");
      reader.onload = (evt) => {
        this.$store.commit("setJeoparody", JSON.parse(evt.target.result));
      };
      reader.onerror = (evt) => {
        console.error(evt);
      };
      this.json = this.$store.getters.getJeoparody;
      console.log(this.json);
      this.$router.go();
    },
    addPlayer() {
      if (!this.$store.getters.getPlayers.includes(this.addPlayerInput)) {
        this.$store.commit("addPlayer", this.addPlayerInput);
      }
      this.addPlayerActive = false;
      this.addPlayerInput = "";
      this.players = this.$store.getters.getPlayers;
      console.log(this.players);
    },
    removePlayer(i) {
      this.$store.commit("removePlayer", this.players[i]);
      this.players = this.$store.getters.getPlayers;
    },
    start() {
      console.log(this.json);

      this.shufflePlayers();
      this.$store.commit("setCurrentPlayer", 0);
      this.currentPlayer = this.$store.getters.getCurrentPlayer;
      this.started = true;
      this.$store.commit("setGameState", true);
      let grid = [];
      for (var i = this.json.categories.length - 1; i >= 0; i--) {
        let temp = [];

        for (var j = this.json.prizes.length - 1; j >= 0; j--) {
          temp.push(false);
        }
        grid.push(temp);
      }
      this.$store.commit("setGrid", grid);
      this.grid = this.$store.getters.getGrid;
      console.log(this.json);
    },
    shufflePlayers() {
      for (var i = this.players.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this.players[i];
        this.players[i] = this.players[j];
        this.players[j] = temp;
      }
    },
    changePlayer(index) {
      this.$store.commit("setCurrentPlayer", index);
      this.currentPlayer = this.$store.getters.getCurrentPlayer;
    },
    quit() {
      this.$store.commit("reset");
      this.started = this.$store.getters.getGameState;
      this.$router.go();
    },
    finished() {
      return this.$store.getters.getGrid.every((row) => row.every((cell) => cell == true));
    },
    generateRandom() {
      axios.get("http://jservice.io/api/clues?category=5&value=100").then((response) => console.log(response.data));
    },
    refreshCategories() {
      // max offset: 18414, last for not useful
      const random = Math.floor(Math.random() * (18400 - 0 + 1)) + 0;
      console.log(random);
      axios.get("http://jservice.io/api/categories?count=10&offset=18400").then((response) => console.log(response.data));
    },
  },
};
