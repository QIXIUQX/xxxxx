<template>
  <div class="info">
    <!-- 信息 主要盒子  开始-->
    <div class="container">
      <!-- 容器 开始 -->
      <div class="wrap">
        <!-- icon 开始 -->
        <div class="info-icon-img-wrap" v-if="item">
          <div class="info-icon" v-if="item">
            <div
              class="info-icon-bg"
              :style="
                `background:url('https://api.iowen.cn/favicon/${item.iconLink}.png')`
              "
            ></div>
            <img
              v-lazy="`https://api.iowen.cn/favicon/${item.iconLink}.png`"
              alt=""
            />
          </div>
        </div>
        <!-- icon 开始 -->

        <!-- 内容开始  -->
        <div class="info-body" v-if="item">
          <!-- 标题 内容 -->
          <h1 class="side-name">{{ item.linkTitle }}</h1>
          <div class="side-desc ">
            {{ item.linkDesc }}
          </div>
          <!-- 操作区域 -->
          <div class="side-go">
            <XButton class="common-btn-left " @click="handleAddToHome(item)"
              >添加到首页</XButton
            >
            <a :href="item.link" class="side-go-item" target="_black"
              ><span>直达网站</span>
              <i class="iconfont icon-arrow-right"></i>
            </a>
          </div>
          <!-- 标签 -->
          <div class="side-tags">
            <XTag
              v-for="(item, i) in curTags"
              :key="i"
              type="success"
              class="tag-common"
              @click="handleTagsClick(item)"
              >{{ item.tagName }}</XTag
            >
          </div>
        </div>
        <!-- 内容结束  -->
      </div>
      <!-- 容器 结束 -->
    </div>
    <!-- 信息 主要盒子  结束-->
  </div>
</template>

<script>
import * as type from "@/store/mutationsType";

import { getTagList } from "@/utils/getTagList.js";
import { getStorage } from "@/utils/localstorage";

import mapgetters from "@/mixin/mapgetters";
export default {
  mixins: [mapgetters],
  name: "Info",
  data() {
    return {
      item: null,
      curTags: [],
      tags: getStorage("tagsList") || [],
    };
  },

  methods: {
    // 如果有标签的话将获取这个item所有标签
    getItem() {
      this.item =
        this.$route.params.item ||
        JSON.parse(sessionStorage.getItem("infoItem"));
      sessionStorage.setItem("infoItem", JSON.stringify(this.item));
      this.curTags = getTagList(this.tags, this.item.linkTags);
    },
    // 点击添加到首页
    handleAddToHome(item) {
      this.$store.commit(type.SET_LIVE_LINKS, item);
      this.$notify({
        title: "添加成功",
        message: "成功添加到我的导航！",
        type: "success",
        duration: 4000,
      });
    },
    handleTagsClick(item) {
      this.$router.push({
        name: "Search",
        params: {
          item: item,
        },
      });
    },
  },
  created() {
    this.getItem();
  },
};
</script>

<style lang="scss" scoped>
.info {
  height: 100%;
  // 容器 控制居中
  .container {
    display: grid;
    justify-content: center;
    align-content: center;
    width: 1200px;
    height: 100%;
    // 容器
    .wrap {
      position: relative;
      display: flex;
      width: 1200px;
      height: max-content;
      min-height: 300px;
      box-shadow: 0 2px 20px 3px rgba(0, 0, 0, 0.15);
      // icon
      .info-icon-img-wrap {
        overflow: hidden;
        height: 300px;
        width: 300px;
        .info-icon {
          position: relative;
          overflow: hidden;
          min-width: 300px;
          overflow: hidden;
          box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.15);
          transition: all ease 0.5s;
          &:hover {
            transform: scale(1.3);
          }
          .info-icon-bg {
            padding: 20px;
            width: 300px;
            height: 300px;
            background-repeat: no-repeat;
            filter: blur(100px);
            background-size: 100% 100%;
            overflow: hidden;
          }

          img {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 72px;
            height: 72px;
            border-radius: 5px;
          }
        }
      }
      // 内容区域
      .info-body {
        padding: 20px;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #fff;
        height: max-content;
        // 标题
        .side-name {
          width: 860px;
          font-size: 30px;
          font-weight: 700;
          height: 60px;
          @include oneEllipsis;
          overflow: hidden;
          line-height: 60px;
        }
        // 描述
        .side-desc {
          min-height: 80px;
          max-height: 120px;
          overflow: hidden;
          @include moreEllipsis(5);
        }
        // 操作
        .side-go {
          margin-top: 5px;
          font-size: 16px;
          height: 40px;
          display: flex;
          .side-go-item {
            margin-left: 20px;
            padding: 9px 20px;
            i {
              margin-left: 5px;
            }
          }
        }
        // 标签
        .side-tags {
          flex: 1;
          display: flex;
          margin-top: 10px;
          align-items: center;
          flex-wrap: wrap;
        }
      }
    }
  }
}
</style>
