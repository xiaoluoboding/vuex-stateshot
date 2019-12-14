import Vue from 'vue'
import App from './App.vue'
import store from './store'

import VueSmartWidget from 'vue-smart-widget'

Vue.use(VueSmartWidget)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
