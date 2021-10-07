<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-19 22:24:48
 * @LastEditors: xx
 * @LastEditTime: 2021-10-05 18:09:55
-->
<template>
  <!-- 进度条 开始 -->
  <div class="x-loading" v-show="isShow">
    <!-- 当前位置 -->
    <span class="loading-item" :style="`width: ${width}%`"></span>
  </div>
  <!-- 进度条 结束 -->
</template>

<script>
export default {
  name: "XLoading",
  data() {
    return {
      isShow: false,
      width: 5,
      timer: null,
    };
  },
  methods: {
    show() {
      this.width = 5;
      this.isShow = true;
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        if (this.width < 80) {
          this.width = this.width + 8;
        } else {
          clearInterval(this.timer);
        }
      }, 1000);
    },
    showOff() {
      this.width = 100;
      setTimeout(() => {
        this.isShow = false;
        clearInterval(this.timer);
        this.timer = null;
      }, 300);
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  },
};
</script>

<style lang="scss" scoped>
.x-loading {
  position: fixed;
  z-index: 9999;
  left: 0%;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  height: 3px;
  display: flex;
  // 当前进度
  .loading-item {
    transition: all ease-out 0.3s;
    height: 100%;
    background-color: #409eff;
  }
}
</style>
