<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: xx
 * @Date: 2021-09-30 21:23:51
 * @LastEditors: xx
 * @LastEditTime: 2021-10-07 21:23:39
-->
<template>
  <div class="update-links">
    <XDivider>搜索Links</XDivider>
    <div class="update-links-search">
      <XInput
        class="search-ipt"
        placeholder="请输入链接标题或关键字"
        v-model="keyword"
      ></XInput>
      <XButton @click="handleSearchClick" class="common-btn-left "
        >搜索</XButton
      >
    </div>
    <XDivider>详细信息</XDivider>
    <div class="update-links-wrap">
      <!-- 内容标题部分 -->

      <XStoreyTitle class="update-links-header">
        <div class="update-links-id">
          ID
        </div>
        <div class="update-links-title">
          标题
        </div>
        <div class="update-links-edit">
          操作
        </div>
      </XStoreyTitle>
      <!-- 内容展示部分 -->
      <UList v-if="editLinks.length > 0">
        <UListItem
          class="update-links-item"
          v-for="item in editLinks"
          :key="item.id"
        >
          <div class="item-id">{{ item.id }}</div>
          <div class="item-title" @click="handleLinkTitleClick(item)">
            {{ item.linkTitle }}
          </div>
          <div class="item-editor">
            <span @click="handleEditBtnClick(item)">编辑</span>
            <span @click="handleDeleteBtnClick(item)">删除</span>
          </div>
        </UListItem>
      </UList>
      <CommonTips v-else>暂无数据</CommonTips>
      <!-- 本地连接对话框 -->
    </div>
    <!-- 编辑内容 start -->
    <EditDetail
      :curItem="curItem"
      :visible.sync="visible"
      @close="handleCoseClick"
    ></EditDetail>
    <!-- 编辑内容 end -->
  </div>
</template>

<script>
const UList = () => import("@/components/client/u-list/UList.vue");
const UListItem = () => import("@/components/client/u-list/UListItem.vue");
const EditDetail = () => import("./edit-detail/EditDetail.vue");
const CommonTips = () =>
  import("@/components/client/common-tips/CommonTips.vue");

import {
  getLinks,
  linkSearchByKeyword,
  deleteLinkById,
} from "@/network/updateLinks";
import mapgetters from "@/mixin/mapgetters";

export default {
  mixins: [mapgetters],

  name: "",

  data() {
    return {
      keyword: "",
      editLinks: [],
      curItem: {
        categoryId: "",
        iconLink: "",
        id: "",
        link: "",
        linkDesc: "",
        linkTitle: "",
        linkTags: "",
      },
      visible: false,
    };
  },
  components: {
    UList,
    UListItem,
    EditDetail,
    CommonTips,
  },
  methods: {
    /**
     * 标题被点击跳转info界面
     */
    handleLinkTitleClick(item) {
      this.$router.push({
        name: "Info",
        params: {
          item: item,
        },
      });
    },
    /**
     * 关闭编辑界面,则重新查询最新的链接信心渲染
     */
    handleCoseClick() {
      this.getLinks();
    },
    /**
     * 编辑按钮被点击,显示编辑界面,并且将当前的item 传入组件渲染
     * @param { item } 被点击的item
     */
    handleEditBtnClick(item) {
      this.curItem = item;
      this.visible = true;
    },

    /**
     * 删除按钮被点击
     * @param {*} item 要被删除的项目
     */
    handleDeleteBtnClick(item) {
      this.deleteLinkById(item.id);
      this.getLinks();
    },
    /**
     * 搜索按钮被点击,如果不为空则进行关键词赋值
     */
    handleSearchClick() {
      if (this.keyword.trim() != "") {
        this.linkSearchByKeyword(this.keyword);
      }
    },

    /**
     * 网络请求相关方法都在下面
     *
     */
    /**
     * 获取到所有的链接
     *
     */
    getLinks() {
      getLinks().then((result) => {
        this.editLinks = result.data;
      });
    },

    /**
     * 根据id删除links
     *@param {*} id 需要被删除的项目的id
     */
    deleteLinkById(id) {
      deleteLinkById(id).then((res) => {
        // 删除失败
        if (res.code !== 200) {
          this.$notify({
            title: "操作失败",
            message: `${res.code}`,
            type: "error",
            duration: 4000,
          });
          return;
        }
        // 成功
        this.$notify({
          title: "操作成功",
          message: "已成功删除选择的数据",
          type: "success",
          duration: 4000,
        });
      });
    },
    /**
     * 关键字搜索功能
     *@params { keyword } 关键字
     */
    linkSearchByKeyword(keyword) {
      linkSearchByKeyword(keyword).then((searchResultList) => {
        this.editLinks = searchResultList.data.data;
      });
    },
  },
  created() {
    this.getLinks();
  },
};
</script>

<style lang="scss" scoped>
.update-links {
  position: relative;

  //   position: relative;
  padding: 10px 20px;
  // 搜索部分
  .update-links-search {
    display: flex;
    .search-ipt {
      width: 400px;
    }
  }
  // 内容部分
  .update-links-wrap {
    //   内容标题
    .update-links-header {
      height: 40px;
      .update-links-id {
        width: 100px;
      }
      .update-links-title {
        flex: 1;
      }
      .update-links-edit {
        width: 100px;
      }
    }
    // 内容展示
    .update-links-item {
      display: flex;
      .item-id {
        width: 100px;
      }
      // 标题
      .item-title {
        flex: 1;
        @include oneEllipsis;
        &:hover {
          color: #ff6dc4;
          cursor: pointer;
        }
      }
      // 编辑功能
      .item-editor {
        display: flex;
        width: 100px;
        //  编辑删除提示文字
        span {
          flex: 1;
          cursor: pointer;
          transition: all 0.3s ease;
          &:hover {
            color: #ff6dc4;
          }
        }
      }
    }
  }
}
</style>
