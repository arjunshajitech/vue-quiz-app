<script setup>
import {ref} from 'vue';
import QustionHeader from '../elements/QuestionHeader.vue'
import QuestionOptions from '../elements/QuestionOptions.vue'
import Q from '../data/QuizData.json'
import { useRoute } from 'vue-router';

const route = useRoute();

const id = parseInt(route.params.id);

const questionIndex = ref(0);
const quizQuestion = Q.find(question => question.id === id);

const changeIndex = (newIndex) => {
    questionIndex.value = newIndex;
} 

</script>


<template>
    <QustionHeader :question="quizQuestion" :index="questionIndex"/>
    <QuestionOptions @changed-index="changeIndex" :question="quizQuestion.questions[questionIndex]" :index="questionIndex"/>
</template>