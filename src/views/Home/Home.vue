<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <h1>Jeoparody</h1>
    <div class="buttons">
      <router-link to="/play"><button class="play">Play</button></router-link>
      <router-link to="/create"
        ><button>Create a Jeoparody</button></router-link
      >
    </div>
  </div>
</template>

<script src="./Home.js" />
<style src="./Home.scss" lang="scss" />
