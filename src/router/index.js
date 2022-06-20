import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/brands',
    name: 'Brand',
    component: () => import('../views/BrandView.vue')
  },
  {
    path: '/products',
    name: 'Product',
    component: () => import('../views/ProductView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
