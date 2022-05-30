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
                    v-bind:key="item.cardid"
                    v-bind:initialItem="item"
                    v-on:removeItem="removeItem"
                    v-on:updateTotalPrice="updateTotalPrice"/>
                </table>

                <p v-else>You don't have any in Cart. Try to get something new</p>
            </div>

            <div class="column is-12 box">
                <h2 class="subtitle">Summary</h2>

                Total: <strong>${{ cartTotalPrice.toFixed(2) }}</strong>
                Len: <strong>{{cartTotalLen}}</strong>

                <hr>

                <router-link to="/cart/checkout" class="button is-dark">Purchase</router-link>
            </div>
        </div>
    </div>
</template>


<script> 
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
            },
            cartTotalPrice: 0
        }
    },
    mounted() {
        this.cart = this.$store.state.cart
        document.title = "Cart | 5YouWant"
    },
    methods: {
        removeItem(item) {
            this.cart.items = this.cart.items.filter(i => i.cardid !== item.cardid)
        },
        updateTotalPrice() {
            this.cartTotalPrice = 0
            this.cart.items.forEach(item => {
                if (item.check) {
                    this.cartTotalPrice += item.price * item.num
                }
            });
        },
    },
    watch: {
        storeCart() {
            this.cart = this.$store.state.cart
        }
    },
    computed: {
        cartTotalLen() {
          return this.cart.items.reduce((acc, curVal) => {
              return acc += parseInt(curVal.num)
          }, 0)  
        },
        storeCart() {
            return this.$store.state.cart
        }
    }

}
</script>