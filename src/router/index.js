import Vue from 'vue'
import Router from 'vue-router'
const index = () => import('@/pages/index');
const onlineCredit = () => import('@/pages/onlineCredit');
const riskControl = () => import('@/pages/riskControl');
const monitor = () => import('@/pages/monitor');
const operate = () => import('@/pages/operate');
const logistics = () => import('@/pages/logistics');
const infoShare = () => import('@/pages/infoShare');
const newsDetail = () => import('@/pages/newsDetail');


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    }, {
      path: '/index',
      name: 'index',
      component: index,
    }, {
      path: '/onlineCredit',
      name: 'onlineCredit',
      component: onlineCredit,
    }, {
      path: '/riskControl',
      name: 'riskControl',
      component: riskControl,
    }, {
      path: '/monitor',
      name: 'monitor',
      component: monitor,
    }, {
      path: '/operate',
      name: 'operate',
      component: operate,
    }, {
      path: '/logistics',
      name: 'logistics',
      component: logistics,
    }, {
      path: '/infoShare',
      name: 'infoShare',
      component: infoShare,
    }, {
      path: '/newsDetail',
      name: 'newsDetail',
      component: newsDetail,
    },
  ],
  mode: 'hash',
})
