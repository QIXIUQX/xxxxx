import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/home',
  //   redirect: () => import("../views/home/Home.vue")
  // },

  {
    path: '/',
    component: () => import("../views/home/Home.vue")
  },

  {
    path: '/home',
    name: 'home',
    component: () => import("../views/home/Home.vue")
  },

  {
    path: '/register',
    name: 'register',
    component: () => import("../views/register/Register.vue")
  },

  {
    path: '/login',
    name: 'login',
    component: () => import("../views/login/Login.vue")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
