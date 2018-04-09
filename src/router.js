/* global Vue */
import Router from 'vue-router'
import page2 from '@/components/page2'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'page2',
      component: page2
    }
  ]
})
