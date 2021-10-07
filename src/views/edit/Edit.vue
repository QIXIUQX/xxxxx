<template>
  <div class="editor">
    <!-- 编辑列表 开始-->
    <div class="editor-list">
      <!-- 图标 -->
      <i class="iconfont icon-setting-filling setting-icon"></i>
      <a
        href="javascript:;"
        v-for="(item, i) in menuList"
        :class="{
          active: active == i,
        }"
        :key="i"
        @click="handleMenuClick(item, i)"
        >{{ item.title }}</a
      >
    </div>
    <!-- 编辑列表结束 -->
    <!-- 二级路由跳转 -->
    <router-view></router-view>
  </div>
</template>

<script>
import { getProfile } from "@/network/profile.js";
import { removeStorage, saveStorage } from "@/utils/localstorage";
import * as type from "@/store/mutationsType";

export default {
  name: "Home",
  data() {
    return {
      menuList: [
        {
          id: 1,
          title: "添加一级分类",
          path: "/edit/addcategory",
        },
        {
          id: 2,
          title: "添加二级分类",
          path: "/edit/addsecondcategory",
        },
        {
          id: 4,
          title: "添加新标签",
          path: "/edit/addnewtag",
        },
        {
          id: 3,
          title: "添加新网站",
          path: "/edit/addnewlink",
        },
        {
          id: 6,
          title: "修改链接信息",
          path: "/edit/updatelinks",
        },
        {
          id: 5,
          title: "编写更新日志",
          path: "/edit/addnewupdated",
        },
      ],
      active: -1,
    };
  },
  methods: {
    handleMenuClick(item, i) {
      this.$router.push(item.path).catch((err) => err);
      this.active = i;
    },
    getProfile() {
      getProfile().then((res) => {
        if (res.code !== 200 && res.data.code === 3) {
          this.$router.push("/login").catch((err) => err);
          removeStorage("userInfo");
          // removeStorage("token");
          this.$store.commit(type.RESET_STORE_ITEM, "userInfo");
        } else {
          saveStorage("userInfo", res.data);
          this.$store.commit(type.SET_USER_INFO, res.data);
        }
      });
    },
  },
  created() {
    this.getProfile();
  },
};
</script>

<style lang="scss" scoped>
.editor {
  .editor-list {
    width: 100%;
    background-color: #fff;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
    .setting-icon {
      padding-left: 15px;
      color: #777;
    }
    a {
      padding: 20px;
      color: #333;
      &:hover {
        color: #ff6dc4;
      }
    }
    .active {
      color: #ff6dc4;
    }
  }
}
</style>
