<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-07 16:37:09
 * @LastEditors: xx
 * @LastEditTime: 2021-10-05 18:32:24
-->
<template>
  <div class="add-new-updated">
    <XDivider>标题</XDivider>

    <!-- 更新标题 开始 -->
    <div class="new-update-headerr">
      <span class="update-title">更新标题:</span>
      <XInput class="update-input" placeholder="请输入更新标题"></XInput>
    </div>
    <!-- 更新标题 结束 -->
    <!-- 更新内容 开始 -->

    <div class="update-content">
      <XDivider>正文</XDivider>
      <WangEdit v-model="editData"></WangEdit>
    </div>
    <!-- 更新内容 结束 -->

    <div class="update-footer">
      <XButton class="common-btn-right common-btn-top ">{{
        `发      布`
      }}</XButton>
    </div>
  </div>
</template>

<script>
const WangEdit = () => import("@/components/client/wang-edit/WangEdit.vue");

import mapgetters from "@/mixin/mapgetters";
export default {
  mixins: [mapgetters],
  name: "",
  data() {
    return {
      editData: ``,
    };
  },
  components: {
    WangEdit,
  },
};
</script>

<style lang="scss" scoped>
.add-new-updated {
  padding: 10px;
  // 标题

  .new-update-headerr {
    display: flex;
    height: 60px;
    justify-content: center;
    align-items: center;
    // 标题提示
    .update-title {
      padding: 0 10px;
    }
    // 输入框
    .update-input {
      flex: 1;
    }
  }
}
</style>
