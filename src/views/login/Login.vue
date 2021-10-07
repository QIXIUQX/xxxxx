<template>
  <div class="login">
    <!-- 登陆盒子 -->
    <div class="login-box">
      <!-- 标题 -->
      <XStoreyTitle>用户登录（目前仅支持管理员账号）</XStoreyTitle>
      <!-- 输入区域 开始 -->
      <form>
        <div class="u-username">
          <span> 请输入账号： </span>
          <XInput
            class="input"
            placeholder="请输入用户名"
            v-model="username"
            type="text"
          ></XInput>
        </div>
        <div class="u-username">
          <span>请输入密码：</span>
          <XInput
            class="input"
            placeholder="请输入密码"
            v-model="password"
            type="password"
            show-password
          ></XInput>
        </div>
      </form>
      <!-- 输入区域 结束 -->
      <!-- 提交 -->
      <XButton @click="handleLoginBtnClick" :disabled="isLogin">登录</XButton>
    </div>
  </div>
</template>

<script>
import { login } from "@/network/login";

import mapgetters from "@/mixin/mapgetters";
import { saveStorage } from "@/utils/localstorage";
export default {
  mixins: [mapgetters],

  name: "",

  data() {
    return {
      username: "",
      password: "",
      isLogin: false,
    };
  },

  methods: {
    handleLoginBtnClick() {
      if (this.username.trim() == "") {
        this.$notify({
          title: "登录提示",
          message: "用户名不能为空",
          type: "info",
          duration: 4000,
        });
      }
      if (this.password.trim() == "") {
        this.$notify({
          title: "登录提示",
          message: "密码不能为空",
          type: "info",
          duration: 4000,
        });
      }
      login(this.username, this.password).then((res) => {
        this.isLogin = true;
        let t = setTimeout(() => {
          this.isLogin = false;
          clearTimeout(t);
          t = null;
        }, 3000);
        if (res.data.code == 0) {
          this.$notify({
            title: "登录成功",
            message: "即将前往编辑页面",
            type: "success",
            duration: 3000,
          });
          saveStorage("token", res.data.token);
          setTimeout(() => {
            this.$router.push("/edit").catch((err) => err);
          }, 3000);
        } else if (res.data.code == 1) {
          this.$notify({
            title: "登录失败",
            message: "用户名或密码错误",
            type: "error",
            duration: 3000,
          });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  padding: 10px;
  display: grid;
  justify-content: center;
  align-content: center;
  // 登陆盒子
  .login-box {
    margin-top: 100px;
    min-width: 400px;
    height: max-content;
    // 用户名
    .u-username {
      display: flex;
      margin: 10px auto 20px;
      align-items: center;
      // 输入框
      .input {
        flex: 1;
      }
    }
  }
}
</style>
