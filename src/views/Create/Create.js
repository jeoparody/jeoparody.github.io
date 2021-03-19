import { VueEditor, Quill } from "vue2-editor";
import { ImageDrop } from "quill-image-drop-module";

Quill.register("modules/imageDrop", ImageDrop);

export default {
  name: "Create",
  components: { VueEditor },
  data() {
    return {
      categories: [],
      addCategoryActive: false,
      addCategoryInput: "",

      prizes: [100, 200, 300, 400, 500],
      addPrizeActive: false,
      addPrizeInput: 0,

      activeCell: [0, 0],

      jeoparody: {
        title: "",
        categories: [],
        prizes: [100, 200, 300],
      },

      customToolbar: [["bold", "italic", "underline", "strike"], [{ color: [] }, { background: [] }], ["blockquote"], [{ list: "ordered" }, { list: "bullet" }], ["image", "video"], ["clean"]],
      editorSettings: {
        modules: {
          imageDrop: true,
        },
      },
    };
  },
  mounted() {
    this.jeoparody = this.$store.getters.getCreateJeoparody;
    this.activeCell = this.$store.getters.getActiveCell;
    console.log(this.jeoparody);
    if (!this.jeoparody.categories) {
      this.jeoparody = {
        title: "",
        categories: [],
        prizes: [100, 200, 300],
      };
      this.$store.commit("setCreateJeoparody", this.jeoparody);
    }
    console.log(this.jeoparody);
  },
  methods: {
    updateBoard() {
      this.jeoparody.categories.forEach((category) => {
        for (var i = 0; i < this.jeoparody.prizes.length; i++) {
          if (typeof category.questions == "undefined") {
            category.questions[i] = { question: "", answer: "" };
          }
          if (typeof category.questions[i] == "undefined") {
            category.questions[i] = { question: "", answer: "" };
          }
        }
      });

      this.$store.commit("setCreateJeoparody", this.jeoparody);
      console.log(this.jeoparody);
    },
    setCell(row, column) {
      console.log(column, row);
      this.$store.commit("setActiveCell", [column, row]);
      this.activeCell = this.$store.getters.getActiveCell;
      this.updateBoard();
    },
    activateCategoryInput() {
      this.addCategoryActive = true;
      this.$nextTick(() => this.$refs.categoryInput.focus());
    },
    activatePrizeInput() {
      this.addPrizeActive = true;
      this.$nextTick(() => this.$refs.prizeInput.focus());
      this.$nextTick(() => this.$refs.prizeInput.select());
    },
    addCategory() {
      this.jeoparody.categories.push({ name: this.addCategoryInput, questions: [] });
      this.updateBoard();
      this.addCategoryActive = false;
      this.addCategoryInput = "";
      this.setCell(0, 0);
      this.updateBoard();
      if (this.$store.getters.getCreateJeoparody.categories.length == 1) {
        this.$router.go();
      }
    },
    removeCategory(i) {
      var value = this.jeoparody.categories[i];
      this.jeoparody.categories = this.jeoparody.categories.filter(function(item) {
        return item !== value;
      });

      this.jeoparody.categories.splice(i, 1);
      console.log(this.jeoparody);
      this.updateBoard();
    },
    addPrize() {
      if (!this.jeoparody.prizes.includes(this.addPrizeInput)) {
        this.jeoparody.prizes.push(this.addPrizeInput);
      }
      this.addPrizeActive = false;
      this.addPrizeInput = 0;
      this.updateBoard();
    },
    removePrize(i) {
      if (this.jeoparody.prizes.length > 1) {
        var value = this.jeoparody.prizes[i];
        this.jeoparody.prizes = this.jeoparody.prizes.filter(function(item) {
          return item !== value;
        });
        for (var j = 0; j < this.jeoparody.categories; j++) {
          this.jeoparody.categories[j].questions.splice(i, 1);
        }
        this.updateBoard();
      }
    },
    saveFile() {
      console.log(this.jeoparody);
      /*       for (let i = 0; i < this.categories.length; i++) {
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
      this.download(this.jeoparody.title + ".json", data); */

      var element = document.createElement("a");
      element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(JSON.stringify(this.jeoparody)));
      element.setAttribute("download", this.jeoparody.title + ".json");

      element.style.display = "none";
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    },
    oepnFile() {
      let file = this.$refs.fileInput.files[0];
      let reader = new FileReader();
      reader.readAsText(file, "JSON");
      reader.onload = (evt) => {
        this.$store.commit("setCreateJeoparody", JSON.parse(evt.target.result));
      };
      reader.onerror = (evt) => {
        console.error(evt);
      };
      this.jeoparody = this.$store.getters.getCreateJeoparody;
      console.log(this.jeoparody);
      this.$router.go();
    },
    download(filename, text) {
      var element = document.createElement("a");
      element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
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
    },
    reset() {
      var answer = window.confirm("You will loose your currently opened Jeoparody. Make sure that you download it, if you still need it. Do you want to reset?");
      if (answer) {
        this.$store.commit("setActiveCell", [0, 0]);
        this.$store.commit("setCreateJeoparody", {
          title: "",
          categories: [],
          prizes: [100, 200, 300],
        });
        this.jeoparody = this.$store.getters.getCreateJeoparody;
        this.$router.go();
      }
    },
  },
};
