<template>
    <div class="cart-row">
        <div class="cart-item cart-column">
            <input class="checkbox" type="checkbox" @click="updateCart()">
            <span class="cart-item-title">{{item.name}}</span>
        </div>
        <span class="cart-price cart-column">{{item.price}}}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value={{item.prouct.num}}>
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>
    </div>  

</template>

<style>
@import "../assets/style.CSS"
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
            this.updateCart()
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