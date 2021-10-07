<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-08 12:48:40
 * @LastEditors: xx
 * @LastEditTime: 2021-10-05 18:14:26
-->
<template>
  <div class="x-ui-collapse-item">
    <!-- 标题 开始 -->
    <div class="x-ui-collapse-item-title" @click="handleCollapseItemClick">
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <!-- 标题 结束 -->
    <!-- 内容 开始 -->
    <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <div class="x-ui-collapse-item-wrap" v-show="hasShow">
        <div class="item-content">
          <slot></slot>
        </div>
      </div>
    </transition>
    <!-- 内容 结束 -->
  </div>
</template>

<script>
export default {
  name: "XCollapseItem",
  props: {
    title: {
      type: String,
      default: "",
    },
    name: {
      type: [String, Number],
      default: "",
    },
  },
  inject: ["collapse"],
  computed: {
    hasShow() {
      return this.collapse.value.indexOf(this.name) > -1;
    },
  },
  methods: {
    handleCollapseItemClick() {
      this.collapse.$emit("itemChange", this.name);
    },
    beforeEnter(el) {
      el.style.height = 0;
    },
    enter(el) {
      el.offsetTop;
      el.style.height = el.scrollHeight + "px";
      el.style.transition = `all ease .3s`;
    },
    leave(el) {
      el.style.height = 0;
      el.style.transition = `all ease .3s`;
    },
  },
};
</script>

<style lang="scss" scoped>
.x-ui-collapse-item {
  // 标题
  .x-ui-collapse-item-title {
    display: flex;
    align-items: center;
    height: 48px;
    line-height: 48px;
    background-color: #fff;
    color: #303133;
    cursor: pointer;
    // border-bottom: 1px solid #ebeef5;
    font-size: 15px;
    font-weight: 500;
    transition: border-bottom-color 0.3s;
    outline: none;
  }
  // 内容
  .x-ui-collapse-item-wrap {
    background-color: #fff;
    overflow: hidden;
    .item-content {
      font-size: 16px;
      color: #303133;
      line-height: 1.769230769230769;
    }
  }
}
</style>
