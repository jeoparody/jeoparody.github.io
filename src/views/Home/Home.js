export default {
  name: "Home",
  components: {},
  data() {
    return {
      currentIndex: 0,
      back: false,
      colors: ["#181c4d", "#5f2323", "#598a73"],
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
      if (this.currentIndex == 2) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
    },
    prev() {
      this.back = true;
      if (this.currentIndex == 0) {
        this.currentIndex = 2;
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
          return "Wer wird Challenger?";
        case 1:
          return "More";
        case 2:
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
          return "Wer wird Challenger?";
      }
    },
  },
};
