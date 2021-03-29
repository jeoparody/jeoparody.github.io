<template>
  <div class="trivia">
    <!--{{ question }}!-->
    <transition name="fade">
      <div class="container" v-if="Object.keys(question).length !== 0" key="1">
        <p class="category" v-html="question.category"></p>
        <p class="question" v-html="question.question"></p>
        <button
          class="answer"
          v-for="(answer, index) in answers"
          :key="index"
          :class="[{ unanswered: !revealed }, { correct: answer.state == 'correct' }, { incorrect: answer.state == 'incorrect' }, { neutral: answer.state == 'neutral' }]"
          @click="submitAnswer(index)"
          :disabled="revealed"
          v-html="answer.answer"
        ></button>
        <button v-if="revealed" class="next" @click="nextQuestion()">Next Question</button>
      </div>
      <div v-else key="2"></div>
    </transition>

    <img src="@/assets/menu.png" @click="$refs.stats.openModal()" class="menu" />
    <TriviaModal ref="stats">
      <template v-slot:body>
        <div>
          <h1>Stats</h1>

          <div class="stats">
            <div class="stat">
              <p>Correct Answers</p>
              <img src="@/assets/correct.png" />
              <p class="number">{{ $store.getters.getTriviaStats.correctAnswers }}</p>
            </div>
            <div class="stat">
              <p>Inorrect Answers</p>
              <img src="@/assets/incorrect.png" />
              <p class="number">{{ $store.getters.getTriviaStats.incorrectAnswers }}</p>
            </div>
            <div class="stat">
              <p>Corre</p>
              <div class="img-background">
                <div
                  class="piechart"
                  :style="
                    'background-image: conic-gradient(#00ab5e ' +
                      (360 / 100) * roundToTwo((100 / ($store.getters.getTriviaStats.correctAnswers + $store.getters.getTriviaStats.incorrectAnswers)) * $store.getters.getTriviaStats.correctAnswers) +
                      'deg, #c83c50 0)'
                  "
                ></div>
              </div>
              <p class="number">
                {{ roundToTwo((100 / ($store.getters.getTriviaStats.correctAnswers + $store.getters.getTriviaStats.incorrectAnswers)) * $store.getters.getTriviaStats.correctAnswers) }}%
              </p>
            </div>
            <div class="stat">
              <p>Current Streak</p>
              <img src="@/assets/fire.png" />
              <p class="number">{{ $store.getters.getTriviaStats.streak }}</p>
            </div>
            <div class="stat">
              <p>Longest Streak</p>
              <img src="@/assets/fire-blue.png" />
              <p class="number">{{ $store.getters.getTriviaStats.longestStreak }}</p>
            </div>
          </div>
          <button v-if="!confirmReset" class="reset-stats" @click="resetStats()">
            Reset Stats
          </button>
          <button v-else class="reset-stats confirm" @click="resetStats()">
            Click again to confirm
          </button>
          <div>
            <h1>Category Settings</h1>
            <p>These sliders affect how often questions of that category will appear. A category with the value 0 wont show up at all</p>
            <div class="category" v-for="category in categories" :key="category.id">
              <span class="value">{{ category.priority }}</span>
              <input type="range" min="0" max="10" v-model.number="category.priority" class="slider" id="priority" @change="setPriority()" />
              <p class="category-name">{{ category.name }}</p>
            </div>
          </div>
        </div>
      </template>
    </TriviaModal>
  </div>
</template>

<script src="./Trivia.js" />
<style src="./Trivia.scss" lang="scss" />
