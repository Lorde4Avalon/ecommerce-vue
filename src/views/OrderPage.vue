<template>
    <div class="page-order">
        <div class="columns is-multiline">
            <h1 class="title card-header-title">Orders</h1>
        </div>

        <div class="column is-12 box">
            <table class="table is-fullwidth">
                <OrderItem 
                v-for="order in orders"
                v-bind:key="order.id"/>


            </table>
        </div>

    </div>
</template>

<style lang="scss">
    .order-header tr,td {
        font-weight: bold;
        font-size: large;
    }
</style>

<script>
import axios from 'axios'
import OrderItem from '@/components/OrderItem.vue'

export default {
    name: 'orderPage',
    components: {
    OrderItem,
},
    data() {
        return {
            orders: []
        }
    },
    mounted() {
        this.getOrders()
    },
    methods: {
        async getOrders() {
            await axios
                .get('/api/order/listByUser', {
                    params: {
                        userId: this.$store.state.user.userId
                    }
                })
                .then(respone => {
                    this.orders = respone.data
                })
                .catch(err => {
                    console.log(err.message);
                })
        }
    }
}
</script>