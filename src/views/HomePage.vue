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

            <ProductBox v-for="product in lastProducts" v-bind:key="product.id" v-bind:product="product" />

            <div class="column is-3" v-for="product in lastProducts" v-bind:key="product.id">

                <div class="box">
                    <figure class="image mb-4">
                        <img v-bind:src="product.pthumbnail">
                    </figure>

                    <h3 class="is-size-4">{{ product.name }}</h3>
                    <p class="is-size-6 has-text-grey">${{ product.price }}</p>


                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import ProductBox from "@/components/ProductBox.vue";

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
                })
                .catch(error => {
                    console.log(error)
                })
        },
        async getCartItem() {
            await axios
                .get("/api/cart/listByUser", {
                    params: {
                        userId: this.$store.state.userId
                    }
                })
                .then(response => {
                    this.cart.items = response.data
                })
                .catch(error => {
                    console.log(error);
                })
            this.$store.commit('initAddCart', this.cart)
        }
    },
    // watch: {
    //     storeUserId() {
    //         this.userId = this.$store.state.userId
    //     }
    // },
    // computed: {
    //     storeUserId() {
    //         return this.$store.state.userId
    //     }
    // }
}
</script>

<style scoped>
.image {
    margin-top: -1.25rem;
    margin-left: -1.25rem;
    margin-right: -1.25rem;
}
</style>

