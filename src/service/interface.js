// 业务接口都写在interface这个文件内
import Vue from 'vue';

// 用户信息
export function getUserInfo(req) {
  return Vue.axios.post(`/slc-portal/user/getUserInfo`, req);
}
// 新闻动态查询
export function listNews(req) {
  return Vue.axios.post(`/slc-portal/article/listNews`, req);
}
// 消息公告分页查询
export function listNotice(req) {
  return Vue.axios.post(`/slc-portal/article/listNotice`, req);
}
// 文章详情
export function articleGet(req) {
  return Vue.axios.get(`/slc-portal/article/get`, {params: req});
}
