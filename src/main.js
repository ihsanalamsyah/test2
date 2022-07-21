import Vue from 'vue'
import App from './App.vue'
import store from './store'


Vue.config.productionTip = false


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


import Vue2Filters from 'vue2-filters'

Vue.use(Vue2Filters)


new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
