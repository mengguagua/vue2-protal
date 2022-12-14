// 全局拦截器，全局方法等逻辑
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { Message, MessageBox } from 'element-ui';

Vue.use(VueAxios, axios);

const Api = {};
Api.install = () => {
  let apiCancelTokens = []; // 存放请求cancelToken

  // request请求拦截处理
  Vue.axios.interceptors.request.use(
    config => {
      if (config.method === 'get') {
        config.params = Object.assign({ t: Date.now() }, config.params);
      }
      config.headers = {
        'X-Requested-With': 'XMLHttpRequest',
        'redirectUrl': location.href
      };
      return config;
    },
    error => Promise.reject(error)
  );

  // response响应拦截处理
  Vue.axios.interceptors.response.use(
    res => {
      if (res.headers && res.headers['permission-status'] == 1) {
        localStorage.setItem('loginUrl', res.headers['redirect-url']);
        localStorage.removeItem('qzUser');
      }
      // 请求成功，但是操作不成功时显示后端返回的错误信息
      if (res.data.status != '0' && res.config.url !== '/slc-portal/user/getUserInfo') {
        // console.log('res', res)
        Message({
          message: res.data.msg || '网络拥堵，请稍后重试',
          type: 'error',
          duration: 2000
        });
        return Promise.reject(res.data);
      }
      return res.data.data;
    },
    err => {
      // debugger;
      Message({
        message: `${err.response.data.msg || '服务访问失败'}`,
        type: 'error'
      });
      return Promise.reject(err);
    }
  );

};

export default Api;
