// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import store from './vuex/store';

//添加fast click移除移动端点击延迟
const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
