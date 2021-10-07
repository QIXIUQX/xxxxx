<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-18 19:55:27
 * @LastEditors: xx
 * @LastEditTime: 2021-10-05 18:51:17
-->
<template>
  <div class="search">
    <div class="search-tag-header">
      <!-- 关键词搜索 开始 -->
      <XDivider>关键词搜索</XDivider>
      <div class="keyword-search">
        <XInput
          placeholder="请输入关键词,按回车搜索..."
          v-model="keywords"
          @keyup.enter.native="searchClick"
        ></XInput>
        <XButton @click="searchClick">搜索</XButton>
      </div>
      <!-- 关键词搜索 结束 -->

      <!-- 标签搜索 开始 -->
      <XDivider>也可以按标签进行搜索</XDivider>
      <div class="search-tag-box">
        <XTag
          :type="checkTagType(tagItem)"
          v-for="(tagItem, i) in tagList"
          :key="i"
          class="tag-common"
          @click="handleChangeSearch(tagItem)"
          >{{ tagItem.tagName }}</XTag
        >
      </div>
    </div>
    <!-- 标签搜索 结束 -->

    <!-- 搜索结果 开始 -->
    <XDivider>搜索结果</XDivider>
    <div class="search-tag-wrap">
      <LinkItem
        v-for="(item, i) in searchResult"
        :key="i"
        :item="item"
      ></LinkItem>
      <div v-if="searchResult.length == 0" class="wrap-not-data">
        暂无结果
      </div>
    </div>
    <!-- 搜索结果 结束 -->
  </div>
</template>

<script>
const LinkItem = () => import("@/components/client/link-item/LinkItem.vue");

import { searchByTag, linkSearchByKeyword } from "@/network/search";
import mapgetters from "@/mixin/mapgetters";
export default {
  mixins: [mapgetters],
  name: "Search",
  components: {
    LinkItem,
  },
  computed: {
    checkTagType() {
      return function(item) {
        if (item.tagId == this.itemId) {
          return "success";
        }
        return "primary";
      };
    },
  },
  data() {
    return {
      itemId: "",
      typeName: "",
      searchResult: [],
      keywords: "",
    };
  },
  methods: {
    /**
     * 搜索按钮被点击或者文本框失去焦点
     */
    searchClick() {
      if (this.keywords.trim() != "") {
        linkSearchByKeyword(this.keywords).then((result) => {
          if (result.code == 200) {
            this.searchResult = result.data.data;
          }
        });
      }
    },

    //路由跳转第一次获取
    getTagId() {
      if (this.$route.params.item) {
        this.itemId = this.$route.params.item.tagId;
        this.searchByTag();
      }
    },
    // 点击标签开始搜索
    handleChangeSearch(item) {
      this.itemId = item.tagId;
      this.searchByTag();
    },
    // 搜索方法
    searchByTag() {
      searchByTag(this.itemId).then((result) => {
        this.searchResult = result.data;
      });
    },
  },
  created() {
    this.getTagId();
  },
};
</script>

<style lang="scss" scoped>
.search {
  padding: 20px;
  .search-tag-header {
    .search-tag-item {
      margin: 5px 10px;
    }
  }
  .keyword-search {
    display: flex;
  }
  .search-tag-wrap {
    display: flex;
    flex-wrap: wrap;
    .wrap-not-data {
      padding: 10px 20px;
      color: #999;
    }
  }
}
</style>
