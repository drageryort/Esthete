import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WebPortfolioView from '../views/WebPortfolioView.vue'
import AppsPortfolioView from '../views/AppsPortfolioView.vue'
import DesignPortfolioView from '../views/DesignPortfolioView.vue'
import PortfolioView from "@/views/PortfolioView.vue";
import ErrorView from "@/views/ErrorView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/web',
    name: 'webpages',
    component: WebPortfolioView
  },
  {
    path: '/applications',
    name: 'apps',
    component: AppsPortfolioView
  },
  {
    path: '/design',
    name: 'designs',
    component: DesignPortfolioView
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioView
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Not found',
    component: ErrorView
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if(!to.hash){
      setTimeout(() => window.scrollTo(0,0),500)
    }
  }
})

export default router
