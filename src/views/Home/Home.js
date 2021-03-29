export default {
  name: "Home",
  components: {},
  data() {
    return {
      currentIndex: 0,
      back: false,
      colors: ["#181c4d", "#298040", "#5f2323", "#d6b522"],
    };
  },
  mounted() {
    let self = this;

    window.addEventListener("keyup", function(ev) {
      switch (ev.key) {
        case "ArrowRight":
          self.next();
          break;
        case "ArrowLeft":
          self.prev();
          break;
      }
    });
  },
  methods: {
    next() {
      this.back = false;
      if (this.currentIndex == 3) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
    },
    prev() {
      this.back = true;
      if (this.currentIndex == 0) {
        this.currentIndex = 3;
      } else {
        this.currentIndex--;
      }
    },
    getColor() {
      return this.colors[this.currentIndex];
    },
    getNext() {
      switch (this.currentIndex) {
        case 0:
          return "Trivia";
        case 1:
          return "Wer wird Challenger?";
        case 2:
          return "More";
        case 3:
          return "Jeoparody!";
      }
    },
    getPrev() {
      switch (this.currentIndex) {
        case 0:
          return "More";
        case 1:
          return "Jeoparody!";
        case 2:
          return "Trivia";
        case 3:
          return "Wer wird Challenger?";
      }
    },
  },
};
