/*
 * @Description:
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-07 13:14:04
 * @LastEditors: xx
 * @LastEditTime: 2021-10-07 22:00:35
 */
import Axios from "axios";
import Vue from "vue";

import { getStorage } from "../utils/localstorage";

let cancelRequestArr = [];
let CancelToken = Axios.CancelToken;

let cancelRequestFn = (config) => {
  cancelRequestArr.forEach((item, index) => {
    if (config) {
      if (item.UrlPath === config.url) {
        item.Cancel(); // 取消请求
        cancelRequestArr.splice(index, 1); // 移除当前请求记录
      }
    } else {
      item.Cancel(); // 取消请求
      cancelRequestArr.splice(index, 1); // 移除当前请求记录
    }
  });
};

export function requestServer(config) {
  const instance = Axios.create({
    // baseURL: "http://localhost:3000",
    // baseURL: "/api",
    // baseURL: "http://120.55.90.34:5000",
    //跨域代理
    baseURL: "/devapiserver",
    timeout: 1000 * 10,
    // withCredentials: true,
  });
  instance.interceptors.request.use(
    (config) => {
      Vue.prototype.$loading.show();
      cancelRequestFn(config);
      config.cancelToken = new CancelToken((res) => {
        cancelRequestArr.push({ UrlPath: config.url, Cancel: res });
      });
      let token = getStorage("token");
      if (token != "") {
        config.headers.authorization = `Basic ${token}`;
      }
      return config;
    },
    (err) => {
      Vue.prototype.$loading.showOff();
      return err;
    }
  );
  instance.interceptors.response.use(
    (res) => {
      Vue.prototype.$loading.showOff();
      cancelRequestFn(res.config);
      return res.data;
    },
    (err) => {
      Vue.prototype.$loading.showOff();
      if (err.message !== undefined) {
        //如果是被取消的请求则不显示错误提示
        Vue.prototype.$notify({
          title: "请求失败",
          message: `网络请求失败`,
          type: "error",
          duration: 6000,
        });
      }
      if (Axios.isCancel(err)) {
        // console.log("request cancel ", JSON.stringify(err));
        return new Promise(() => {});
      }
      return err;
    }
  );
  return instance(config);
}
