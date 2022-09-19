import Vue from 'vue'
import Router from 'vue-router'
const index = () => import('@/pages/index');
const news = () => import('@/pages/news');
const newsDetail = () => import('@/pages/newsDetail');
const notice = () => import('@/pages/notice');


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    }, {
      path: '/news',
      name: 'news',
      component: news,
    }, {
      path: '/newsDetail',
      name: 'newsDetail',
      component: newsDetail,
    }, {
      path: '/notice',
      name: 'notice',
      component: notice,
    },
  ],
  mode: 'hash',
})
