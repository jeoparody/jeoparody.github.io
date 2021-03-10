<template>
  <div class="form" ref="form">
    <!--  @submit.prevent="form_m" !-->
    <h1>Create a Jeoparody</h1>
    <span>Give your Jeoparody a title</span>
    <br />
    <input type="text" v-model="jeoparody.title" />
    <h2>Categoriez and Prizepool</h2>

    <div class="config">
      <div class="categories">
        <h2>Categories</h2>
        <div class="list">
          <p
            class="element"
            v-for="(category, index) in categories"
            :key="category + index"
          >
            {{ category
            }}<button @click="removeCategory(index)">
              <img src="@/assets/wrong.png" />
            </button>
          </p>
        </div>
        <div class="add" v-if="addCategoryActive">
          <input
            ref="categoryInput"
            type="text"
            v-model="addCategoryInput"
            v-on:keyup.enter="addCategory()"
          />
          <button @click="addCategory()">
            <img src="@/assets/check.png" />
          </button>
        </div>
        <button
          class="add-button"
          @click="activateCategoryInput()"
          v-if="!addCategoryActive"
        >
          Add a category
        </button>
      </div>
      <div class="prizes">
        <h2>Prizes</h2>
        <div class="list">
          <p
            class="element"
            v-for="(prize, index) in prizes"
            :key="prize + index"
          >
            ${{ prize
            }}<button @click="removePrize(index)">
              <img src="@/assets/wrong.png" />
            </button>
          </p>
        </div>
        <div class="add" v-if="addPrizeActive">
          <input
            ref="prizeInput"
            type="number"
            v-model="addPrizeInput"
            v-on:keyup.enter="addPrize()"
          />
          <button @click="addPrize()"><img src="@/assets/check.png" /></button>
        </div>
        <button
          class="add-button"
          @click="activatePrizeInput()"
          v-if="!addPrizeActive"
        >
          Add a prize
        </button>
      </div>
    </div>
    <div v-for="(category, i) in categories" :key="category">
      <h2>{{ category }}</h2>
      <div v-for="(prize, j) in prizes" :key="prize">
        <h3>${{ prize }} Question</h3>
        <span>Question</span>
        <br />
        <input type="text" :name="'q/' + i + '/' + j" /><br />
        <span>Answer</span>
        <br />
        <input type="text" :name="'a/' + i + '/' + j" />
      </div>
    </div>
    <button @click="saveFile()">Save</button>
    <button type="submit">Submit</button>
  </div>
</template>

<script src="./Create.js" />
<style src="./Create.scss" lang="scss" />
