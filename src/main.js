/*
 * @Description:
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-07 13:07:56
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-19 22:55:54
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/scss/index.scss";

import Loading from "./components/client/loading/index";
Vue.use(Loading);

import XUI from "xxxxx-ui";
import "xxxxx-ui/dist/xxxxx-ui.css";
Vue.use(XUI);

import VueLazyLoad from "vue-lazyload";

const loadimage = require("./assets/images/loading/loading.png");
const errorimage = require("./assets/images/loading/loading.png");

Vue.use(VueLazyLoad, {
  loading: loadimage,
  error: errorimage,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
