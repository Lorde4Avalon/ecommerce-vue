import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: {
        items: [],
    },
    user: {
        name: '',
        userId: '',
    },
    order: [],
    isLoading: false
  },
  mutations: {
   initAddCart(state, cart) {
      state.cart = cart
   },
   setUserId(state, userId) {
      state.user.userId = userId
   },
   setUserName(state, username) {
      state.user.name = username
   }
  },
  actions: {
    
  },
  modules: {
  }
})