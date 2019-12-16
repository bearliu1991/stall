import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Purchaser from '@/components/purchaser'
import Stall from '@/components/stall'

Vue.use(Router)

export default new Router({
  base: '',
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/purchaser',
      name: 'Purchaser',
      component: Purchaser
    },
    {
      path: '/stall',
      name: 'Stall',
      component: Stall
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
