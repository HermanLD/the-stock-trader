import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

// *Global Reuest Config: setting base URL from CoinDesk API
axios.defaults.baseURL = 'https://api.coindesk.com/v1/bpi'

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
})
