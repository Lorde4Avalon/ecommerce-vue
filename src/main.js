import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

createApp(App).use(store).use(router, axios).mount('#app')
