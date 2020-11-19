import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/SideNavbar/Home.vue'
import Mypage from '../views/SideNavbar/Mypage.vue'
import Community from '../views/SideNavbar/Community.vue'
import Analytics from '../views/SideNavbar/Analytics.vue'
import Signup from '../views/Accounts/Signup.vue'
import Login from '../views/Accounts/Login.vue'
import Logout from '../views/Accounts/Logout.vue'


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
  {
    path: '/accounts/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/accounts/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/accounts/logout',
    name: 'Logout',
    component: Logout
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
