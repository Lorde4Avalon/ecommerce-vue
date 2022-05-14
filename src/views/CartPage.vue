<template>
     <div class="page-cart">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h1 class="title card-header-title">Cart</h1>
            </div>

            <div class="column is-12 box">
                <table class="table is-fullwidth">
                    <CartItem 
                    v-if="item in cart.items"
                    v-bind:key="item.product.cartId"
                    v-bind:initialItem="item.product"/>
                </table>
            </div>

        </div>
    </div>
</template>

<style>
@import "../assets/style.CSS";
</style>


<script>
/* import axios from 'axios' */
import CartItem from '../components/CartItem.vue'

export default {
    name: 'CartPage',
    components: {
    CartItem
},
    data() {
        return {
            cart: {
                items: []
            }
        }
    },
    computed: {
        
    }

}
</script>