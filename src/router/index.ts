import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WebPortfolioView from '../views/WebPortfolioView.vue'
import AppsPortfolioView from '../views/AppsPortfolioView.vue'
import designPortfolioView from '../views/DesignPortfolioView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/webpages-portfolio',
    name: 'webpages',
    component: WebPortfolioView
  },
  {
    path: '/apps-portfolio',
    name: 'apps',
    component: AppsPortfolioView
  },
  {
    path: '/designs-portfolio',
    name: 'designs',
    component: designPortfolioView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    setTimeout(() => window.scrollTo(0,0),500)
  }
})

export default router
