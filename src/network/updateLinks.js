/*
 * @Description:
 * @Version: 2.0
 * @Autor: xx
 * @Date: 2021-09-30 22:48:20
 * @LastEditors: xx
 * @LastEditTime: 2021-10-07 17:01:54
 */

import { requestServer } from "./request";

/**
 * 获取所有的链接
 * @param {*} categoryId  分类id
 * @returns 查询到的结果
 */
export function getLinks(categoryId) {
  return requestServer({
    url: "/api/links",
    params: { categoryId },
  });
}
/**
 * 更新链接,
 * @param {*} categoryId 分类id
 * @param {*} linkTitle 分类标题
 * @param {*} linkTags 标签
 * @param {*} linkDesc 链接描述
 * @param {*} link 链接
 * @param {*} iconLink 链接icon
 * @param {*} id 要修改的链接id
 * @returns 修改结果,成功或者失败
 */
export function updatelink(
  categoryId,
  linkTitle,
  linkTags,
  linkDesc,
  link,
  iconLink,
  id
) {
  return requestServer({
    url: "/api/updatelink",
    method: "POST",
    data: { categoryId, linkTitle, linkTags, linkDesc, link, iconLink, id },
  });
}

/**
 * 根据关键字查询链接
 * @param {*} keyword 关键字
 * @returns 保护关键字的链接
 */
export function linkSearchByKeyword(keyword) {
  return requestServer({
    url: "/api/linksearch",
    method: "GET",
    params: { keyword: keyword },
  });
}

/**
 * 根据关键字查询链接
 * @param {*} keyword 关键字
 * @returns 保护关键字的链接
 */
export function deleteLinkById(id) {
  return requestServer({
    url: "/api/deletelink",
    method: "POST",
    data: { id: id },
  });
}
