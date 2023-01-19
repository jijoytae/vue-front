import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Header from './Header'
import Mypage from './Mypage'
import Basket from './Basket'
import Account from './Account'
import Login from './Login'
import Footer from './Footer'

export default createRouter ({
  // Hash
  history: createWebHashHistory(),
  // pages
  routes: [{
        path: '/',
        component: Home
    },{
        path: '/',
        component: Header
    },{
        path: '/mypage',
        component : Mypage  
    },{
        path: '/basket',
        component : Basket  
    },{
        path: '/account',
        component : Account  
    },{
        path: '/login',
        component : Login  
    },{
        path : '/',
        component : Footer
    }]
})