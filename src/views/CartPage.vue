<template>
     <div class="page-cart">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h1 class="title card-header-title">Cart</h1>
            </div>

            <div class="column is-12 box">
                <table class="table is-fullwidth" v-if="cartTotalLen">
                    <CartItem 
                    v-for="item in cart.items"
                    v-bind:key="item.cartId"
                    v-bind:initialItem="item"
                    v-on:removeItem="removeItem"/>
                </table>

                <p v-else>You don't have any in Cart. Try to get something new</p>
            </div>

            <div class="column is-12 box">
                <h2 class="subtitle">Summary</h2>

                Total: <strong>${{ cartTotalPrice.toFixed(2) }}</strong>

                <hr>

                <router-link to="/cart/checkout" class="button is-dark">Purchase</router-link>
            </div>
        </div>
    </div>
</template>

<style>
/* @import "../assets/style.CSS"; */
</style>


<script> 
import axios from 'axios'
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
    mounted() {
        this.getCartItem()
        document.title = "Cart | 5YouWant"
    },
    methods: {
        removeItem(item) {
            this.cart.items = this.cart.items.filter(i => i.cartId !== item.cartId)
        },
        updateTotalPrice() {
            
        },

        async getCartItem() {
            await axios
            .get("/carts")
            .then(response => {
                this.cart.items = response.data
            })
            .catch(error => {
                console.log(error);
            })
        }
    },
    computed: {
        cartTotalLen() {
          return this.cart.items.reduce((acc, curVal) => {
              return acc += curVal.quantity
          }, 0)  
        },
        cartTotalPrice() {
            return this.cart.items.reduce((acc, curVal) => {
                return acc += curVal.price * curVal.quantity
            },0)
        }
    }

}
</script>