import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import NotFound from './views/NotFound.vue';

const routes = [
  { name: "404", path: '/not-found', component: NotFound },
  { path: '/:pathMatch(.*)*', redirect: { name: "404" } },
  {name: "home", path:"/", component: App}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});



createApp(App).use(router).mount('#app')
