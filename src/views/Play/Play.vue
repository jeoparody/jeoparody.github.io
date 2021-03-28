<template>
  <div id="play">
    <div class="lobby" v-if="!started">
      <h1>Create Game</h1>
      <div class="config">
        <div class="players">
          <h2>Players</h2>
          <div class="player-list">
            <div v-for="(player, index) in players" :key="player + index" class="player">
              <input type="text" v-model="player.name" @keyup="$store.commit('setPlayers', players)" />
              <button @click="removePlayer(index)">
                <img src="@/assets/wrong.png" />
              </button>
            </div>
          </div>
          <div class="add-player" v-if="addPlayerActive">
            <input ref="playerInput" type="text" v-model="addPlayerInput" v-on:keyup.enter="addPlayer()" />
            <button @click="addPlayer()">
              <img src="@/assets/check.png" />
            </button>
          </div>
          <button @click="activatePlayerInput()" v-if="!addPlayerActive" class="add-player-button">
            Add a player
          </button>
        </div>
        <div class="settings">
          <h2>Settings</h2>
          <!-- <button @click="refreshCategories()">Generate</button> !-->
          <label for="file" class="upload-file-label"
            ><span v-if="Object.keys(json).length !== 0">"{{ json.title }}" uploaded</span><span v-if="Object.keys(json).length === 0">Upload your jeoparody file</span></label
          >
          <input class="upload-file-picker" type="file" name="file" id="file" ref="fileInput" accept=".json" @change="previewFiles()" />
          <div class="options">
            <p @click="$store.commit('setOptions', 'everybodyCanAnswer')" class="wip">
              Allow everybody to answer (W.I.P)<img v-if="$store.getters.getOptions.everybodyCanAnswer" src="@/assets/check.png" /><img v-else src="@/assets/wrong.png" />
              <br />
              <span class="description">
                Not yet implemented, doesn't affect gameplay
              </span>
            </p>
            <p @click="$store.commit('setOptions', 'turnEndsOnWrongAnswer')" v-if="!$store.getters.getOptions.everybodyCanAnswer">
              Turn only ends after wrong answer<img v-if="$store.getters.getOptions.turnEndsOnWrongAnswer" src="@/assets/check.png" /><img v-else src="@/assets/wrong.png" />
              <br />
              <span class="description">
                If this option is enabled, a player may continue his turn, until he gets a question wrong.
              </span>
            </p>
            <p @click="$store.commit('setOptions', 'underdogAdjustment')" v-if="!$store.getters.getOptions.turnEndsOnWrongAnswer && !$store.getters.getOptions.everybodyCanAnswer">
              Underdog Bonus<img v-if="$store.getters.getOptions.underdogAdjustment" src="@/assets/check.png" /><img v-else src="@/assets/wrong.png" />
              <br />
              <span class="description"
                >If there aren't the same amount of questions for each player, the players that got to answer one question less get a small bonus at the end. This bonus is based on how well they've
                performed through the game.<br />Example: If one player only got to answer 7 questions, while the others got 8, his final score will be divided by 7 and multiplied by 8.</span
              >
            </p>
          </div>
          <button @click="start()" :disabled="Object.keys(json).length === 0 || $store.getters.getPlayers.length == 0" class="start-button">
            START
          </button>
        </div>
      </div>
    </div>
    <div class="board" v-if="started">
      <table>
        <tr>
          <th v-for="(category, index) in json.categories" :key="category + index">
            {{ category.name }}
          </th>
        </tr>
        <tr v-for="(prize, row) in json.prizes" :key="prize + row">
          <td v-for="(category, index) in json.categories" :key="category + index" @click="$refs.modalName.openModal(category, index, row, prize)" v-bind:class="{ completed: getGrid[index][row] }">
            ${{ prize }}
          </td>
        </tr>
      </table>

      <div class="player-box">
        <div v-for="(player, index) in $store.getters.getPlayers" :key="player.name" v-bind:class="[getCurrentPlayer == index ? 'active' : '', 'player']" @click="changePlayer(index)">
          <h1>{{ player.name }}</h1>
          <img v-if="$store.getters.getLeadingPlayer.name == player.name" src="@/assets/crown.png" class="crown" />
          <button class="add" @click="player.money += 100">+</button>
          <input type="number" v-model.number="player.money" /><button class="subtract" @click="player.money -= 100">
            -
          </button>
        </div>
      </div>
      <button class="quit" @click="quit()">Quit</button>
      <button class="view-results" @click="$refs.results.openModal()" v-if="finished()">View Results</button>
      <modal ref="modalName">
        <template v-slot:footer>
          <div></div>
        </template>
      </modal>
      <results ref="results">
        <template v-slot:footer>
          <div></div>
        </template>
      </results>
    </div>
  </div>
</template>

<script src="./Play.js" />
<style src="./Play.scss" lang="scss" />
