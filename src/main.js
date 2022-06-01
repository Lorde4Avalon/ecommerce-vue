import { createApp } from 'vue'
import App from './App.vue'

require('@/assets/main.scss');

import router from './routers'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'http://172.19.215.48:8080/'

createApp(App).use(store).use(router, axios).mount('#app')
