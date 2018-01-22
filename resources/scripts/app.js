import Vue from 'vue'
import VueRouter from 'vue-router'

import VueApp from './VueApp.vue'
import VueSocketIO from 'vue-socket.io';
import VueChatScroll from 'vue-chat-scroll'

Vue.use(VueSocketIO, 'http://localhost:3333');
Vue.use(require('vue-moment'));
Vue.use(VueChatScroll)


const routes = [
  { path: '/', component: VueApp },
]

const router = new VueRouter({
  routes
})
Vue.use(VueRouter)

var app = new Vue({
  el: '#app',
  router
});