import './assets/main.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import store from './store'



const routes = [
    { path: '/', component: Home},
    { path: '/about', component: About},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
createApp(App).use(store).use(router).mount('#app')