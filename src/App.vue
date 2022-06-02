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
          <!-- <router-link to="/laptop" class="navbar-item">Laptop</router-link>
          <router-link to="/pc" class="navbar-item">PC</router-link> -->

          <div class="navbar-item">
            <div class="buttons">

              <router-link to="/login" class="button is-white" v-if="!user.userId">Log in</router-link>

              <div class="user" v-else>
                <div class="dropdown is-right mx-3 is-active">
                  <div class="dropdown-trigger">
                    <button class="button is-white" aria-haspopup="true" aria-controls="dropdown-menu">
                      <span class="icon">
                        <i class="fas fa-user"></i>
                      </span>
                      <span>{{ user.name }}</span>
                      <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                      </span>
                    </button>
                  </div>
                  <div class="dropdown-menu" id="dropdown-menu" role="menu">
                    <div class="dropdown-content">
                      <router-link class="dropdown-item" to="/order">
                        <span class="icon">
                          <i class="fas fa-money-bill"></i>
                        </span>
                        <span>Orders</span>
                      </router-link>
                      <a class="dropdown-item" @click="logout()">
                        <span class="icon">
                          <i class="fas fa-sign-out-alt"></i>
                        </span>
                        <span>Log out</span>
                      </a>
                    </div>
                  </div>
                  
                </div>
              </div>

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

<style lang="scss">
  .dropdown-trigger {
    display: flex;
    align-items: center;
  }
  
  .dropdown-menu {
    border-radius: 0;
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    padding-bottom: 4px;
  }
</style>

<script>

export default {
  data() {
    return {
      showMobileMenu: false,
      cart: {
        items: []
      },
      user: this.$store.state.user,
    }
  },
  mounted() {
    this.cart = this.$store.state.cart
  },
  methods: {
    logout() {
      // 
      this.$store.user = '';
      this.user = '';
    },
    triggeDropdown() {
      document.querySelector('.dropdown-menu').style.visibility = 'visible'
    }
  },
  watch: {
    storeCart() {
      this.cart = this.$store.state.cart
    },
    storeUser() {
      this.user = this.$store.state.user
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
    },
    storeUser() {
      return this.$store.state.user
    }
  }
}
</script>