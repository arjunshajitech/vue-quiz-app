<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import { useRouter } from 'vue-router';
const props = defineProps(['question', 'index']);
const emit = defineEmits();
const router = useRouter();
const showResult = ref(false);
const correctAnswer = ref(0);

const changeQuestion = (isCorrect) => {
    let indexValue = props.index;
    indexValue++;
    emit('changed-index', indexValue);
    if (indexValue === 3) {
        showResult.value = true;
    }
    if(isCorrect) {
        correctAnswer.value ++;
    }
}

const returnHome = () => {
    router.push('/')
}


</script>


<template>
    <div class="options-container">
        <div v-if="!showResult">
            <p class="question"> {{ question.question }}</p>
            <div @click="changeQuestion(option.isCorrect)" v-for="option in question.options" class="options">
                <p class="label">{{ option.label }}</p>
                <p class="option">{{ option.option }}</p>
            </div>
        </div>
        <div v-else class="results">
            <p class="result-text">Your result is...</p>
            <h1 class="result-score">{{correctAnswer}}/3</h1>
            <button @click="returnHome" class="return-button">Return Home</button>
        </div>
    </div>
</template>

<style scoped>
p {
    margin: 0;
}

.return-button {
    width: 150px;
    height: 40px;
    border-radius: 5px;
    border: none;
    background-color: lightseagreen;
    color: #fff;
    cursor: pointer;
}

.return-button:hover {
    background-color: lightcoral;
    transition: .5s;
}

.result-text {
    font-size: 40px;
    color: lightseagreen;
}

.result-score {
    padding: 50px;
    border: 2px solid lightseagreen;
    color: lightcoral;
    border-radius: 100px;
    font-size: 40px;
}

.results {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.question {
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: bold;
}

.options-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
}

.label {
    padding: 16px;
    font-weight: bold;
    background-color: lightcoral
}

.option {
    font-size: 18px;
    padding-left: 10px;
}

.options {
    align-items: center;
    display: flex;
    width: 400px;
    height: 45px;
    margin-bottom: 10px;
    border: 1px solid #111;
    border-radius: 5px;
    background-color: lightpink;
    cursor: pointer;
    border-left: none;
}

.options:hover {
    color: white;
    background-color: lightseagreen;
    transition: .5s;
}
</style>