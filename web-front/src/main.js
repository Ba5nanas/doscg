import Vue from 'vue'
import VueRouter from 'vue-router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import routes from '@/routes.js'

require('@/assets/styles/main.css');

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  routes:routes
})

Vue.config.productionTip = false

new Vue({
  router,
  el: '#app',
  render: h => h(App),
}).$mount('#app')
