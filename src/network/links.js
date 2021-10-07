/*
 * @Description:
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-07 22:38:33
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-12 12:46:47
 */
import { requestServer } from "./request";

// 添加链接
export function newlink(
  categoryId,
  linkTitle,
  linkTags,
  linkDesc,
  link,
  iconLink
) {
  return requestServer({
    url: "/api/newlink",
    method: "POST",
    data: { categoryId, linkTitle, linkTags, linkDesc, link, iconLink },
  });
}

//获取链接
export function getLinks(categoryId) {
  return requestServer({
    url: "/api/links",
    params: { categoryId },
  });
}
