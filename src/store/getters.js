/*
 * @Description:
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-07 14:11:44
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-15 14:37:51
 */
export default {
  getCategoryList(state) {
    return state.categoryList;
  },
  getTagsList(state) {
    return state.tagsList;
  },
  getLinks(state) {
    return state.links;
  },
  getCurrentPosition(state) {
    return state.currentPosition;
  },
  getUserInfo(state) {
    return state.userInfo;
  },
  getLiveLinks(state) {
    return state.liveLinks;
  },
};
