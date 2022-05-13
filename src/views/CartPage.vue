<template>
    <div class="page-cart">
        <section class="container content-section">
            <h2 class="section-header">CART</h2>
            <div class="cart-row">
                <span class="cart-item cart-header cart-column">ITEM</span>
                <span class="cart-price cart-header cart-column">PRICE</span>
                <span class="cart-quantity cart-header cart-column">QUANTITY</span>
            </div>
            <div class="cart-items">
                
                
            </div>
            <div class="cart-total">
                <button class="btn btn-select" type="button" id="checkall">Select All</button>
                <button class="btn btn-deleteall" type="button" id="deleteall">Delete All</button>
                <strong class="cart-total-title">Total</strong>
                <span class="cart-total-price" id="total-amount">$0</span>
            </div>
            <div class="cart-footer">
                <button class="btn btn-primary btn-purchase" type="button">PURCHASE</button>
            </div>
            
        </section>
    </div>
</template>

<style>
@import "../assets/style.CSS"
</style>


<script>
// import axios from 'axios'
// import CartItem from './CartItem.vue'

export default {
    name: 'CartPage',
    components: {
        // CartItem
    },
    data() {
        return {
            cart: {
                items: []
            }
        }
    },

}
</script>