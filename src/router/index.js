import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/index/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/main/',
    name: 'main',
    component: () => import('../views/tasks/main.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
