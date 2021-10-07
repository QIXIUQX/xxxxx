<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-07 16:33:45
 * @LastEditors: xx
 * @LastEditTime: 2021-10-05 18:17:58
-->
<template>
  <div class="addcategory">
    <div class="addcategory-container">
      <!-- 现有分类 开始 -->
      <div class="category-list">
        <XStoreyTitle>
          <span class="cur-category"> 现有分类：</span>
        </XStoreyTitle>
        <UList>
          <UListItem
            v-for="(item, i) in categoryList"
            :key="i"
            class="cur-category-item"
          >
            {{ item.categoryTitle }}
          </UListItem>
        </UList>
      </div>
      <!-- 现有分类 结束 -->
      <!-- 编辑 开始 -->
      <div class="category-editor">
        <div class="category-title">
          <XInput
            class="common-input-top"
            placeholder="请输入一级分类名称"
            v-model="categoryTitle"
          ></XInput>
          <XInput
            class="common-input-top common-input-bottom"
            placeholder="请输入一级分类图标，如：icon-add"
            v-model="categoryIcon"
          ></XInput>
          <CommonHelp>
            <a href="https://www.iconfont.cn/" target="_black"
              >可以在iconfont选择需要的ICON,将他添加到项目中</a
            >
          </CommonHelp>
        </div>
        <XButton
          @click="handleBtnClick"
          class="common-btn-right common-btn-top "
          >添加分类</XButton
        >
      </div>
      <!-- 编辑 结束 -->
    </div>
  </div>
</template>

<script>
const UList = () => import("@/components/client/u-list/UList.vue");
const UListItem = () => import("@/components/client/u-list/UListItem");
const CommonHelp = () =>
  import("@/components/client/common-help/CommonHelp.vue");

import { newcategory } from "@/network/category";

import mapgetters from "@/mixin/mapgetters";
export default {
  mixins: [mapgetters],
  name: "",
  data() {
    return {
      categoryTitle: "",
      categoryIcon: "",
      result: "",
      timer: null,
    };
  },

  components: { UList, UListItem, CommonHelp },
  methods: {
    handleBtnClick() {
      if (this.categoryTitle.trim() === "") {
        this.$notify({
          title: "添加失败",
          message: "请输入分类名称后在进行添加！",
          type: "error",
          duration: 4000,
        });
        return;
      }
      if (!JSON.stringify(this.categoryList).includes(this.categoryTitle)) {
        newcategory(this.categoryTitle, this.categoryIcon).then((res) => {
          this.$notify({
            title: "添加成功",
            message: `${res.message}`,
            type: "success",
            duration: 3000,
          });
          this.categoryTitle = "";
          this.$store.dispatch("getCategory");
        });
      } else {
        this.$notify({
          title: "添加失败",
          message: `该分类已存在`,
          type: "warning",
          duration: 3000,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.addcategory {
  padding: 10px 50px 10px 10px;
  width: 100%;
  height: 100%;
  // 编辑区域
  .addcategory-container {
    display: flex;
    // 现有分类
    .category-list {
      width: 200px;
      border: 1px solid #eee;
      height: max-content;
      .cur-category {
        font-size: 16px;
      }
      .cur-category-item {
        padding: 5px 10px 2px 30px;
        @include oneEllipsis;
      }
    }
    // 编辑区域
    .category-editor {
      margin-left: 10px;
      flex: 1;
      .category-title {
        width: 100%;
      }
    }
  }
}
</style>
