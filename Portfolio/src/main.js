import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: App },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('./views/NotFound.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
