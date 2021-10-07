<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-07 14:09:07
 * @LastEditors: xx
 * @LastEditTime: 2021-09-29 22:32:03
-->
<template>
  <div class="sidebar">
    <!-- 左侧导航 -->
    <Collapse :value="activeName">
      <CollapseItem v-for="(item, i) in categoryList" :key="i" :name="i">
        <!-- 标题 -->
        <a slot="title" href="javascript:;" class="category-item">
          <i :class="`iconfont ${item.categoryIcon}`"></i>
          <span>{{ item.categoryTitle }}</span>
          <i
            class="iconfont icon-arrow-right  icon-right"
            :class="{
              rotate: showMenu(i),
            }"
          ></i>
        </a>
        <!-- 二级菜单 -->
        <a
          href="javascript:;"
          v-for="(secondItem, idx) in item.secondCategory"
          :key="idx"
          class="second-cate"
          @click="handleSecondClick(secondItem)"
        >
          <span> {{ secondItem.title }}</span>
        </a>
      </CollapseItem>
    </Collapse>
  </div>
</template>

<script>
const Collapse = () => import("@/components/common/collapse/Collapse");
const CollapseItem = () => import("@/components/common/collapse/CollapseItem");
import * as type from "@/store/mutationsType";

import mapgetters from "@/mixin/mapgetters";
export default {
  mixins: [mapgetters],
  name: "SideBar",
  computed: {
    // 显示隐藏二级菜单
    showMenu(i) {
      return function(i) {
        if (this.activeName.indexOf(i) > -1) {
          return true;
        } else {
          return false;
        }
      };
    },
  },
  data() {
    return {
      menuList: [],
      category: [],
      activeName: [],
    };
  },
  components: {
    Collapse,
    CollapseItem,
  },
  methods: {
    // 获取分类信息
    getCategoryData() {
      this.$store.dispatch("getCategory");
    },
    // 处理二级目录点击
    handleSecondClick(item) {
      this.$router.push(`/detail/${item.id}`).catch((err) => err);
      this.$store.commit(type.SET_CURRENT_POSITION, item.title);
    },
  },
  created() {
    this.getCategoryData(); //分类信息
  },
};
</script>

<style lang="scss" scoped>
// 左侧导航
.sidebar {
  width: 100%;
  height: calc(100vh - 128px);
  overflow-y: scroll;
  // 一级菜单
  .category-item {
    position: relative;
    padding-left: 30px;
    display: block;
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    &:hover {
      color: #ff3399;
    }
    span {
      margin-left: 5px;
    }
    // 右侧小箭头
    .icon-right {
      position: absolute;
      right: 20px;
      transition: all 0.2s linear;
    }
  }
  // 二级菜单
  .second-cate {
    display: block;
    background-color: #eee;
    padding-left: 60px;
    height: 40px;
    line-height: 40px;
    color: #515c6b;
    &:hover {
      color: #ff3399;
    }
  }
}
</style>
