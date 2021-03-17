<template>
  <div class="home">
    <h1>Jeoparody</h1>
    <div class="buttons">
      <router-link to="/play"><button class="play">Play</button></router-link>
      <router-link to="/create"><button>Create a Jeoparody</button></router-link>
    </div>
    <h2>Here's how it works</h2>
    <p>
      Creating a Jeoparody will result in a .json file which you should keep somewhere on your computer. Once it's time to play, upload that file in the lobby and share your screen with your friends.
    </p>
    <p>
      You shouldnt have to worry about loosing your progress as it is safed on your computer (not somewhere else) and remains even if you reload or close the page (Just be careful when deleting
      website data in your browser).
    </p>
    <p>You can always download your created Jeoparody and continue editing it later.</p>
    <p>Have fun!</p>
  </div>
</template>

<script src="./Home.js" />
<style src="./Home.scss" lang="scss" />
