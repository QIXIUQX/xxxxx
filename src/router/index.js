/*
 * @Description:
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-07 13:09:00
 * @LastEditors: xx
 * @LastEditTime: 2021-10-02 16:33:27
 */
import Vue from "vue";
import VueRouter from "vue-router";
import { edit } from "./edit";
Vue.use(VueRouter);
const Home = () => import("../views/home/Home.vue");
const Detail = () => import("../views/detail/Detail.vue");
const Info = () => import("../views/info/Info.vue");

const Login = () => import("../views/login/Login.vue");
const Search = () => import("../views/search/Search.vue");

const routes = [
  { path: "/", redirect: "/index" },
  {
    path: "/index",
    component: Home,
    meta: {
      title: "XXXXX的储物间",
      isHeader: true,
      isToken: false,
    },
  },
  ...edit,
  {
    path: "/detail/:id",
    component: Detail,
    meta: {
      title: "XXXXX的储物间",
      isHeader: true,
      isToken: false,
    },
  },
  {
    path: "/info",
    name: "Info",
    component: Info,
    meta: {
      title: "详情页 - XXXXX的储物间",
      isHeader: true,
      isToken: false,
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      title: "登录 - XXXXX的储物间",
      isHeader: true,
      isToken: false,
    },
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
    meta: {
      title: "按标签查看 - XXXXX的储物间",
      isHeader: true,
      isToken: false,
    },
  },
  {
    path: "*",
    redirect: "/index",
  },
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  let matched = to.matched;
  matched.forEach((item) => {
    if (item.path === to.fullPath) {
      document.title = item.meta.title;
    }
  });
  next();
});

export default router;
