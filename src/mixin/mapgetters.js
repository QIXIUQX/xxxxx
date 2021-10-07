/*
 * @Description:
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-08 14:41:30
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-11 18:59:54
 */
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      categoryList: "getCategoryList",
      tagList: "getTagsList",
      links: "getLinks",
      currentPosition: "getCurrentPosition",
      userInfo: "getUserInfo",
    }),
  },
};
