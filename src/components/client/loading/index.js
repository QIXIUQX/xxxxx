/*
 * @Description:
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-19 22:36:28
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-19 22:46:39
 */
import Loading from "./Loading.vue";
const obj = {};

obj.install = function(Vue) {
  const loadingContrustor = Vue.extend(Loading);
  const loading = new loadingContrustor();
  loading.$mount(document.createElement("div"));
  document.body.appendChild(loading.$el);
  Vue.prototype.$loading = loading;
};
export default obj;
