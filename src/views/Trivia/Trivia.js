import axios from "axios";
import TriviaModal from "@/components/TriviaModal/TriviaModal";

export default {
  name: "Trivia",
  components: { TriviaModal },
  data() {
    return {
      question: {},
      answers: [],
      revealed: false,
      correctAnswers: 0,
      incorrectAnswers: 0,
      streak: 0,
      longestStreak: 0,
      stats: {},
      categories: [],
      confirmReset: false,
      token: "",
    };
  },
  async mounted() {
    await axios.get("https://opentdb.com/api_token.php?command=request").then((response) => (this.token = response.data.token));
    this.stats = this.$store.getters.getTriviaStats;
    this.categories = this.$store.getters.getTriviaCategories;
    this.question = this.$store.getters.getTriviaQuestion;
    if (!this.question.question) {
      this.nextQuestion();
    } else {
      this.answers.push({ answer: this.question.correct_answer, correct: true, state: "unanswered" });
      this.question.incorrect_answers.forEach((element) => {
        this.answers.push({ answer: element, correct: false, state: "unanswered" });
      });
      for (var i = this.answers.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this.answers[i];
        this.answers[i] = this.answers[j];
        this.answers[j] = temp;
      }
    }
  },
  async beforeUnmount() {
    console.log("sdafasdgasdgasdgsadgdasg");
    if (this.revealed) {
      await this.nextQuestion();
    }
  },
  methods: {
    submitAnswer(index) {
      this.stats = this.$store.getters.getTriviaStats;
      this.revealed = true;
      for (let i = 0; i < this.answers.length; i++) {
        if (i == index) {
          if (this.answers[index].correct) {
            // Answer was correct
            this.stats.correctAnswers++;
            this.stats.streak++;
            this.answers[index].state = "correct";
          } else {
            // Answer was incorrect
            this.stats.incorrectAnswers++;
            this.stats.streak = 0;
            this.answers[index].state = "incorrect";
          }
        } else {
          if (this.answers[i].correct) {
            this.answers[i].state = "correct";
          } else {
            this.answers[i].state = "neutral";
          }
        }
      }
      if (this.stats.streak > this.stats.longestStreak) {
        this.stats.longestStreak = this.stats.streak;
      }
      this.$store.commit("setTriviaStats", this.stats);
    },
    async nextQuestion() {
      this.revealed = false;
      this.question = {};
      this.answers = [];
      await axios.get("https://opentdb.com/api.php?amount=1&category=" + this.getRandomCategory() + "&token=" + this.token).then((response) => (this.question = response.data.results[0]));
      this.answers.push({ answer: this.question.correct_answer, correct: true, state: "unanswered" });
      this.question.incorrect_answers.forEach((element) => {
        this.answers.push({ answer: element, correct: false, state: "unanswered" });
      });
      for (var i = this.answers.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this.answers[i];
        this.answers[i] = this.answers[j];
        this.answers[j] = temp;
      }
      this.$store.commit("setTriviaQuestion", this.question);
    },
    getRandomCategory() {
      var categoriesArray = [];
      this.categories.forEach((category) => {
        for (let i = 0; i < category.priority; i++) {
          categoriesArray.push(category.id);
        }
      });
      return categoriesArray[Math.floor(Math.random() * categoriesArray.length)];
    },
    setPriority() {
      this.$store.commit("setTriviaCategories", this.categories);
      this.categories = this.$store.getters.getTriviaCategories;
    },
    roundToTwo(num) {
      return +(Math.round(num + "e+2") + "e-2");
    },
    resetStats() {
      if (this.confirmReset) {
        this.$store.commit("setTriviaStats", {
          correctAnswers: 0,
          incorrectAnswers: 0,
          streak: 0,
          longestStreak: 0,
        });
        this.confirmReset = false;
      } else {
        this.confirmReset = true;
        setTimeout(() => {
          this.confirmReset = false;
        }, 3000);
      }
    },
  },
};
