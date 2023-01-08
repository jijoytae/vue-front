import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'

export default createRouter ({
  // Hash
  history: createWebHashHistory(),
  // pages
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
})