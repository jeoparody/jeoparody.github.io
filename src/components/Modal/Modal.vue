<template>
  <transition name="fade">
    <div class="modal" v-if="show">
      <div class="modal__backdrop" @click="closeModal()" />

      <div class="modal__dialog">
        <div class="modal__header">
          <h1>{{ data.name }} - ${{ prize }}</h1>
          <button type="button" class="modal__close" @click="closeModal()">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
              <path
                fill="#ffffff"
                d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
              ></path>
            </svg>
          </button>
        </div>

        <div class="modal__body">
          <slot name="body" />
          <p v-html="data.questions[row].question"></p>
          <button v-if="!revealed" @click="revealed = true" class="reveal">
            Reveal Answer
          </button>
          <p v-if="revealed" class="answer">{{ data.questions[row].answer }}</p>
        </div>

        <div class="modal__footer">
          <div class="result" v-if="revealed">
            <p>Was the answer correct?</p>
            <button class="right" @click="rightAnswer()">
              <img src="@/assets/check.png" />
            </button>
            <button class="wrong" @click="wrongAnswer()">
              <img src="@/assets/wrong.png" />
            </button>
          </div>
          <slot name="footer" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      show: false,
      data: {},
      index: 0,
      row: 0,
      prize: 0,
      revealed: false
    };
  },
  methods: {
    closeModal() {
      this.show = false;
      this.revealed = false;
      document.querySelector("body").classList.remove("overflow-hidden");
    },
    rightAnswer() {
      this.$store.commit("addMoney", this.prize);
      this.show = false;
      this.revealed = false;
      let grid = this.$store.getters.getGrid;
      grid[this.index][this.row] = true;
      this.$store.commit("setGrid", grid);
      document.querySelector("body").classList.remove("overflow-hidden");
    },
    wrongAnswer() {
      this.$store.commit("nextPlayer");
      this.show = false;
      this.revealed = false;
      let grid = this.$store.getters.getGrid;
      grid[this.index][this.row] = true;
      this.$store.commit("setGrid", grid);
      document.querySelector("body").classList.remove("overflow-hidden");
    },
    openModal(data, i, row, prize) {
      this.data = data;
      this.index = i;
      this.row = row;
      this.prize = prize;
      this.show = true;
      document.querySelector("body").classList.add("overflow-hidden");
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  &__backdrop {
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
  &__dialog {
    background-color: #1f316b;
    position: relative;
    width: calc(100% - 100px);
    height: calc(100% - 100px);
    margin: 50px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    z-index: 2;
    @media screen and (max-width: 992px) {
      width: 90%;
    }
  }
  &__close {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 50px;
    height: 50px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }
  &__header {
    font-size: 40px;
    padding: 20px 20px 10px;
    text-align: center;
    justify-content: space-between;
    text-align: center;
  }
  &__body {
    padding: 10px 20px 10px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    font-size: 35px;

    .answer {
      background-color: #2e448b;
      border-radius: 20px;

      width: 50%;
      margin: auto;
      padding: 40px;
    }
  }
  &__footer {
    padding: 10px 20px 20px;
  }
  .reveal {
    width: 250px;
    height: 80px;
    border-radius: 20px;
    font-size: 30px;
    margin: auto;
    background-color: #2e448b;
    border: none;
    color: white;
    outline: none;
    cursor: pointer;
  }
  .result {
    p {
      font-size: 30px;
    }
    .right,
    .wrong {
      width: 80px;
      height: 80px;
      border-radius: 15px;
      font-size: 30px;
      margin: 10px;
      border: none;
      color: white;
      outline: none;
      padding: 0;

      cursor: pointer;

      img {
        height: 40px;
        width: 40px;
        margin: 20px;
      }
    }
    .right {
      background-color: #21b935;
    }
    .wrong {
      background-color: #b92121;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: transform 0.4s;
}
.fade-enter,
.fade-leave-to {
  transform: scale(0);
}
</style>
