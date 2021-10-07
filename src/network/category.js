/*
 * @Description:
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-07 18:15:45
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-12 12:46:39
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

// 添加分类
export function newcategory(categoryTitle, categoryIcon) {
  return requestServer({
    url: "/api/newcategory",
    method: "POST",
    data: { categoryTitle, categoryIcon },
  });
}
// 获取分类信息
export function getSecondCategory(categoryId) {
  return requestServer({
    url: "/api/secondcategory",
    method: "GET",
    params: { categoryId },
  });
}
// 添加二级分类
export function newsecondcategory(title, categoryId) {
  return requestServer({
    url: "/api/newsecondcategory",
    method: "POST",
    data: { title, categoryId },
  });
}
