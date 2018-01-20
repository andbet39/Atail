import Vue from 'vue'
import VueRouter from 'vue-router'

import VueApp from './VueApp.vue'

const routes = [
  { path: '/', component: VueApp },
]

const router = new VueRouter({
  routes
})
Vue.use(VueRouter)

var app = new Vue({
  el: '#app',
  router,
  components: {
  }