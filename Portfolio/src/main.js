import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue';
import NotFound from './views/NotFound.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/not-found', name: 'not-found', component: NotFound },
  { path: '/:pathMatch(.*)*', redirect: { name: 'not-found' } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});



createApp(App).use(router).mount('#app')
