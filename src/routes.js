import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Commands from './pages/Commands.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/commands',
    component: Commands
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
