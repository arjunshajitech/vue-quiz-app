
<script setup>
  import {ref,defineProps} from 'vue';
  import { useRouter, useRoute } from 'vue-router'
  const props = defineProps(['questions','empty'])
  const router = useRouter()
  const backgroundColor = ref('lightpink');

  const quizQuestions = (id) => {
    router.push(`/quiz/${id}`);
  }

  const getRandomColor = () => {
  return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
  }

  const changeBackgroundColor = (id) => {
    let randomColor = getRandomColor();
    backgroundColor.value = randomColor;
  }
</script>



<template>
    <div v-if="!empty" class="quiz-container">
      <div id="question.id" @click="quizQuestions(question.id)" @mouseover="changeBackgroundColor(question.id)" :style="{ backgroundColor: backgroundColor, color: 'white' }"  v-for="question in questions" ::key="question.id" class="quiz">
      {{question.name}}
      </div>
  </div>
  <div v-else class="error">
    Oops ! No Quiz found.
  </div>
</template>


<style scoped>
  .error {
    text-align: center;
    margin-top: 50px;
    font-size: 40px;
    color: red;
  }
  .quiz-container {
    margin-top: 50px;
    display: grid;
    padding: 0;
    column-gap: 10px;
    row-gap: 10px;
  }

  .quiz {
    text-align: center;
    padding: 40px;
    border: 2px solid black;
    cursor: pointer;
    font-size: 25px;
    border-radius: 5px;
  }

  @media(min-width: 300px) {
    .quiz-container {
      grid-template-columns: 1fr 1fr;
    }
  }

</style>