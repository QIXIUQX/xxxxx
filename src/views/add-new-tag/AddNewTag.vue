<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-08 14:30:57
 * @LastEditors: xx
 * @LastEditTime: 2021-10-05 18:28:19
-->
<template>
  <div class="add-new-tag">
    <div class="add-new-tag-header">
      <!-- 现有标签  开始 -->
      <XDivider>现有标签</XDivider>
      <div class="now-tag-list all-tags-body">
        <XTag
          type="primary"
          v-for="(item, i) in tagList"
          :key="i"
          class="tag-common"
        >
          {{ item.tagName }}
        </XTag>
      </div>
    </div>

    <!-- 现有标签 结束 -->

    <!-- 新标签 开始  -->
    <XDivider>新标签</XDivider>
    <XInput
      placeholder="请输入新标签名称"
      v-model="tagName"
      class="common-input-top"
    >
    </XInput>
    <!-- 新标签 结束  -->

    <!-- 提交 开始 -->
    <XButton @click="handleAddTagClick" class="common-btn-right common-btn-top "
      >添加标签</XButton
    >
    <!-- 提交 结束 -->
  </div>
</template>

<script>
const UList = () => import("@/components/client/u-list/UList.vue");
const UListItem = () => import("@/components/client/u-list/UListItem");

import mapgetters from "@/mixin/mapgetters";
import { newtags } from "@/network/tags";

export default {
  mixins: [mapgetters],
  name: "",
  components: { UList, UListItem },
  data() {
    return {
      resultMsg: "",
      tagName: "",
    };
  },
  methods: {
    handleAddTagClick() {
      this.tagName = this.tagName.trim();
      if (this.tagName == "") {
        this.$notify({
          title: "添加失败",
          message: `标签名不能为空！`,
          type: "error",
          duration: 3000,
        });
        return;
      }
      let flag = this.tagList.some((item) => {
        if (item.tagName.includes(this.tagName)) {
          return true;
        }
      });
      if (flag) {
        this.$notify({
          title: "添加失败",
          message: `标签已存在`,
          type: "error",
          duration: 3000,
        });
        return;
      }
      newtags(this.tagName).then((res) => {
        this.$notify({
          title: "添加成功",
          message: `${res.message}`,
          type: "success",
          duration: 3000,
        });
        this.$store.dispatch("getTags");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.add-new-tag {
  padding: 10px;
  // 标题
  .add-new-tag-header {
    // 现有标签 头部
    .now-tag-header {
      margin: 10px 15px;
    }
    // 现有标签
    .now-tag-list {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 5px;
    }
  }
}
</style>
