<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-07 13:53:16
 * @LastEditors: xx
 * @LastEditTime: 2021-10-05 18:37:37
-->
<template>
  <div class="home">
    <!-- 搜索框 开始 -->
    <div class="searchBox">
      <div class="serache">
        <!-- 搜索标题 -->
        <div class="srasch-title">
          <span
            :class="{
              on: searchType.searchEngine == item.engine,
            }"
            class="srasch-title-type"
            @click="handleSearchTpyeChange(item)"
            v-for="(item, i) in siteSearch"
            :key="i"
          >
            {{ item.title }}
          </span>
        </div>
        <!-- 搜索框 -->
        <div class="srasch-wrap">
          <XInput
            placeholder="请输入要搜索的内容"
            v-model="keywords"
            @keyup.enter.native="handleSearchClick"
          ></XInput>
          <XButton @click="handleSearchClick" style="border-radius:0"
            >搜索</XButton
          >
        </div>
      </div>
    </div>
    <!-- 搜索框 结束 -->

    <!-- 我添加的链接 -->
    <div class="my-links">
      <XStoreyTitle>
        <div class="my-link-title">我的导航</div>
        <div class="edit-my-links">
          <span> 编辑</span>
          <XSwitch v-model="isCheck" @change="handleMyLinkEdit"></XSwitch>
        </div>
      </XStoreyTitle>
      <div class="my-link-wrap">
        <div class="my-link-wrap-item" v-for="item in liveLinks" :key="item.id">
          <LinkItem :item="item"></LinkItem>
          <i
            class="iconfont icon-close icon-position"
            v-show="isCheck"
            @click="handleDeleteLiveLinks(item)"
          ></i>
        </div>
        <div class="my-link-wrap-item" v-for="item in myLinks" :key="item.id">
          <LinkItem :item="item"></LinkItem>
          <i
            class="iconfont icon-close icon-position"
            v-show="isCheck"
            @click="handleDeleteMyLinks(item)"
          ></i>
        </div>
        <div v-show="isCheck" class="add-link" @click="handleAddLinkClick">
          添加本地链接
        </div>
      </div>
    </div>
    <!-- 添加本地连接对话框 -->
    <XDialog title="添加新链接" :visible.sync="visible">
      <!-- 对话框内容 -->
      <div slot="dialogBody" class="dialogBody">
        <XInput
          type="text"
          class="dialogBodyIpt"
          placeholder="请输入新链接的标题"
          v-model="linkModel.linkTitle"
        />
        <XInput
          type="text"
          class="dialogBodyIpt"
          placeholder="请输入新链接的描述"
          v-model="linkModel.linkDesc"
        />
        <XInput
          type="text"
          class="dialogBodyIpt"
          placeholder="请输入URL"
          v-model="linkModel.link"
          @blur="handleIptBlur"
        />
        <XInput
          type="text"
          class="dialogBodyIpt"
          placeholder="请输入ICON"
          v-model="linkModel.iconLink"
        />
        <!-- 提示文字 -->
        <CommonHelp>
          ICON默认是以https://api.iowen.cn/doc/favicon.html作为图标接口,自动识别并填写，也可以自己填写添加链接
        </CommonHelp>
      </div>
      <div slot="dialogFooter" class="dialogFooter">
        <XButton type="default" @click="visible = false">取消</XButton>
        <XButton type="primary" @click="handleAddMyLinkClick">添加</XButton>
      </div>
    </XDialog>
  </div>
</template>

<script>
const CommonHelp = () =>
  import("@/components/client/common-help/CommonHelp.vue");
const LinkItem = () => import("@/components/client/link-item/LinkItem.vue");

import { getStorage, saveStorage } from "@/utils/localstorage";
import { getProfile } from "@/network/profile.js";
import * as type from "@/store/mutationsType";

import { mapGetters } from "vuex";

export default {
  name: "",
  data() {
    return {
      id: "",
      // liveLinks: [],
      iptTxtValue: "",
      keywords: "",
      searchType: getStorage("searchType") || {
        type: "internetSearch",
        searchEngine: "bing",
      },
      siteSearch: [
        {
          title: "Bing搜索",
          typeStr: "internetSearch",
          engine: "bing",
        },
        {
          title: "百度搜索",
          typeStr: "internetSearch",
          engine: "baidu",
        },
      ],
      searchUrl: "",
      isCheck: false,
      visible: false,
      linkModel: {
        id: "",
        linkTags: "1631081898307,",
        linkTitle: "",
        linkDesc: "",
        link: "https://",
        iconLink: "",
      },
      myLinks: getStorage("myLinks") || [],
    };
  },
  components: {
    LinkItem,
    CommonHelp,
  },
  computed: {
    ...mapGetters({
      liveLinks: "getLiveLinks",
    }),
  },
  methods: {
    // dialog确定按钮点击
    handleAddMyLinkClick() {
      if (
        this.linkModel.linkTitle != "" &&
        this.linkModel.link != "" &&
        this.linkModel.iconLink != ""
      ) {
        let item = {
          ...this.linkModel,
        };
        this.myLinks.push(item);
        saveStorage("myLinks", this.myLinks);
        this.visible = false;
        this.linkModel.id = "";
        this.linkModel.linkTitle = "";
        this.linkModel.link = "https://";
        this.linkModel.desc = "";
        this.linkModel.iconLink = "";
        this.$notify({
          title: "添加成功",
          duration: 2500,
          message: "添加新链接成功！",
          type: "success",
        });
      } else {
        this.$notify({
          title: "添加失败",
          duration: 4000,
          message: "添加新链接失败！",
          type: "error",
        });
      }
    },
    // url 输入框失去焦点
    handleIptBlur() {
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
    //  添加链接点击弹出dialog
    handleAddLinkClick() {
      this.visible = !this.visible;
      // 准备好需要的id
      this.linkModel.id = new Date().getTime();
    },
    // 删除本地保存的在线链接
    handleDeleteLiveLinks(item) {
      this.$store.commit(type.DELETE_LIVE_LINKS, item.id);
    },
    // 删除我的链接
    handleDeleteMyLinks(item) {
      let tempLinkArr = this.myLinks;
      tempLinkArr.forEach(function(link, i) {
        if (link.id === item.id) {
          tempLinkArr.splice(i, 1);
        }
      });
      this.myLinks = tempLinkArr;
      saveStorage("myLinks", this.myLinks);
    },
    // 处理编辑按钮点击事件
    //todo
    handleMyLinkEdit(newStatus) {},
    // 获取所有的链接
    getLinks() {
      this.$store.dispatch("getLinks", this.id);
    },
    // 获取到传入的id
    getId() {
      this.id = this.$route.params.id;
    },
    // 获取本地存储的链接
    getliveLinks() {
      // this.liveLinks = getStorage("liveLinks");
    },
    // 搜索类型改变
    handleSearchTpyeChange(item) {
      this.searchType.type = item.typeStr;
      this.searchType.searchEngine = item.engine;
      saveStorage("searchType", this.searchType);
    },
    // search按钮点击
    handleSearchClick() {
      let ele = document.createElement("a");

      if (this.searchType == "siteSearch") {
      } else {
        if (this.searchType.searchEngine == "bing") {
          this.searchUrl = `https://cn.bing.com/search?q=${this.keywords}`;
          ele.href = this.searchUrl;
          ele.target = "_blank";
          ele.click();
        } else if (this.searchType.searchEngine == "baidu") {
          this.searchUrl = `https://www.baidu.com/s?wd=${this.keywords}`;
          ele.href = this.searchUrl;
          ele.target = "_blank";
          ele.click();
        }
      }
    },
    // 获取到本地的token
    getLocalToken() {
      let token = getStorage("token");
      if (token) {
        getProfile().then((result) => {
          if (result.code == 500) {
            this.$store.commit(type.RESET_STORE_ITEM, "userInfo");
          }
        });
      }
    },
  },
  created() {
    this.getliveLinks();
    this.getLocalToken();
  },
  watch: {
    $route(newValue, oldValue) {
      this.getId();
      this.getLinks();
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  padding: 10px 50px 0 10px;
  .searchBox {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    .serache {
      width: 800px;
      height: 100px;
      .srasch-title {
        display: flex;
        .srasch-title-type {
          padding: 10px;
          transition: all 0.5s ease;
          cursor: pointer;
        }
      }
      .srasch-wrap {
        display: flex;
        .searchLink {
          display: none;
        }
      }
    }
  }
  .my-links {
    .my-link-title {
      font-weight: 700;
    }
    .edit-my-links {
      font-size: 14px;
      display: flex;
      span {
        padding: 0 10px;
      }
    }
    .my-link-wrap {
      padding: 10px;
      display: flex;
      flex-wrap: wrap;
      .my-link-wrap-item {
        position: relative;
        .icon-position {
          position: absolute;
          right: 5px;
          top: 0px;
          padding: 5px;
          border-radius: 10px;
          background-color: #ef9a9a;
          color: #fff;
          cursor: pointer;
          transition: all 0.2s ease;
          &:hover {
            transform: scale(1.05);
          }
        }
      }
      // 添加链接按钮
      .add-link {
        margin: 10px;
        width: 150px;
        height: 90px;
        background-color: #eeeeee;
        border-radius: 5px;
        border: 4px dotted #999;
        text-align: center;
        line-height: 90px;
        cursor: pointer;
      }
    }
  }
  .dialogBody {
    .dialogBodyIpt {
      margin: 5px 0px;
    }
  }
  .dialogFooter {
    cursor: pointer;
  }
  .on {
    background-color: #409eff;
  }
}
</style>
