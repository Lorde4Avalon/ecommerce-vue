import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/HomePage.vue'

import LogIn from '../views/LogIn.vue'
import Cart from '../views/CartPage.vue'
import Order from '../views/OrderPage.vue'
import SignUp from '@/views/SignUp.vue'

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
        path: '/signup',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/order',
        name: 'Order',
        component: Order
    }
]

var router = createRouter({
    history: createWebHistory(),
    routes: routers
})

export default router