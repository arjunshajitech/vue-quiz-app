<script setup>
import { ref, defineProps , watch } from 'vue';
const props = defineProps(['question','index'])


const progressBar = ref(0);
watch(()=>props.index , ()=> {
    progressBar.value = props.index / props.question.questions.length * 100
})

</script>

<template>
    <div class="quiz-container">
        <div class="quiz-header">
            <p class="question-status">Question {{ index }} / {{ question.questions.length }}</p>
            <div class="progress-bar">
                <div :style="{width: progressBar + '%'}" class="progress"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.question-status {
    font-size: 30px;
    margin: 0;
}

.quiz-header {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 25px;
}

.progress-bar {
    width: 300px;
    height: 40px;
    border: 1px solid #111;
}

.progress {
    height: 100%;
    background-color: lightseagreen;
    width: 0%;
}
</style>