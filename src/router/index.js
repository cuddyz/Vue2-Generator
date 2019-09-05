import Vue from 'vue'
import Router from 'vue-router'
import {loadView} from './routeService'

Vue.use(Router)

let routeConfig = {
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: loadView('Home')
    }
  ]
}

const router = new Router(routeConfig)

export default router
