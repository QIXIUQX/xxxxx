/*
 * @Description:
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-11 13:53:03
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-12 12:46:53
 */

// 登录
import { requestServer } from "./request";

// 登录
export function getProfile() {
  return requestServer({
    url: "/api/user/profile",
    method: "get",
    // data: { username, password },
  });
}
