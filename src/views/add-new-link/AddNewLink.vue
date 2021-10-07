<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-07 16:36:38
 * @LastEditors: xx
 * @LastEditTime: 2021-10-05 18:29:49
-->
<template>
  <div class="add-new-link">
    <!-- 添加列表 -->
    <div class="link-item">
      <!-- 一级分类 -->
      <XDivider>请选择一级分类</XDivider>
      <div class="item-category">
        <XTag
          v-for="(item, i) in categoryList"
          :key="i"
          class="tag-common"
          :type="
            linkModel.categoryId == item.categoryId ? 'success' : 'primary'
          "
          @click="handleCategoryCheck(item, i)"
          >{{ item.categoryTitle }}
        </XTag>
      </div>

      <!-- 二级分类 -->
      <XDivider>请选择二级分类</XDivider>
      <section class="item-category">
        <XTag
          class="tag-common"
          v-for="(item, i) in secondCategory"
          :key="i"
          :type="secondCategoryId == item.id ? 'success' : 'primary'"
          @click="handleSecondCategoryCheck(item, i)"
          >{{ item.title }}</XTag
        >

        <CommonTips v-if="secondCategory.length == 0">
          请先选择一级分类
        </CommonTips>
      </section>

      <!-- 全部标签 -->
      <XDivider>标签分类</XDivider>
      <section class="item-tags">
        <div class="all-tags">
          <!-- 全部标签盒子 -->
          <div class="all-tags-body">
            <XTag
              class="tag-common"
              type="primary"
              v-for="(item, i) in tagList"
              :key="i"
              @click="handleTagCheck(item, i, true)"
              >{{ item.tagName }}</XTag
            >
          </div>
          <CommonTips v-if="tagList.length == 0">
            您已经将所有标签都添加了
          </CommonTips>
        </div>
        <div class="check-tags">
          <!-- <div>已选择</div> -->
          <XDivider>已选择的标签</XDivider>
          <div class="all-tags-body">
            <XTag
              class="tag-common"
              type="success"
              v-for="(item, i) in tagListModel"
              :key="i"
              @click="handleTagCheck(item, i, false)"
              >{{ item.tagName }}</XTag
            >
          </div>
          <CommonTips v-if="tagListModel.length == 0">
            还没有选择标签
          </CommonTips>
        </div>
      </section>
      <!-- 内容输入区域 开始-->
      <section class="input-inner">
        <XInput
          class="common-input-top"
          placeholder="请输入标题"
          v-model="linkModel.linkTitle"
        ></XInput>
        <XInput
          class="common-input-top"
          placeholder="请输入描述"
          v-model="linkModel.linkDesc"
        ></XInput>
        <XInput
          class="common-input-top"
          placeholder="请输入链接，如：https://www.google.com/"
          v-model="linkModel.link"
          @blur="handleLikIptBlur"
        ></XInput>
        <XInput
          class="common-input-top"
          style="padding-top:5px"
          placeholder="请输入网站图标链接如：https://www.google.com/是网站，则图标链接应该输入：www.google.com"
          v-model="linkModel.iconLink"
          :value="linkModel.iconLink"
        ></XInput>
      </section>
      <!-- 内容输入区域 结束-->
      <!-- 提示文字 开始 -->
      <CommonHelp>
        <span class="icon-link-help">
          默认是以
          <a href="https://api.iowen.cn/doc/favicon.html" target="_black">
            https://api.iowen.cn/doc/favicon.html</a
          >
          作为图标接口,自动识别并填写，也可以自己填写
        </span>
      </CommonHelp>
      <!-- 提示文字 结束 -->
      <!-- 提交按钮 开始 -->
      <XButton
        @click="handleAddLinkClick"
        class="common-btn-right common-btn-top "
        >添加链接</XButton
      >
    </div>
    <!-- 提交按钮 结束 -->
  </div>
</template>

<script>
const UList = () => import("@/components/client/u-list/UList.vue");
const UListItem = () => import("@/components/client/u-list/UListItem");
const CommonHelp = () =>
  import("@/components/client/common-help/CommonHelp.vue");
const CommonTips = () =>
  import("@/components/client/common-tips/CommonTips.vue");

import { newlink } from "@/network/links";
import mapgetters from "@/mixin/mapgetters";
export default {
  mixins: [mapgetters],
  name: "",
  components: { UList, UListItem, CommonHelp, CommonTips },
  data() {
    return {
      linkModel: {
        categoryId: "",
        linkTitle: "",
        linkDesc: "",
        link: "",
        iconLink: "",
      },
      tagListModel: [],
      resultMsg: "",
      secondCategory: [],
      secondCategoryId: "",
    };
  },
  methods: {
    //处理链接输入框失去焦点
    handleLikIptBlur() {
      let str = this.linkModel.link.trim();
      if (str) {
        try {
          let iconlink = str.split("//")[1].split("/")[0];
          this.linkModel.iconLink = iconlink;
          // console.log("出错");
        } catch (err) {
          //todo:不做任何操作
          // console.log("出错");
        }
      }
    },
    // 1级分类被点击
    handleCategoryCheck(item, i) {
      let id = item.categoryId;
      if (this.linkModel.categoryId === id) {
        this.linkModel.categoryId = "";
        return;
      }
      this.linkModel.categoryId = id;
      if (item.secondCategory) {
        this.secondCategory.length = 0;
        this.secondCategory.push(...item.secondCategory);
      }
    },
    //二级分类被点击
    handleSecondCategoryCheck(item, i) {
      this.secondCategoryId = item.id;
      // console.log(this.secondCategoryId);
    },
    // 处理tag点击
    handleTagCheck(item, i, flag) {
      if (flag) {
        this.tagList.splice(i, 1);
        this.tagListModel.push(item);
      } else {
        this.tagList.push(item);
        this.tagListModel.splice(i, 1);
      }
    },
    // 添加按钮
    handleAddLinkClick() {
      if (this.linkModel.categoryId.trim() == "") {
        this.$notify({
          title: "添加失败",
          message: "一级分类为必选项，",
          type: "error",
          duration: 4000,
        });
        return;
      }
      if (this.linkModel.linkTitle.trim() == "") {
        this.$notify({
          title: "添加失败",
          message: "标题为必选项，",
          type: "error",
          duration: 4000,
        });
        return;
      }
      // 添加描述不在强制填写
      if (this.linkModel.linkDesc.trim() == "") {
        // this.$notify({
        //   title: "添加失败",
        //   message: "描述为必选项，",
        //   type: "error",
        //   duration: 4000,
        // });
      }
      if (this.linkModel.link.trim() == "") {
        this.$notify({
          title: "添加失败",
          message: "链接为必选项，",
          type: "error",
          duration: 4000,
        });
        return;
      }
      if (this.tagListModel.length == 0) {
        this.$notify({
          title: "添加失败",
          message: "标签为必选项",
          type: "error",
          duration: 4000,
        });
        return;
      }
      let model = this.linkModel;
      let tagIds = "";
      for (let i = 0; i < this.tagListModel.length; i++) {
        tagIds += this.tagListModel[i].tagId + ",";
      }
      // console.log(tagIds);
      newlink(
        // model.categoryId,
        this.secondCategoryId,
        model.linkTitle,
        tagIds,
        model.linkDesc,
        model.link,
        model.iconLink
      ).then((result) => {
        if (result.code == 500) {
          this.$notify({
            title: "添加成功",
            message: `${result.message}`,
            type: "error",
            duration: 4000,
          });
        } else {
          this.$notify({
            title: "添加成功",
            message: `${result.message}`,
            type: "success",
            duration: 4000,
          });
        }
      });
    },
    // 注销的时候，重新将所有标签添加回去
    handleDestroyedTags() {
      this.tagList.push(...this.tagListModel);
    },
  },
  destroyed() {
    this.handleDestroyedTags();
  },
};
</script>

<style lang="scss" scoped>
.add-new-link {
  padding: 10px 50px 10px 10px;
  height: 100%;
  // 添加列表
  .link-item {
    // 分类信息
    .item-category {
      .second-tips {
        padding: 5px 0 10px 20px;
      }
    }
    // 标签
    .item-tags {
      .all-tags,
      .check-tags {
        margin-right: 5px;
        padding: 5px;
        flex: 1;
        border: 1px solid #eee;
      }
      .all-tags {
        .all-tags-title {
          color: #666;
          padding-right: 5px;
        }
      }
    }
    // 帮助链接
    .icon-link-help {
      margin: 10px 0 0 5px;
      font-size: 12px;
      color: #999;
    }
  }
}
</style>
