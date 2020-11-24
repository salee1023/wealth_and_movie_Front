import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/SideNavbar/Home.vue'
import Mypage from '../views/SideNavbar/Mypage.vue'
import Community from '../views/SideNavbar/Community.vue'
import Analytics from '../views/SideNavbar/Analytics.vue'
import Signup from '../views/Accounts/Signup.vue'
import Login from '../views/Accounts/Login.vue'
import ReviewDetail from '@/components/Mypage/ReviewDetail.vue'
import ReviewPage from '@/components/Community/ReviewPage.vue'
import ReviewUpdatePage from '@/components/Community/ReviewUpdatePage.vue'

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
    path: '/mypage/reviewdetail',
    name: 'ReviewDetail',
    component: ReviewDetail
  },
  {
    path: '/community',
    name: 'Community',
    component: Community
  },
  {
    path: '/community/reviewpage',
    name: 'ReviewPage',
    component: ReviewPage
  },
  {
    path: '/community/reviewupdate',
    name: 'ReviewUpdatePage',
    component: ReviewUpdatePage
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
