<template>
  <div id="app">
    <!--    <div id="nav">
      <router-link to="/">Play</router-link> |
      <router-link to="/about">Create a Jeoprady</router-link>
    </div> !-->
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  background-color: #0e0039;
  height: 100%;
}
html {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #eeeeee;
  height: 100%;
  overflow: hidden;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #4968cc;
  border-radius: 100px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #4968cc;
}
</style>
