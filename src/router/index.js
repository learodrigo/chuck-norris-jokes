import { createRouter, createWebHistory } from 'vue-router'

import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Error404 from '../views/Error404.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/404',
    name: 'not-found',
    component: Error404
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
