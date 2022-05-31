<template>
    <div class="column is-3">
        <div class="box">
            <figure class="image mb-4">
                <img :src="'http://202.193.53.235:8080/' + good.pthumbnail">
            </figure>

            <h3 class="is-size-5">{{ good.name }}</h3>
            <p class="is-size-6 has-text-grey">${{ good.price1 }}</p>

            <div class="box-operator">
                <router-link to="/" class="button is-dark mx-3 mt-4 ">View details</router-link>
                <button class="button is-success is-rounded my-4 mx-3 ">Add to cart</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductBox',
    props: {
        product: Object
    },
    data() {
        return {
            good: this.product
        }
    }
}
</script>

<style scoped>
.image {
    margin-top: -1.25rem;
    margin-left: -1.25rem;
    margin-right: -1.25rem;
} 

.box-operator {
    margin-left: -1.25rem;
    margin-right: -1.25rem;
}
.box-operator .button {
    /* padding: 0 8px; */
}
</style>