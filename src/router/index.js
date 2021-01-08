import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/frontend',
    name: 'FrontEnd',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FrontEnd.vue')
  },
  {
    path: '/backend',
    name: 'BackEnd',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BackEnd.vue')
  },
  {
    path: '/mobile',
    name: 'Mobile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Mobile.vue')
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },

  {
    path: '/login',
    name: 'Login Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin/LoginPage.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    meta: {login : true},
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin/Admin.vue'),
    beforeEnter: (to, from, next) => {
     if(store.state.admin.authenticated == false) {
       next('/login')
      // alert('This page is secured!')
     } else {
       next()
     }
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
