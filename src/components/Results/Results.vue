<template>
  <transition name="fade">
    <div class="modal" v-if="show">
      <div class="modal__backdrop" @click="closeModal()" />

      <div class="modal__dialog">
        <div class="modal__header">
          <h1>Results</h1>
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
          <div class="content">
            <h2>Results</h2>
            <ol>
              <li v-for="(player, index) in playersFinal" :key="player.name + player.money">
                <div class="main-column">
                  <div class="rank">{{ index + 1 }}</div>
                  {{ player.name }}<span class="money">${{ player.moneyFinal }}</span>
                </div>
                <span class="bonus">
                  <span v-if="calculateBonus(player) && $store.getters.getOptions.underdogAdjustment">+${{ player.moneyFinal - player.money }}</span></span
                >
              </li>
            </ol>
            <button class="quit-game" @click="$router.push('/')">Quit</button>
          </div>
        </div>

        <div class="modal__footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Results",
  data() {
    return {
      show: false,
      playerResults: [],
      playersFinal: [],
      maxQuestionsPerPlayer: 0,
    };
  },
  created() {
    this.players = this.$store.getters.getPlayers;
  },
  methods: {
    closeModal() {
      this.show = false;
      document.querySelector("body").classList.remove("overflow-hidden");
      this.playerResults = [];
      this.playersFinal = [];
      this.maxQuestionsPerPlayer = 0;
    },
    openModal() {
      this.playersResults = this.$store.getters.getPlayers;

      let answerCountSorted = this.$store.getters.getPlayers.sort(function(a, b) {
        return a.answers - b.answers;
      });
      answerCountSorted.reverse();

      this.maxQuestionsPerPlayer = answerCountSorted[0].answers;

      this.$store.getters.getPlayers.forEach((player) => {
        if (this.$store.getters.getOptions.underdogAdjustment) {
          this.playersFinal.push({ name: player.name, answers: player.answers, money: player.money, moneyFinal: player.money + this.calculateBonus(player) });
        } else {
          this.playersFinal.push({ name: player.name, answers: player.answers, moneyFinal: player.money });
        }
      });
      this.playersFinal.sort(function(a, b) {
        return a.money - b.money;
      });
      this.playersFinal.reverse();
      console.log(this.playersFinal);

      this.show = true;
      document.querySelector("body").classList.add("overflow-hidden");
    },
    calculateBonus(player) {
      if (player.answers < this.maxQuestionsPerPlayer) {
        return Math.round((player.money / player.answers) * this.maxQuestionsPerPlayer - player.money);
      }
      return 0;
    },
  },
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

    h1 {
      position: absolute;
      font-size: 35px;
      margin: -20px;
      padding: 20px;
      border-bottom-right-radius: 20px;
      background-color: #2e448b;
    }
  }
  &__body {
    padding: 10px 20px 10px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    font-size: 35px;

    .content {
      position: absolute;
      top: 45%;
      transform: translateY(-50%);

      .quit-game {
        width: 250px;
        height: 80px;
        border-radius: 20px;
        font-size: 30px;
        background-color: #2e448b;
        border: none;
        color: white;
        outline: none;
        cursor: pointer;
        margin: 0 25%;
      }
    }

    ol {
      list-style: none;
      width: 760px;
      background-color: #2e448b;
      text-align: left;
      padding-left: 0;

      li {
        height: 60px;
        padding: 0;
        width: 760px;
        background-color: #2e448b;

        .main-column {
          width: 580px;

          .rank {
            width: 60px;
            height: 60px;
            float: left;
            text-align: center;
            margin-right: 20px;
            background-color: #263979;
            font-weight: bold;
          }
          .money {
            float: right;
            font-weight: bold;
          }
        }

        .bonus {
          float: right;
          color: $interaction-green;
          font-weight: bold;
          position: relative;
          top: -85%;
          right: 0;
          background-color: #263979;
          height: 60px;
          width: 140px;
          text-align: center;
          padding: 0 10px;
        }

        @keyframes scale {
          from {
            transform: scale(1.01);
          }
          to {
            transform: scale(1.05);
          }
        }

        &:nth-child(1) {
          /*          animation-name: scale;
          animation-duration: 0.5s;
          animation-direction: alternate;
          animation-timing-function: linear;
          animation-iteration-count: infinite; */

          background-color: #c59d30;

          .rank {
            background-color: #9b7c26;
          }
        }
        &:nth-child(2) {
          background-color: #808b8f;

          .rank {
            background-color: #596063;
          }
        }
        &:nth-child(3) {
          background-color: #a77031;

          .rank {
            background-color: #835929;
          }
        }
      }
    }
  }
  &__footer {
    padding: 10px 20px 20px;
    .answer {
      background-color: #2e448b;
      border-radius: 20px;
      font-size: 30px;

      width: 50%;
      margin: auto;
      padding: 30px;
    }
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
      font-size: 24px;
      margin-bottom: 0px;
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
