import Vue from 'vue'
import Vuetify from 'vuetify'

import App from './App.vue'
import theme from './js/theme.js'

Vue.use(Vuetify, {
  theme
})

let app = new Vue({
  render: h => h(App),
  mounted: function() {
    console.log('Instance montée')
  }
}).$mount('#app')
