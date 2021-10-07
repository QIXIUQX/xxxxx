<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-08 19:29:41
 * @LastEditors: xx
 * @LastEditTime: 2021-10-05 18:05:23
-->
<template>
  <a href="javascript:;" class="link-item">
    <!-- icon 开始 -->
    <div class="item-icon" @click="handleLinkItemClick">
      <img
        v-lazy="`https://api.iowen.cn/favicon/${item.iconLink}.png`"
        alt=""
      />
    </div>
    <!-- icon 结束 -->

    <!-- desc 开始 -->
    <div class="item-wrap" @click="handleLinkItemClick">
      <!-- 标题 -->
      <div class="item-warp-title" :title="item.linkTitle">
        {{ item.linkTitle }}
      </div>
      <!-- 描述 -->
      <div class="item-warp-desc" :title="item.linkDesc">
        {{ item.linkDesc }}
      </div>
    </div>
    <!-- desc 结束 -->

    <!-- 直达 开始 -->
    <div class="item-direct" title="直达">
      <a :href="item.link" class="item-direct" target="_blank">
        <i class="iconfont icon-arrow-right"></i>
      </a>
    </div>
    <!-- 直达 结束 -->
  </a>
</template>

<script>
export default {
  name: "LinkItem",
  props: {
    item: {
      type: Object,
    },
  },
  methods: {
    /**
     * 添加到首页
     * @param {item} 被添加到首页的项目
     */
    handleAddToHome(item) {
      this.$store.commit(type.SET_MY_LINKS, item);
    },
    /**
     * item被点击了跳转info界面
     */
    handleLinkItemClick() {
      this.$router.push({
        name: "Info",
        params: {
          item: this.item,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.link-item {
  margin: 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  width: 350px;
  background-color: #eee;
  border: 1px solid #e1e4e8;
  border-radius: 5px;
  transition: all ease 0.2s;
  box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.15);
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 10px 5px rgba(0, 0, 0, 0.15);
  }
  // icon
  .item-icon {
    padding: 20px 10px;
    width: 60px;
    height: 100%;
    img {
      width: 100%;
    }
  }
  // desc
  .item-wrap {
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;

    width: 250px;
    height: 100%;

    .item-warp-title {
      width: 100%;
      height: 30px;
      font-size: 18px;
      font-weight: 700;
      @include oneEllipsis;
    }
    .item-warp-desc {
      font-size: 12px;
      @include moreEllipsis(2);
    }
  }
  // 直达
  .item-direct {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 100%;
    transition: all ease 0.3s;
    &:hover a {
      color: #fff;
      background-color: #409eff;
    }
  }
}
</style>
