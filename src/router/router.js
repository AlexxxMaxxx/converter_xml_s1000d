import HomePage from '@/pages/HomePage';
import Result from '@/pages/Result';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/getResult',
    component: Result
  }
]
const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router;