/*
 * @Description:
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-07 13:21:44
 * @LastEditors: xx
 * @LastEditTime: 2021-10-03 20:21:38
 */
import { requestServer } from "./request";
// 获取分类信息
export function searchByTag(id) {
  return requestServer({
    url: "/api/search",
    method: "GET",
    params: {
      tagId: id,
    },
  });
}

//根据关键词检索信息
export function linkSearchByKeyword(keyword) {
  return requestServer({
    url: "/api/linksearch",
    method: "GET",
    params: { keyword: keyword },
  });
}
