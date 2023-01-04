// 业务接口都写在interface这个文件内
import Vue from 'vue';

// 新增物流供应商
export function supplierSave(req) {
  return Vue.axios.post(``, req);
}// 查询物流供应商
export function supplierPage(req) {
  return Vue.axios.post(``, req);
}
// 查询咨询栏目
export function newsTypeList(req) {
  return Vue.axios.post(``, req);
}
// 查询咨询栏目详情
export function newsDetailList(req) {
  return Vue.axios.post(``, req);
}
// 查询字典
export function getParamNames(req) {
  return Vue.axios.get(``, {params: req, });
}
// 获取登录地址
export function userLogin(req) {
  return Vue.axios.get(``, {params: req, });
}
// 文章详情
export function articleGet(req) {
  return Vue.axios.post(`/xxx/front/newsDetail/queryById/${req}`);
}


// 用户信息
export function getUserInfo(req) {
  return Vue.axios.post(``, req);
}
// 新闻动态查询
export function listNews(req) {
  return Vue.axios.post(`/xxx/article/listNews`, req);
}
// 消息公告分页查询
export function listNotice(req) {
  return Vue.axios.post(`/xxx/article/listNotice`, req);
}

