import { createWebHistory, createRouter } from 'vue-router'


import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
    ]
})

export {router};