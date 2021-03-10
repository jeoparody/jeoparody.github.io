<template>
  <div id="play">
    <div class="lobby" v-if="!started">
      <h1>Create Game</h1>
      <div class="config">
        <div class="players">
          <h2>Players</h2>
          <div class="player-list">
            <p
              v-for="(player, index) in players"
              :key="player + index"
              class="player"
            >
              {{ player.name }}
              <button @click="removePlayer(index)">
                <img src="@/assets/wrong.png" />
              </button>
            </p>
          </div>
          <div class="add-player" v-if="addPlayerActive">
            <input
              ref="playerInput"
              type="text"
              v-model="addPlayerInput"
              v-on:keyup.enter="addPlayer()"
            />
            <button @click="addPlayer()">
              <img src="@/assets/check.png" />
            </button>
          </div>
          <button
            @click="activatePlayerInput()"
            v-if="!addPlayerActive"
            class="add-player-button"
          >
            Add a player
          </button>
        </div>
        <div class="settings">
          <h2>Settings</h2>
          <label for="file" class="file-label"
            ><span v-if="Object.keys(json).length !== 0"
              >"{{ json.title }}" uploaded</span
            ><span v-if="Object.keys(json).length === 0"
              >Upload your jeoparody file</span
            ></label
          >
          <input
            class="file-picker"
            type="file"
            name="file"
            id="file"
            ref="fileInput"
            @change="previewFiles()"
          />
          <div class="options">
            <p>
              Turn only ends after wrong answer<img
                v-if="options.turnEndsOnWrongAnswer"
                src="@/assets/check.png"
                @click="changeOption('turnEndsOnWrongAnswer')"
              /><img
                v-else
                src="@/assets/wrong.png"
                @click="changeOption('turnEndsOnWrongAnswer')"
              />
            </p>
            <p class="wip">Daily Double<img src="@/assets/check.png" /></p>
          </div>
          <button
            @click="start()"
            :disabled="Object.keys(json).length === 0"
            class="start-button"
          >
            START
          </button>
        </div>
      </div>
    </div>
    <div class="board" v-if="started">
      <table>
        <tr>
          <th
            v-for="(category, index) in json.categories"
            :key="category + index"
          >
            {{ category.name }}
          </th>
        </tr>
        <tr v-for="(prize, row) in json.prizes" :key="prize + row">
          <td
            v-for="(category, index) in json.categories"
            :key="category + index"
            @click="$refs.modalName.openModal(category, index, row, prize)"
            v-bind:class="{ completed: getGrid[index][row] }"
          >
            ${{ prize }}
          </td>
        </tr>
      </table>

      <div class="player-box">
        <div
          v-for="(player, index) in players"
          :key="player.name"
          v-bind:class="[getCurrentPlayer == index ? 'active' : '', 'player']"
          @click="changePlayer(index)"
        >
          <h1>{{ player.name }}</h1>
          <button class="add" @click="player.money += 100">+</button
          ><input type="number" v-model.number="player.money" /><button
            class="subtract"
            @click="player.money -= 100"
          >
            -
          </button>
        </div>
      </div>
      <button class="quit" @click="quit()">Quit</button>
      <modal ref="modalName">
        <template v-slot:footer>
          <div></div>
        </template>
      </modal>
    </div>
  </div>
</template>

<script src="./Play.js" />
<style src="./Play.scss" lang="scss" />
