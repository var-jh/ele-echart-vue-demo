import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Lod from '@/components/lod.vue'
import Table from '@/components/table/table'
// import Tables from '@/components/table/tables'
import echarts from '@/components/echarts/echarts'
// import echart from '@/components/echarts/echart'
import demo from '@/components/demo/demo'
import { request } from 'http';
// import { resolve } from 'path'
// import { request } from 'https'

const echart = r => require.ensure([], () => r(require('@/components/echarts/echart')), 'echart')
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
      // component: Tables
      component: resolve => require(['@/components/table/tables'], resolve)

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
    },
    {
      path: '/jh',
      name: 'Jh',
      // component: Tables
      component: resolve => require(['@/components/jhsj/jh'], resolve)

    },
     {
       path: '/jhs',
       name: 'Jhs',
       // component: Tables
       component: resolve => require(['@/components/jhsj/jhs'], resolve)

     },
       {
         path: '/jh3',
         name: 'Jh3',
         // component: Tables
         component: resolve => require(['@/components/jhsj/jh3'], resolve)

       },
       {
         path: '/toutiao',
         name: 'Toutioa',
         component:resolve => require(['@/toutiao/toutiao'],resolve)
       },
       {
        path: '/pdf',
        name: 'pdf',
        component: resolve => require(['@/components/pdf/pdf'], resolve)
       }
        // {
        //   path: '/pdfzi',
        //   name: 'pdfzi',
        //   component: resolve => require(['@/components/pdf/pdfzi'], resolve)
        // }
  ]
})
