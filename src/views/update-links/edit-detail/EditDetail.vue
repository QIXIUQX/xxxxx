<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: xx
 * @Date: 2021-10-01 23:59:10
 * @LastEditors: xx
 * @LastEditTime: 2021-10-05 04:41:57
-->
<template>
  <div class="edit-detail" v-show="visible">
    <XStoreyTitle style="border:none">
      编辑链接信息

      <XButton type="default" @click="handleCancelClick"
        >放弃修改链接信息</XButton
      >
    </XStoreyTitle>
    <!-- 一级分类开始 -->
    <XDivider>一级分类</XDivider>
    <XTag
      v-for="(item, i) in categoryList"
      :key="i"
      :type="categoryId == i ? 'success' : 'primary'"
      class="tag-common"
      @click="handleCategoryClick(item, i)"
    >
      {{ item.categoryTitle }}</XTag
    >
    <!-- 一级分类结束 -->

    <!-- 二级分类开始 -->
    <XDivider>二级分类</XDivider>
    <div v-if="secondCategory.length > 0">
      <XTag
        v-for="(secondItem, i) in secondCategory"
        :key="i"
        :type="secondCategoryId === secondItem.id ? 'success' : 'primary'"
        class="tag-common"
        @click="handleSecondCategoryCheck(secondItem, i)"
      >
        {{ secondItem.title }}</XTag
      >
    </div>
    <CommonTips v-else>该分类暂时没有数据</CommonTips>

    <!-- 二级分类结束 -->

    <!-- 标签分类开始 -->
    <Tag
      title="全部标签"
      :tags="tagList"
      type="primary"
      @tagClick="handleTagClick"
    >
    </Tag>
    <Tag
      title="已选择标签"
      :tags="curTags"
      type="success"
      @tagClick="handleTagClick"
    >
    </Tag>
    <!-- 标签分类结束 -->

    <!-- 输入框开始-->
    <XDivider>标题</XDivider>
    <XInput
      :placeholder="curItem.linkTitle"
      v-model="linkModel.linkTitle"
    ></XInput>

    <XDivider>描述</XDivider>
    <XInput
      :placeholder="curItem.linkDesc"
      v-model="linkModel.linkDesc"
    ></XInput>

    <XDivider>链接</XDivider>
    <XInput :placeholder="curItem.link" v-model="linkModel.link"></XInput>

    <XDivider>ICON链接</XDivider>
    <XInput
      :placeholder="curItem.iconLink"
      v-model="linkModel.iconLink"
    ></XInput>
    <!-- 输入框开始 -->

    <!-- 修改操作开始 -->
    <XButton type="default" @click="handleCancelClick" class="common-btn-top "
      >取消</XButton
    >
    <XButton
      type="primary"
      @click="handleUpdateLinkClick"
      class="common-btn-left"
      >确定修改</XButton
    >
    <!-- 修改操作结束 -->
  </div>
</template>

<script>
const Tag = () => import("@/components/client/tag/Tag.vue");
const CommonTips = () =>
  import("@/components/client/common-tips/CommonTips.vue");

import { updatelink } from "@/network/updateLinks";

import mapgetters from "@/mixin/mapgetters";
export default {
  mixins: [mapgetters],
  components: {
    Tag,
    CommonTips,
  },
  name: "",
  props: {
    curItem: {
      type: Object,
      default() {
        return {};
      },
    },
    visible: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  data() {
    return {
      secondCategory: [],
      categoryId: -1,
      secondCategoryId: -1,
      curTags: [],
      linkModel: this.curItem,
    };
  },
  methods: {
    /**
     * 提交按钮点击,调用更新方法进行更新
     */
    handleUpdateLinkClick() {
      this.updatelink();
    },
    /**
     * dialog对话框点击取消按钮,则将所有的tag都添加到taglist中,然后关闭界面
     */
    handleCancelClick() {
      this.$emit("update:visible", false);
      this.pushTagList();
    },

    /**
     * 一级分类被点击,获取二级分类数据后渲染
     *@param {item } 被点击的一级分类数据
     *@param {i } 被点击的一级分类idx
     */
    handleCategoryClick(item, i) {
      this.categoryId = i;
      // 准备渲染二级分类
      if (item.secondCategory) {
        this.secondCategory.length = 0;
        this.secondCategory.push(...item.secondCategory);
      }
    },
    /**
     * 二级分类被点击,渲染二级分类被选择效果
     * @param {item} 被点击的二级分类
     */
    handleSecondCategoryCheck(item) {
      this.secondCategoryId = item.id;
    },

    /**
     * 标签分类被点击
     * 将点击的标签添加到已选择标签分类，删除所有标签中的分类
     * @param {item} 被点击的标签项
     * @param {i} 被选择的项目的idx
     * @param {flag} 从所有标签页删除还是从已选标签页删除 默认所有标签页面删除
     */
    handleTagClick(item) {
      for (let i = 0; i < this.tagList.length; i++) {
        if (this.tagList[i].tagId === item.tagId) {
          this.curTags.push(item);
          this.tagList.splice(i, 1);
          return;
        }
      }
      for (let i = 0; i < this.curTags.length; i++) {
        if (this.curTags[i].tagId === item.tagId) {
          this.tagList.push(item);
          this.curTags.splice(i, 1);
          return;
        }
      }
    },
    /**
     *
     * 修改链接信息网络请求。
     */
    updatelink() {
      let tagIds = "";
      for (let i = 0; i < this.curTags.length; i++) {
        tagIds += this.curTags[i].tagId + ",";
      }
      // 如果id是空-1 提示未选择分类
      if (this.secondCategoryId == -1) {
        this.$notify({
          title: "添加失败",
          message: "请选择一个二级分类之后在添加",
          type: "error",
          duration: 4000,
        });
        return;
      }
      // 如果title是空的,则将原来的title给他,下面类似
      if (this.linkModel.linkTitle.trim() == "") {
        this.linkModel.linkTitle = this.curItem.linkTitle;
      }

      if (tagIds.trim() == "") {
        tagIds = this.curItem.tagList;
      }
      if (this.linkModel.link.trim() == "") {
        this.linkModel.link = this.curItem.link;
      }
      if (this.linkModel.iconLink.trim() == "") {
        this.linkModel.iconLink = this.curItem.iconLink;
      }
      if (this.linkModel.linkDesc.trim() == "") {
        this.linkModel.linkDesc = this.curItem.linkDesc;
      }
      // 开始发送请求
      updatelink(
        this.secondCategoryId,
        this.linkModel.linkTitle,
        tagIds,
        this.linkModel.linkDesc,
        this.linkModel.link,
        this.linkModel.iconLink,
        this.curItem.id
      ).then((res) => {
        if (res.code === 200) {
          this.$notify({
            title: "提交成功",
            message: `${res.data.message}`,
            type: "success",
            duration: 4000,
          });
          this.linkModel.linkTitle = "";
          this.linkModel.linkDesc = "";
          this.linkModel.iconLink = "";
          this.linkModel.link = "";
          this.$emit("close");
          this.$emit("update:visible", false);
          this.pushTagList();
        }
      });
    },
    // 将标签从新添加到tagList
    pushTagList() {
      this.tagList.push(...this.curTags);
      this.curTags = [];
    },
  },
};
</script>

<style lang="scss" scoped>
.edit-detail {
  padding: 10px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);

  width: 60vw;
  height: 70vh;
  overflow-y: scroll;
  background-color: #fff;
}
</style>
