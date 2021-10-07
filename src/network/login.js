/*
 * @Description:
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-11 13:53:03
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-12 12:46:50
 */

// 登录
import { requestServer } from "./request";

// 登录
export function login(username, password) {
  return requestServer({
    url: "/api/login",
    method: "POST",
    data: { username, password },
  });
}
