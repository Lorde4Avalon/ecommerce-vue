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
                    v-on:removeCartItem="removeCartItem"
                    v-on:updateTotalPrice="updateTotalPrice"
                    v-on:conbindCartList="conbindCartList"/>
                </table>

                <p v-else>You don't have any in Cart. Try to get something new</p>
            </div>

            <div class="column is-12 box">
                <h2 class="subtitle">Summary</h2>

                Total: <strong>${{ cartTotalPrice.toFixed(2) }}</strong>
                <!-- Len: <strong>{{cartTotalLen}}</strong> -->

                <hr>

                <button class="button is-dark" @click="generateOrder()">Purchase</button>
            </div>
        </div>
    </div>
</template>


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
            },
            cartTotalPrice: 0,
            cartList: []
        }
    },
    mounted() {
        this.getCartItem()
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
        conbindCartList() {
            this.cart.items.forEach(item => {
                if (item.check) {
                    if (!this.cartList.includes(item.cardid)) this.cartList.push(item.cardid) 
                    this.cartList.join(',')
                }
            })
        },
        async getCartItem() {
            await axios
                .get("/api/cart/listByUser", {
                    params: {
                        userId: this.$store.getters.getUserInfo.state.user.userId
                    }
                })
                .then(response => {
                    this.cart.items = response.data
                })
                .catch(error => {
                    console.log(error);
                })
            this.$store.commit('initAddCart', this.cart)
        },
        async removeCartItem(item) {
            await axios
                    .get('/api/cart/deleteById', {
                        params: {
                            userId: this.$store.getters.getUserInfo.state.user.userId,
                            cartId: item.cardid
                        }
                    })
                    .then(response => {
                        this.cart.items = response.data
                    })
                    .catch(err => {
                        console.log(err.message);
                    })
                this.$store.commit('initAddCart', this.cart)
        },
        async generateOrder() {
            if (!this.cartList.length) {
                console.log("you have to select some items");
                return
            }

            await axios
                .get('/api/order/addCastOrder', {
                    params: {
                        userId: this.$store.getters.getUserInfo.state.user.userId,
                        cartList: this.cartList.toString()
                    }
                })
                .catch(err => {
                    console.log(err.message);
                })
                .finally(
                    this.$router.push('/')
                )
        }
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
        },
    }

}
</script>