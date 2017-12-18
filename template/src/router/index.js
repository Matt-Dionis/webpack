import Vue from 'vue'
import Router from 'vue-router'
import HelloGraphQL from '@/components/HelloGraphQL'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloGraphQL',
      component: HelloGraphQL
    }
  ]
})
