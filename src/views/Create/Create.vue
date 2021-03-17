<template>
  <div class="form" ref="form">
    <!--  @submit.prevent="form_m" !-->
    <h1>Create a Jeoparody</h1>
    <span>Give your Jeoparody a title</span>
    <br />
    <input class="input" type="text" v-model="jeoparody.title" />
    <!--
    <h2>Categoriez and Prizepool</h2>
    <div class="config">
      <div class="categories">
        <h2>Categories</h2>
        <div class="list">
          <p class="element" v-for="(category, index) in jeoparody.categories" :key="category + index">
            {{ category.name }}
            <button @click="removeCategory(index)">
              <img src="@/assets/wrong.png" />
            </button>
          </p>
        </div>
        <div class="add" v-if="addCategoryActive">
          <input type="text" v-model="addCategoryInput" v-on:keyup.enter="addCategory()" />
          <button @click="addCategory()">
            <img src="@/assets/check.png" />
          </button>
        </div>
        <button class="add-button" @click="activateCategoryInput()" v-if="!addCategoryActive">
          Add a category
        </button>
      </div>
      <div class="prizes">
        <h2>Prizes</h2>
        <div class="list">
          <p class="element" v-for="(prize, index) in jeoparody.prizes" :key="prize + index">
            ${{ prize
            }}<button @click="removePrize(index)">
              <img src="@/assets/wrong.png" />
            </button>
          </p>
        </div>
        <div class="add" v-if="addPrizeActive">
          <input type="number" v-model="addPrizeInput" />
          <button @click="addPrize()"><img src="@/assets/check.png" /></button>
        </div>
        <button class="add-button" @click="activatePrizeInput()" v-if="!addPrizeActive">
          Add a prize
        </button>
      </div>
    </div>
    !-->
    <div class="table-container">
      <table v-if="jeoparody.categories.length" :style="'max-height:' + (jeoparody.prizes.length * 50 + 50) + 'px'">
        <button class="add-category-button" @click="activateCategoryInput()" v-if="!addCategoryActive">+</button>
        <button class="add-prize-button" @click="activatePrizeInput()" v-if="!addPrizeActive">+</button>
        <div class="remove-prize-container" v-if="jeoparody.prizes.length > 1">
          <button v-for="(prize, row) in jeoparody.prizes" :key="prize + row" class="remove-prize" @click="removePrize(row)">
            <img src="@/assets/wrong.png" />
          </button>
        </div>
        <tr>
          <th v-for="(category, index) in jeoparody.categories" :key="category + index">
            <button class="remove-category" @click="removeCategory(index)">
              <img src="@/assets/wrong.png" />
            </button>
            <input class="input" type="text" v-model="category.name" />
          </th>
          <th v-if="addCategoryActive">
            <input class="input" type="text" v-model="addCategoryInput" ref="categoryInput" v-on:keyup.enter="addCategory()" />
          </th>
        </tr>
        <tr v-for="(prize, row) in jeoparody.prizes" :key="prize + row">
          <td
            v-for="(category, index) in jeoparody.categories"
            :key="category + index"
            v-bind:class="[
              { active: activeCell[0] == index && activeCell[1] == row },
              { completed: jeoparody.categories[index].questions[row].qustion != '' && jeoparody.categories[index].questions[row].answer != '' },
              { even: row % 2 !== 0 },
            ]"
            @click="setCell(row, index)"
          >
            $<input class="input" type="number" v-model.number="jeoparody.prizes[row]" />
          </td>
        </tr>
        <tr v-if="addPrizeActive">
          <td>$<input class="input" type="number" v-model.number="addPrizeInput" ref="prizeInput" v-on:keyup.enter="addPrize()" /></td>
        </tr>
      </table>

      <div v-else class="add-first">
        <div class="add" v-if="addCategoryActive">
          <input class="input" ref="categoryInput" type="text" v-model="addCategoryInput" v-on:keyup.enter="addCategory()" />
          <button @click="addCategory()">
            <img src="@/assets/check.png" />
          </button>
        </div>
        <button class="add-button" @click="activateCategoryInput()" v-else>
          Add your first category
        </button>
      </div>
    </div>

    <div v-if="jeoparody.categories.length" class="editor-area">
      <div class="question">
        <h2>Question</h2>
        <vue-editor :editorToolbar="customToolbar" :editorOptions="editorSettings" v-model="jeoparody.categories[activeCell[0]].questions[activeCell[1]].question" class="editor"></vue-editor>
      </div>
      <div class="answer">
        <h2>Answer</h2>
        <vue-editor :editorToolbar="customToolbar" :editorOptions="editorSettings" v-model="jeoparody.categories[activeCell[0]].questions[activeCell[1]].answer" class="editor"></vue-editor>
      </div>
    </div>
    <button class="download" @click="saveFile()" :disabled="jeoparody.title == ''">Download</button>
    <label for="file" class="file-label">Edit an existing Jeoparody</label>
    <input class="file-picker" type="file" name="file" id="file" ref="fileInput" accept=".json" @change="oepnFile()" />
    <button class="reset" @click="reset()">Reset</button>
  </div>
</template>

<script src="./Create.js" />
<style src="./Create.scss" lang="scss" />
