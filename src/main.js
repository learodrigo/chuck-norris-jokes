import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

window.axios = require('axios')

createApp(App).use(router).mount('#app')
