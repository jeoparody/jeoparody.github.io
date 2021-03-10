export default {
  name: "Create",
  components: {},
  data() {
    return {
      categories: ["Test", "Test2"],
      addCategoryActive: false,
      addCategoryInput: "",

      prizes: [100, 200, 300, 400, 500],
      addPrizeActive: false,
      addPrizeInput: 0,

      jeoparody: {
        title: "",
        categories: [],
        prizes: {}
      }
    };
  },

  methods: {
    activateCategoryInput() {
      this.addCategoryActive = true;
      this.$nextTick(() => this.$refs.categoryInput.focus());
    },
    activatePrizeInput() {
      this.addPrizeActive = true;
      this.$nextTick(() => this.$refs.prizeInput.focus());
    },
    addCategory() {
      if (!this.categories.includes(this.addCategoryInput)) {
        this.categories.push(this.addCategoryInput);
      }
      this.addCategoryActive = false;
      this.addCategoryInput = "";
    },
    removeCategory(i) {
      console.log(1);
      var value = this.categories[i];
      this.categories = this.categories.filter(function(item) {
        return item !== value;
      });
    },
    addPrize() {
      if (!this.prizes.includes(this.addPrizeInput)) {
        this.prizes.push(this.addPrizeInput);
      }
      this.addPrizeActive = false;
      this.addPrizeInput = 0;
    },
    removePrize(i) {
      var value = this.prizes[i];
      this.prizes = this.prizes.filter(function(item) {
        return item !== value;
      });
    },
    saveFile(form) {
      for (let i = 0; i < this.categories.length; i++) {
        var newValue = { name: this.categories[i] };
        this.jeoparody.categories.push(newValue);
        this.jeoparody.categories[i].questions = [];
        for (let j = 0; j < this.prizes.length; j++) {
          var newQuestionValue = { question: "why", answer: "because" };
          this.jeoparody.categories[i].questions.push(newQuestionValue);
        }
      }
      this.jeoparody.prizes = this.prizes;

      let ar = [];
      for (const [key, value] of Object.entries(form)) {
        ar = key.split("/");
        if (ar[0] == "q") {
          this.jeoparody.categories[ar[1]].questions[ar[2]].question = value;
        }
        if (ar[0] == "a") {
          this.jeoparody.categories[ar[1]].questions[ar[2]].answer = value;
        }
      }
      console.log(3, this.jeoparody);

      let data = JSON.stringify(this.jeoparody);
      this.download(this.jeoparody.title + ".json", data);
    },
    download(filename, text) {
      var element = document.createElement("a");
      element.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," + encodeURIComponent(text)
      );
      element.setAttribute("download", filename);

      element.style.display = "none";
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    },
    form_m() {
      var vm = this,
        formData = new FormData(vm.$refs.form);
      let data = {};

      for (const [key, value] of formData.entries()) {
        data[key] = value;
      }
      console.log(data);
      this.saveFile(data);
    }
  }
};
