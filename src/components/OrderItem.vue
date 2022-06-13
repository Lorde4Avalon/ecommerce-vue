<template>
    <div class="order-item">
        <div class="order-header">
            <span>OrderDetails</span>
            <span>OrderGoods</span>
            <span>Data</span>
            <span>goodsNums</span>
            <span>Total:${{orderTotal}}</span>
        </div>

        <div class="order-detail" v-for="item in orderDetails" v-bind:key="item.id">
            <span><img :src="'http://202.193.53.235:8080/' + item.thumbnail" alt=""></span>
            <span>{{ item.goodsName }}</span>
            <span>{{ order.orderTime }}</span>
            <span>{{ item.goodsNums }}</span>
            <span>${{ item.goodsPrice }}</span>
        </div>
    </div>
</template>

<style lang="scss">
.order-item {
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);


    .order-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        background-color: #f5f5f5;
        margin: 10px 0;

        font-size: large;
        font-weight: bold;
    }

    .order-detail {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        background-color: #fff;

        img {
            width: 6rem;
            height: 6rem;
            margin-left: 1rem;
        }
    }
}
</style>

<script>
export default {
    props: {
        initialOrder: Object
    },
    data() {
        return {
            order: this.initialOrder,
            orderDetails: [],
        }
    },
    mounted() {
        this.orderDetails = this.order.orderDetail

        for (let i = 0; i < this.orderDetails.length; i++) {
            let numsStrs = this.orderDetails[i].nums.split(',')

            this.orderDetails[i].thumbnail = this.getImgByGoodsId(this.orderDetails[i].goodsId)
            this.orderDetails[i].goodsNums = numsStrs[0]
            let price = numsStrs[1].trim().split('=')
            this.orderDetails[i].goodsPrice = price[1]
        }

    },
    methods: {
        getImgByGoodsId(goodsId) {
            let goods = this.$store.state.goods 
            let img = ''
            goods.forEach(item => {
                if (item.id == goodsId) {
                    img = item.pthumbnail
                }
            })
            return img
        },
    },
    computed: {
        orderTotal() {
            return this.orderDetails.reduce((acc, curVal) => {
                return acc += curVal.goodsPrice * curVal.goodsNums
            }, 0)
        }
    }
}
</script>