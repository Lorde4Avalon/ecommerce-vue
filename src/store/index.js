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
    goods: [],
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
    saveUserInfo(userStore) {
      if (localStorage.getItem('user')) {
        localStorage.removeItem('user')
      }
      localStorage.setItem('user', JSON.stringify(userStore))
    },
    removeUserInfo() {
      let userStore = JSON.parse(localStorage.getItem('user'))
      userStore.state.user.userId = ''
      userStore.state.user.name = ''
      localStorage.removeItem('user')
      localStorage.setItem('user', JSON.stringify(userStore))
    },
  },
  getters: {
    getUserInfo() {
      return JSON.parse(localStorage.getItem('user'))
    }
  },
  modules: {
  }
})