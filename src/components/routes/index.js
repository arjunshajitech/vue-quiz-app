import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import QuizHomePage from '../views/QuizHome.vue'
import QuizQuestionPage from '../views/QuizQuestion.vue'

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            path : "/",
            component : QuizHomePage
        } ,
        {
            path : "/quiz/:id",
            component : QuizQuestionPage
        }
    ]
})

export default router;
