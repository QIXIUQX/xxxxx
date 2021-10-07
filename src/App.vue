<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-07 13:07:56
 * @LastEditors: xx
 * @LastEditTime: 2021-10-05 18:16:28
-->
<template>
  <div id="app">
    <!-- 头部 开始 -->
    <Header v-if="$route.meta.isHeader"></Header>
    <!-- 头部 结束 -->

    <!-- 内容区域 开始 -->
    <article class="app-container">
      <!-- 左侧导航 开始 -->
      <section class="sidebar">
        <SideBar></SideBar>
      </section>
      <!-- 左侧导航 结束 -->

      <!-- 右侧内容区域 开始 -->
      <section class="main-container">
        <router-view></router-view>
      </section>
      <!-- 右侧内容区域 结束 -->
    </article>
    <!-- 内容区域 结束 -->
  </div>
</template>
<script>
const Header = () => import("@/components/client/header/Header.vue");
const SideBar = () => import("@/views/sidebar/SideBar.vue");
import * as type from "./store/mutationsType";
export default {
  name: "App",
  components: {
    Header,
    SideBar,
  },
  methods: {},
  created() {
    this.$store.dispatch("getTags");
    this.$store.commit(type.INIT_STORE);
  },
};
</script>

<style lang="scss">
#app {
  height: 100vh;
  min-height: 500px;
  // 内容
  .app-container {
    position: absolute;
    // height: calc(100vh - 64px);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    // 左侧导航
    .sidebar {
      position: fixed;
      left: 0;
      top: 64px;
      bottom: 0;
      min-width: 300px;
      width: 300px;
      height: calc(100vh - 64px);
    }
    // 内容盒子
    .main-container {
      margin: 64px 0 0 300px;
      flex: 1;
      height: calc(100% - 64px);
      overflow-y: scroll;
    }
  }
}
</style>
