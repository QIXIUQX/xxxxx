/*
 * @Description:
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-07 14:11:23
 * @LastEditors: xx
 * @LastEditTime: 2021-09-29 00:49:27
 */
import * as type from "./mutationsType";
import { saveStorage, getStorage } from "@/utils/localstorage";

export default {
  // 设置一级分类
  [type.SET_CATEGORY](state, categoryArr) {
    state.categoryList = categoryArr;
  },
  // 设置二级分类
  [type.SET_SECOND_CATEGORY](state, payLoad) {
    let category = state.categoryList;
    if (category) {
      category.forEach((item) => {
        item.secondCategory = [];
        payLoad.forEach((secondItem) => {
          if (item.categoryId == secondItem.categoryId) {
            item.secondCategory.push(secondItem);
          }
        });
      });
    }
  },
  // 设置标签
  [type.SET_TAGS](state, tagsArr) {
    state.tagsList = tagsArr;
    saveStorage("tagsList", state.tagsList);
  },
  // 设置链接
  [type.SET_LINKS](state, links) {
    state.links = links;
  },
  // 设置当前位置
  [type.SET_CURRENT_POSITION](state, position) {
    state.currentPosition = position;
  },

  // 将选择的链接保存到本地
  [type.SET_LIVE_LINKS](state, linksItem) {
    let liveLinks = state.liveLinks;
    let isSave = liveLinks.some((item) => {
      if (item.id == linksItem.id) return true;
    });
    if (!isSave) {
      state.liveLinks.push(linksItem);
      saveStorage("liveLinks", state.liveLinks);
    }
  },
  // 获取本地我的链接的数据
  [type.GET_LIVE_LINKS](state) {
    let liveLinks = getStorage("liveLinks");
    if (liveLinks == "") {
      return;
    }
    state.liveLinks = liveLinks;
    // console.log(liveLinks);
  },
  // 删除本地的某个链接
  [type.DELETE_LIVE_LINKS](state, id) {
    state.liveLinks.forEach(function(linkItem, i) {
      if (linkItem.id === id) {
        state.liveLinks.splice(i, 1);
      }
    });
    saveStorage("liveLinks", state.liveLinks);
    // this.commit(type.GET_LIVE_LINKS);
  },

  // 设置登录后的用户信息
  [type.SET_USER_INFO](state, payLoad) {
    state.userInfo.push(payLoad);
    // console.log(state);
  },
  // 初始化store
  [type.INIT_STORE]() {
    this.commit(type.GET_LIVE_LINKS);
    let userInfo = getStorage("userInfo");
    if (userInfo == "") {
      return;
    }
    this.commit(type.SET_USER_INFO, userInfo);
  },
  // 重置store中某些项
  [type.RESET_STORE_ITEM](state, payLoad) {
    state[payLoad] = [];
  },
};
