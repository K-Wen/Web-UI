import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

Vue.use(ElementUI)

import axios from 'axios'
axios.defaults.withCredentials = true
Vue.prototype.$http = axios
// Object.assign(Vue, {$http: axios})

Array.prototype.indexOf = function(val) {
   for (let i = 0; i < this.length; i++) {
       if (this[i] == val) return i;
   }
   return -1;
}

new Vue({
  el: '#app',
  render: h => h(App)
})
