<template>
  <div id="app">
    <HeaderNav></HeaderNav>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
const HeaderNav = () => import("./components/content/headernav/HeaderNav");
const Footer = () => import("./components/content/footer/Footer");
import { getHomeData } from "./network/home";
export default {
  components: {
    HeaderNav,
    Footer,
  },
  methods: {
    getdata() {
      getHomeData().then((res) => {
        console.log(res);
      });
    },
  },
  created() {
    this.getdata();
  },
};
</script>

<style>
@import url("./assets/css/base.css");
</style>
