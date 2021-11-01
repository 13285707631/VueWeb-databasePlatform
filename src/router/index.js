import Vue from 'vue'
import Router from 'vue-router'
import database from '@/components/database'
import datain from '@/components/datain'
import query from '@/components/query'
import re from '@/components/re'
/* import main from '@/components/main' */
Vue.use(Router)

export default new Router({
  routes: [
    /* {
      path: '/',
      name: 'main',
      component: main
    }, */
    {
      path: '/database',
      name: 'database',
      component: database
    },
    {
      path: '/datain',
      name: 'datain',
      component: datain
    },
    {
      path: '/query',
      name: 'query',
      component: query
    },
    {
      path: '/re',
      name: 're',
      component: re
    }
  ]
})
