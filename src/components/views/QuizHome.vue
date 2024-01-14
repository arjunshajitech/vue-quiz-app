<script setup>
import { ref, watch } from 'vue';
import QuizHeader from '../elements/QuizHeader.vue';
import Q from '../data/QuizData.json'
import QuizCard from '../elements/QuizCard.vue'

const searchText = ref('');
const quizQuestion = ref(Q);
const isEmpty = ref(false);

const handleSearchChange = (newText) => {
  searchText.value = newText;
};

watch(searchText, () => {
  quizQuestion.value = Q.filter(question => {
    return question.name.toLowerCase().includes(searchText.value.toLowerCase());
  });
  isEmpty.value = quizQuestion.value.length === 0;
});

</script>

<template>
    <QuizHeader :searchText="searchText" @text-field-change="handleSearchChange" />
    <QuizCard :questions="quizQuestion" :empty="isEmpty" />
</template>