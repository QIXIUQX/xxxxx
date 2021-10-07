<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-08 20:37:51
 * @LastEditors: xx
 * @LastEditTime: 2021-10-05 18:13:09
-->
<template>
  <div class="tags">
    <!-- 标题 -->
    <XDivider>{{ title }}</XDivider>
    <!-- 标签开始 -->

    <div v-if="tags.length > 0" class="tag-wrap">
      <XTag
        v-for="(itemTag, i) in tags"
        :key="i"
        :type="type"
        class="tag-common"
        @click="handleTagClick(itemTag, i, false)"
      >
        {{ itemTag.tagName }}
      </XTag>
    </div>
    <CommonTips v-else>目前并没有标签可以选择</CommonTips>
    <!-- 标签开始 -->标签结束
  </div>
</template>

<script>
const CommonTips = () => import("../common-tips/CommonTips.vue");

export default {
  name: "",
  props: {
    tags: {
      type: Array,
      default() {
        return [];
      },
    },
    title: {
      type: String,
      default() {
        return "";
      },
    },
    type: {
      type: String,
      default() {
        return "primary";
      },
    },
  },
  components: {
    CommonTips,
  },
  data() {
    return {};
  },
  methods: {
    /**
     * 标签分类被点击
     * 将点击的标签添加到已选择标签分类，删除所有标签中的分类
     * @param {item} 被点击的标签项
     * @param {i} 当前被点击的item编号
     */
    handleTagClick(item, i) {
      this.$emit("tagClick", item, i);
    },
  },
};
</script>

<style lang="scss" scoped>
.tags {
  padding: 10px 0;
  .item-tag {
    margin: 2px 5px;
  }
}
</style>
