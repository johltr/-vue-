import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home.vue'
import Detail from '@/pages/detail.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
