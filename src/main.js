// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import Echarts from 'echarts'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import Qs from 'qs'
import vuex from "vuex"
// 引入公共部分
import Top from './components/common/top'
Vue.component('top-view', Top)

// import mdContract from "./components/pdf/pdfzi.vue"
// Vue.component('md-view',mdContract)

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(vuex)

Vue.prototype.$echarts = Echarts
Vue.prototype.axios = axios
Vue.prototype.qs = Qs
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
