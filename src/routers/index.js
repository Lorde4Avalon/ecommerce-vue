import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/HomePage.vue'

import LogIn from '../views/LogIn.vue'
import Cart from '../views/CartPage.vue'

const routers = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'LogIn',
        component: LogIn
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    }
]

var router = createRouter({
    history: createWebHistory(),
    routes: routers
})

export default router