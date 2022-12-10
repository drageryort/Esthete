import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/webpages-portfolio',
    name: 'webpages',
    component: () => import('../views/WebPortfolioView.vue')
  },
  {
    path: '/apps-portfolio',
    name: 'apps',
    component: () => import('../views/AppsPortfolioView.vue')
  },
  {
    path: '/designs-portfolio',
    name: 'designs',
    component: () => import('../views/DesignPortfolioView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
