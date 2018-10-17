import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Lod from '@/components/lod.vue'
import Table from '@/components/table/table'
import Tables from '@/components/table/tables'
import echarts from '@/components/echarts/echarts'
import echart from '@/components/echarts/echart'
import demo from '@/components/demo/demo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/lod',
      name: 'Lod',
      component: Lod
    },
    {
      path: '/table',
      name: 'Table',
      component: Table

    },
    {
      path: '/tables',
      name: 'Tables',
      component: Tables
    },
    {
      path: '/echarts',
      name: 'echarts',
      component: echarts
    },
    {
      path: '/echart',
      name: 'echart',
      component: echart
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    }
  ]
})
