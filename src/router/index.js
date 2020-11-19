import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mypage from '../views/Mypage.vue'
import Community from '../views/Community.vue'
import Analytics from '../views/Analytics.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mypage',
    name: 'Mypage',
    component: Mypage
  },
  {
    path: '/community',
    name: 'Community',
    component: Community
  },
  {
    path: '/analytics',
    name: 'Analytics',
    component: Analytics
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
