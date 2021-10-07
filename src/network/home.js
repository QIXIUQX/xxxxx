/*
 * @Description:
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-07 13:21:44
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-12 12:46:41
 */
import { requestServer } from "./request";
// 获取分类信息
export function getCategory() {
  return requestServer({
    url: "/api/category",
    method: "GET",
    params: {},
  });
}
