//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'

//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

//BOOTSTRAP-VUE-3
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import { BootstrapVue3 } from 'bootstrap-vue-3'

createApp(App).use(router).use(BootstrapVue3).mount('#app')
