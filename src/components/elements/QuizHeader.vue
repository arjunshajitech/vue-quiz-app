
<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import { useRouter, useRoute } from 'vue-router'

const props = defineProps(['searchText']);
const quizSearch = ref(props.searchText);

const emit = defineEmits();
const router = useRouter();

const handleChange = () => {
  emit('text-field-change', quizSearch.value);
};

const homePage = () => {
  router.push('/')
}

</script>



<template>
  <div class="header-container">
    <p @click="homePage" class="header-text">Quiz App</p>
    <input v-model="quizSearch" @input="handleChange" placeholder="Search eg: maths,html ..." class="quiz-search-box"
      type="text">
  </div>
</template>

<style scoped>
.header-container {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 10px;
}

.header-text {
  padding: 0;
  margin: 0;
  font-size: 40px;
  cursor: pointer;
}

.quiz-search-box {
  border-radius: 5px;
  width: 80%;
  height: 40px;
  cursor: pointer;
  border: 2px solid black;
  padding-left: 10px;
  font-size: 18px;
}

.quiz-search-box:focus {
  outline: none;
}
</style>