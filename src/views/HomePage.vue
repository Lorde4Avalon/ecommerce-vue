<template>
    <div class="home">
        <section class="hero is-medium is-dark mb-6">
            <div class="hero-body has-text-centered">
                <p class="title mb-6">
                    Welcome to 5YouWant
                </p>
                <p class="subtitle">
                    You can find anything you want
                </p>
            </div>
        </section>

        <div class="columns is-multiline">
            <div class="column is-12">
                <h3 class="is-size-2 has-text-centered">Latest products</h3>
            </div>

            <ProductBox v-for="product in latestProducts" v-bind:key="product.id" v-bind:product="product"
                v-on:addToCart="addToCart" />


        </div>
    </div>
</template>

<script>
import axios from "axios";
import ProductBox from "../components/ProductBox.vue";

export default {
    name: 'HomePage',
    data() {
        return {
            latestProducts: [],
            cart: {
                items: [],
            },
        }
    },
    components: {
        ProductBox,
    },
    mounted() {
        this.getLatestProducts()
        this.getCartItem()
        document.title = 'Home | 5YouWant'
    },
    methods: {
        async getLatestProducts() {
            await axios
                .get('/api/goods/list')
                .then(response => {
                    this.latestProducts = response.data
                    this.$store.state.goods = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        async getCartItem() {
            await axios
                .get("/api/cart/listByUser", {
                    params: {
                        userId: this.$store.state.user.userId
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
        async addToCart(product) {
            await axios
                .get("/api/cart/add", {
                    params: {
                        userId: this.$store.state.user.userId,
                        goodsId: product.id,
                        num: 1,
                        price: product.price1,
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
    },
}
</script>

<style scoped>
.image {
    margin-top: -1.25rem;
    margin-left: -1.25rem;
    margin-right: -1.25rem;
}
</style>

