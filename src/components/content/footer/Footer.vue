<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="tips">
        网站资源都收集于网络，使用时候请保管好您的私人信息，避免泄露
      </div>
      <div class="help">
        如有遇到链接失效的，请发送邮件至：<a href="">qingwu13950520@163.com</a>
      </div>
    </div>
  </footer>
</template>
<script>
//import  from "";
// const  =()=>import("components/common/footer/Footer")
export default {
  name: "",
  data() {
    return {};
  },
  components: {},
};
</script>
<style lang="less" scoped>
.footer {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 70px;
  background-color: #fff;
  .tips {
    width: 100%;
    height: 45px;
    line-height: 45px;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
  }
  .help {
    width: 100%;
    height: 25px;
    line-height: 10px;
    font-size: 14px;
    text-align: center;
  }
}
</style>