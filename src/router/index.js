import Vue from 'vue'
import Router from 'vue-router'
import CustomerCrud from '@/components/CustomerCard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CustomerCrud',
      component: CustomerCrud
    }
  ]
})