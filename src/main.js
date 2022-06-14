import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import slickCarousel from 'vue-slick-carousel'

Vue.config.productionTip = false

import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(slickCarousel)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  // router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
