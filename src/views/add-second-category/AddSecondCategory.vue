<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-07 16:37:17
 * @LastEditors: xx
 * @LastEditTime: 2021-10-05 18:32:54
-->
<template>
  <div class="add-second-category">
    <div class="link-item">
      <!-- 一级分类 开始 -->
      <XDivider>请选择一级分类</XDivider>
      <div class="item-category">
        <XTag
          v-for="(item, i) in categoryList"
          :key="i"
          class="tag-common"
          :type="curId == item.categoryId ? 'success' : 'primary'"
          @click="handleCategoryCheck(item)"
          >{{ item.categoryTitle }}</XTag
        >
      </div>
      <!-- 一级分类 结束 -->

      <!-- 二级分类 开始 -->
      <XDivider>二级分类标题</XDivider>

      <XInput
        class="common-input-top"
        placeholder="请输入二级分类标题"
        v-model="title"
      ></XInput>
      <XButton
        @click="handleAddSecondCate"
        class="common-btn-right common-btn-top "
        >添加二级标题</XButton
      >
      <!-- 二级分类 结束 -->
    </div>
  </div>
</template>

<script>
const UList = () => import("@/components/client/u-list/UList.vue");
const UListItem = () => import("@/components/client/u-list/UListItem");

import { newsecondcategory } from "../../network/category";

import mapgetters from "@/mixin/mapgetters";
export default {
  mixins: [mapgetters],
  name: "",
  components: { UList, UListItem },

  data() {
    return {
      curId: "",
      resultMsg: "",
      title: "",
    };
  },
  methods: {
    handleCategoryCheck(item) {
      let id = item.categoryId;
      if (this.curId === id) {
        this.curId = "";
        return;
      }
      this.curId = id;
    },
    handleAddSecondCate() {
      if (this.title.trim() == "") {
        this.$notify({
          title: "添加失败",
          message: `请输入二级分类标题`,
          type: "warning",
          duration: 3000,
        });
        return;
      }
      if (this.curId.trim() == "") {
        this.$notify({
          title: "添加失败",
          message: `请选择一级分类`,
          type: "warning",
          duration: 3000,
        });
        return;
      }
      newsecondcategory(this.title, this.curId).then((res) => {
        this.$notify({
          title: "添加成功",
          message: `${res.message}`,
          type: "success",
          duration: 3000,
        });
        this.$store.dispatch("getCategory");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.add-second-category {
  padding: 10px;
}
</style>
