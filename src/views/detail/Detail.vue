<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-07 13:53:16
 * @LastEditors: xx
 * @LastEditTime: 2021-10-07 20:58:18
-->
<template>
  <div class="detail">
    <!-- 位置提示 开始 -->
    <XStoreyTitle>
      <div class="detail-title">
        <i class="iconfont icon-arrowleftbold"></i>
        <span class="detail-title-item backup" @click="handleBack"
          >返回首页</span
        >
        <i class="iconfont icon-tubiaozhizuo-"></i>
        <span class="detail-title-item">{{ currentPosition }}</span>
      </div>
    </XStoreyTitle>
    <!-- 位置提示 结束 -->
    <!-- 内容 开始 -->
    <div class="detail-warp" v-if="links.length > 0">
      <LinkItem v-for="(item, i) in links" :key="i" :item="item"></LinkItem>
    </div>
  </div>
  <!-- 内容 结束 -->
</template>

<script>
const LinkItem = () => import("@/components/client/link-item/LinkItem.vue");

import mapgetters from "@/mixin/mapgetters";

export default {
  mixins: [mapgetters],
  name: "",
  components: {
    LinkItem,
  },
  data() {
    return {
      id: "",
    };
  },
  methods: {
    // 获取二级分类中的链接集合
    getLinks() {
      this.$store.dispatch("getLinks", this.id);
    },
    // 获取到传入的id
    getId() {
      this.id = this.$route.params.id;
    },
    // 处理点击返回  会回到首页
    handleBack() {
      this.$router.push("/index").catch((err) => err);
    },
  },
  created() {},
  watch: {
    $route: {
      handler(newValue, oldValue) {
        this.getId();
        this.getLinks();
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.detail {
  padding: 0 20px;
  .detail-title {
    i {
      color: #999;
      font-size: 20px;
    }
    .detail-title-item {
      padding: 0 5px;
    }
    .backup {
      cursor: pointer;
    }
  }
  .detail-warp {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
