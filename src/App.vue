<template>
  <div id="wrapper">
    <nav class="navbar is-dark">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img src="logo.png" alt="" class=" mx-1">
          <span class="has-text-grey">e</span><strong>5YouWant</strong>
        </router-link>

        <!-- burger menu that shows only on touch devices -->
        <a class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu"
          @click="showMobileMenu = !showMobileMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>

      </div>

      <div class="navbar-menu" id="navbar-menu" v-bind:class="{ 'is-active': showMobileMenu }">
        <div class="navbar-start">
          <div class="navbar-item">
            <form method="get" action="/search">
              <div class="field has-addons">
                <div class="control">
                  <input type="text" class="input" placeholder="What are you looking for?" name="query">
                </div>

                <div class="control">
                  <button class="button is-link is-light">
                    <span class="icon" style="color: gray">
                      <i class="fas fa-search"></i>
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>


        <div class="navbar-end">
          <router-link to="/laptop" class="navbar-item">Laptop</router-link>
          <router-link to="/pc" class="navbar-item">PC</router-link>

          <div class="navbar-item">
            <div class="buttons">

              <router-link to="/login" class="button is-white">Log in</router-link>

              <router-link to="/cart" class="button is-success is-light">
                <span class="icon"><i class="fas fa-shopping-cart"></i></span>
                <span>Cart ({{ cartTotalLen }})</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>


    </nav>

    <section class="section">
      <router-view />
    </section>

    <footer class="footer">
      <p class="has-text-centered">Copyright (c) 2022</p>
    </footer>
  </div>
</template>

<script>

export default {
  data() {
    return {
      showMobileMenu: false,
      cart: {
        items: []
      },
    }
  },
  mounted() {
    this.cart = this.$store.state.cart
  },
  watch: {
    storeCart() {
      this.cart = this.$store.state.cart
    }
  },
  computed: {
    cartTotalLen() {
      return this.cart.items.reduce((acc, curVal) => {
        return acc += parseInt(curVal.num)
      }, 0)
    },
    storeCart() {
      return this.$store.state.cart
    }
  }
}
</script>