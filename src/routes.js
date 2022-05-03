import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Commands from './pages/Commands.vue'
import Todo from './pages/Todo.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/commands',
    component: Commands
  },
  {
    path: '/todo',
    component: Todo
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
