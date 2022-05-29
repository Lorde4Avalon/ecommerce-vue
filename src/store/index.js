import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: {
        items: [],
    },
    userId: '',
    isLoading: false
  },
  mutations: {
   initAddCart(state, cart) {
      state.cart = cart
   },
   setUserId(state, userId) {
      state.userId = userId
   }
  },
  actions: {
    
  },
  modules: {
  }
})