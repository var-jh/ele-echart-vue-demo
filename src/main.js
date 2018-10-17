// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import Echarts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css'
// 引入公共部分
import Top from './components/common/top'
Vue.component('top-view', Top)

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.prototype.$echarts = Echarts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
