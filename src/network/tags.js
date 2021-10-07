/*
 * @Description:
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-07 21:40:13
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-12 12:46:57
 */
// 获取标签
import { requestServer } from "./request";

export function getTags() {
  return requestServer({
    url: "/api/tags",
  });
}

// 添加标签
export function newtags(tagName) {
  return requestServer({
    url: "/api/newtags",
    method: "POST",
    data: { tagName },
  });
}
