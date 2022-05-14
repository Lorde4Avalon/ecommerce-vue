<template>
    <tr>
        <td><input class="check" type="checkbox" @click="checkItem()"></td>
        <td>{{ item.name }}</td>
        <td>${{ item.price }}</td>
        <td>
            <a @click="decrementQuantity(item)">-</a>
            {{ item.quantity }}
            <a @click="incrementQuantity(item)">+</a>
        </td>
        <td>${{ getItemTotal(item).toFixed(2) }}</td>
        <td><button class="delete" @click="removeItem(item)"></button></td>
    </tr> 

</template>

<style>
@import "../assets/style.CSS";
</style>


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
            return item.quantity * item.price
        },
        incrementQuantity(item) {
            item.quantity++
            this.updateCart()
        },
        decrementQuantity(item) {
            item.quantity--
            if (item.quantity == 0) {
                this.$emit('removeItem', item)
            }
            this.updateCart()
        },
        updateCart() {
            localStorage.setItem('cart', JSON.stringify(this.cart))
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