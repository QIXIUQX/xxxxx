<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-07 13:39:48
 * @LastEditors: xx
 * @LastEditTime: 2021-10-05 18:08:36
-->
<template>
  <header class="header">
    <!-- logo Start -->
    <section class="logo" @click="handleLogoClick">
      <h1>
        <img src="~assets/images/logo/logo.png" alt="" />
        <a href="javascript:void(0)">XXXXX</a>
      </h1>
    </section>
    <!-- logo End -->
    <!-- 右侧盒子 开始 -->
    <div class="right-box right-box-common">
      <!-- 搜索 Start -->
      <div class="search right-box-common" @click="handleSearchClick">
        <!-- 图标 -->
        <i class="iconfont icon-search"></i>
        <!-- 提示文字 -->
        <span>
          站内搜索
        </span>
      </div>
      <!-- 搜索 End -->

      <!-- Account Start -->
      <div class="accounts">
        <!-- 档案 开始 -->
        <section class="profile right-box-common" v-if="userInfo.length > 0">
          <div @click="handleEdit" class="editor">
            添加新内容
          </div>
          <div class="header-info">欢迎 {{ userInfo[0].nickName }} 同学！</div>
        </section>
        <!-- 档案 结束 -->

        <!-- 登陆 -->
        <section class="login right-box-common" @click="handleLogin" v-else>
          登录
        </section>
        <!-- Account End -->
      </div>
    </div>
    <!-- 右侧盒子 结束 -->
  </header>
</template>

<script>
import mapgetters from "@/mixin/mapgetters";
export default {
  mixins: [mapgetters],
  name: "Header",
  methods: {
    /**
     * 搜索按钮被点击
     */
    handleSearchClick() {
      this.$router.push("/search").catch((err) => err);
    },
    handleLogoClick() {
      this.$router.push("/index").catch((err) => err);
    },
    handleEdit() {
      this.$router.push("/edit").catch((err) => err);
    },
    handleLogin() {
      this.$router.push("/login").catch((err) => err);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 64px;
  background-color: #24292e;
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  // logo
  .logo {
    width: 200px;
    height: 100%;
    text-align: center;
    line-height: 64px;
    cursor: pointer;
    h1 {
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        padding-left: 10px;
        color: #fff;
      }
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
  }
  // 右侧盒子
  .right-box {
    display: flex;
    height: 100%;
    align-items: center;
    // 搜索
    .search {
      // width: 50px;
      display: flex;
      cursor: pointer;
      i {
        margin-right: 10px;
        transition: all 0.3s ease;
      }
      span {
        margin-right: 50px;
        transition: all 0.3s ease;
      }
      &:hover i,
      &:hover span {
        color: #ff3399;
      }
    }
    .accounts {
      // 档案
      .profile {
        margin-right: 100px;
        display: flex;

        .editor {
          margin: 0 20px;
        }
      }
      // 登陆
      .login {
        margin-right: 50px;
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover {
          color: #ff3399;
        }
      }
    }
    .right-box-common {
      height: 100%;
      cursor: pointer;
      line-height: 64px;
    }
  }
}
</style>
