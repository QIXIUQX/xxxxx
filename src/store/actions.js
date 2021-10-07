/*
 * @Description:
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-07 14:11:29
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-08 17:07:25
 */
import { getTags } from "@/network/tags";
import * as type from "@/store/mutationsType";
import { getCategory, getSecondCategory } from "@/network/category";
import { getLinks } from "@/network/links";

export default {
  // 获取全部一级分类
  getCategory({ commit, dispatch }) {
    getCategory().then((res) => {
      // console.log(res.data);
      commit(type.SET_CATEGORY, res.data);
      dispatch("getSecondCategory");
    });
  },
  //获取二级分类
  getSecondCategory({ commit }) {
    getSecondCategory().then((res) => {
      commit(type.SET_SECOND_CATEGORY, res.data);
    });
  },
  // 获取全部标签
  getTags({ commit }) {
    getTags().then((res) => {
      commit(type.SET_TAGS, res.data);
    });
  },
  //获取链接
  getLinks({ commit }, payLoad) {
    getLinks(payLoad).then((res) => {
      commit(type.SET_LINKS, res.data);
    });
  },
};
