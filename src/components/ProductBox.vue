<template>
    <div class="column is-3">
        <div class="box">
            <figure class="image mb-4">
                <img :src="'http://202.193.53.235:8080/' + good.pthumbnail">
            </figure>

            <h3 class="is-size-4">{{ good.name }}</h3>
            <p class="is-size-6 has-text-grey">${{ good.price1 }}</p>

            <!-- <router-link v-bind:to="good.get_absolute_url" class="button is-dark mt-4">View details</router-link> -->
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
</style>