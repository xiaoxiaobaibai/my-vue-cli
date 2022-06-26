import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '@/view/home'
import test from '@/view/test'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: home
  },
  {
    path: '/test',
    component: test
  }
]

const router = new VueRouter({
  routes
})

export default router