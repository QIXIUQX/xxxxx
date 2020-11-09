<template>
  <header class="header">
    <div class="wrapper">
      <div class="header-logo">
        <a
          href="javascript:;"
          @click="
            () => {
              this.$router.push('/home');
            }
          "
        >
          <img src="@/assets/images/logo/login-pic.png" alt="" />
        </a>
      </div>
      <div class="header-nav">
        <a href="https://github.com/QIXIUQX">我的git</a>
        <a href="https://blog.csdn.net/Y_xxxxx?spm=1010.2135.3001.5113"
          >我的csdn</a
        >
      </div>
      <div class="header-user-info" v-show="false">
        <div class="header-login">
          <a
            href="javascript:;"
            @click="
              () => {
                this.$router.push('/login');
              }
            "
            >登录</a
          >
          <a
            href="javascript:;"
            @click="
              () => {
                this.$router.push('/register');
              }
            "
            >注册</a
          >
        </div>
        <!-- <div class="header-profile"></div> -->
      </div>
    </div>
  </header>
</template>
<script>
//import  from "";
export default {
  name: "",
  data() {
    return {};
  },
  components: {},
};
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  height: 60px;
  background-color: #24292e;
  .wrapper {
    display: flex;
    flex-direction: row;

    .header-logo {
      width: 150px;
      height: 60px;
      a {
        display: block;
        width: 150px;
        height: 60px;
        padding: 0 0 0 45px;
        img {
          width: 60px;
          height: 60px;
        }
      }
    }
    .header-nav {
      flex: 1;
      height: 60px;
      a {
        display: block;
        float: left;
        padding: 0 15px;
        height: 60px;
        line-height: 60px;
        font-size: 18px;
        color: #ffffff;
        transition: all 0.2s;
        &:hover {
          background-color: #024ea4;
        }
      }
    }
    .header-user-info {
      width: 300px;
      height: 60px;
      .header-login,
      .header-profile {
        width: 300px;
        height: 60px;
      }
      .header-login {
        a {
          padding: 0 10px;
          float: right;
          display: block;
          font-size: 16px;
          line-height: 60px;
          color: #ffffff;
        }
      }
      // .header-profile {
      // }
    }
  }
}
</style>