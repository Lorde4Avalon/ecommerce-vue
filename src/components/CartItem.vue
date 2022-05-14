<template>
    <tr>
        <td><router-link :to="item.product.get_absolute_url">{{ item.product.name }}</router-link></td>
        <td>${{ item.product.price }}</td>
        <td>
            {{ item.quantity }}
            <a @click="decrementQuantity(item)">-</a>
            <a @click="incrementQuantity(item)">+</a>
        </td>
        <td>${{ getItemTotal(item).toFixed(2) }}</td>
        <td><button class="delete" @click="removeFromCart(item)"></button></td>
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
            return item.quantity * item.prouct.price
            /* this.updateCart() */
        },
        incrementQuantity(item) {
            item.quantity++
            this.updateCart()
        },
        decrementQuantity(item) {
            item.quantity--
            if (item.quantity === 0) {
                this.removeItem(item)
            }
            this.updateCart()
        },
        updateCart() {
            localStorage.setItem('cart', JSON.stringify(this.cart))
        },
        removeItem(item) {
            this.cart.items.splice(this.cart.items.indexOf(item), 1)
            this.updateCart()
        }, 
    },
}
</script>