<template>
    <tr>
        <td><input class="check" type="checkbox" @click="checkItem()"></td>
        <td><img :src="'http://202.193.53.235:8080/' + item.thumbnail" alt="cardImg" style="width:6rem"></td>
        <td>{{ item.name }}</td>
        <td>${{ item.price }}</td>
        <td>
            <button @click="decrementnum(item)" style="padding: 0 8px">-</button>
            {{ item.num }}
            <button @click="incrementnum(item)" style="padding: 0 8px">+</button>
        </td>
        <td>${{ getItemTotal(item).toFixed(2) }}</td>
        <td><button class="delete" @click="removeItem(item)"></button></td>
    </tr>

</template>

<!-- <style>
@import "../assets/style.CSS";
</style> -->


<script>
export default {
    name: 'CartItem',
    props: {
        initialItem: Object
    },
    data() {
        return {
            item: this.initialItem
        }
    },
    methods: {
        getItemTotal(item) {
            this.updateCart()
            return item.num * item.price
        },
        incrementnum(item) {
            item.num++
            this.updateCart()
        },
        decrementnum(item) {
            item.num--
            if (item.num == 0) {
                this.$emit('removeItem', item)
            }
            this.updateCart()
        },
        updateCart() {
            // localStorage.setItem('cart', JSON.stringify(this.cart))
            this.$emit('updateTotalPrice')
        },
        removeItem(item) {
            this.$emit('removeItem', item)
            this.updateCart()
        },
        checkItem() {
            this.item["check"] = !this.item["check"]
            this.$emit('updateTotalPrice')
        }
    },
}
</script>