<template>
  <div class="main-home" :style="'background-color:' + getColor()">
    <transition tag="div" class="div-slider" :name="back ? 'slideback' : 'slide'">
      <div v-if="currentIndex === 0" key="1">
        <div class="home jeoparody">
          <h1>JEOPARODY!</h1>
          <p>The classic quizshow for you and your friends!</p>
          <div class="buttons">
            <router-link to="/play"><button class="play">Play</button></router-link>
            <router-link to="/create"><button>Create a Jeoparody</button></router-link>
          </div>
          <div class="meta">
            <img src="@/assets/group.png" />
            <span>2-8 Players</span>
          </div>
          <!-- <h2>Here's how it works</h2>
          <p>
            Creating a Jeoparody will result in a .json file which you should keep somewhere on your computer. Once it's time to play, upload that file in the lobby and share your screen with your
            friends.
          </p>
          <p>
            You shouldnt have to worry about loosing your progress as it is safed on your computer (not somewhere else) and remains even if you reload or close the page (Just be careful when deleting
            website data in your browser).
          </p>
          <p>You can always download your created Jeoparody and continue editing it later.</p>
          <p>Have fun!</p> !-->
        </div>
        <div class="credit">Questions provided by <a class="link" href="http://jservice.io/" target="_blank">jService</a></div>
      </div>
      <div v-if="currentIndex === 1" key="2">
        <div class="home t">
          <h1>Trivia</h1>
          <p>Test your knowledge!</p>
          <div class="buttons">
            <router-link to="/trivia"><button class="play">Play</button></router-link>
          </div>
          <div class="meta">
            <img src="@/assets/group.png" />
            <span>1 Player</span>
          </div>
        </div>
        <div class="credit">Questions provided by <a class="link" href="https://opentdb.com/" target="_blank">Open Trivia Database</a></div>
      </div>
      <div v-if="currentIndex === 2" key="3">
        <div class="dev-tag">IN DEVELOPMENT</div>
        <div class="home wwc">
          <h1>Who wants to be Challenger?</h1>
          <div class="buttons">
            <router-link to="/play"><button class="play">Play</button></router-link>
            <router-link to="/create"><button>Create a Quiz</button></router-link>
          </div>
        </div>
      </div>
      <div v-if="currentIndex === 3" key="4">
        <div class="home">
          <h1>More games coming soon!</h1>
          <p>Maybe...</p>
        </div>
      </div>
    </transition>
    <div class="switch prev" @click="prev()">
      <img src="@/assets/arrow.png" /><span>{{ getPrev() }}</span>
    </div>
    <div class="switch next" @click="next()">
      <img src="@/assets/arrow.png" /><span>{{ getNext() }}</span>
    </div>

    <div class="patch">
      <span class="patch-number">Version 21w12a</span><a class="link" href="https://github.com/jeoparody/jeoparody.github.io/blob/development/patchnotes.md" target="_blank">Read Patchnotes</a>
    </div>
  </div>
</template>

<script src="./Home.js" />
<style src="./Home.scss" lang="scss" />
