import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: {
        items: [],
    },
    isAuthenticated: false,
    token: '',
    isLoading: false
  },
  mutations: {
   initAddCart(state, cart) {
      state.cart = cart
   },

  },
  actions: {
  },
  modules: {
  }
})