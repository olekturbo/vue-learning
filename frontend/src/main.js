import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import axios from 'axios'

export const MyApiClient = axios.create({
  baseURL: 'http://szkolenia.vh/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

Vue.config.productionTip = false
Vue.prototype.$http = axios;

new Vue({
  render: h => h(App),
}).$mount('#app')
