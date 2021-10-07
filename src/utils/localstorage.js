/*
 * @Description:
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-08 19:19:56
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-11 22:44:43
 */

/**
 *
 * @param {*} key 存储时候的名称
 * @param {*} value 存储的值
 * @returns 存储的key
 */
function saveStorage(key, value) {
  if (!key.trim()) {
    throw new Error("key does not empty");
  }
  localStorage.setItem(key, JSON.stringify(value));
  return key;
}
/**
 *
 * @param {*} key 获取的名称
 * @returns 获取的结果 ，如果没有则返回空字符串
 */
function getStorage(key) {
  if (!key.trim()) {
    throw new Error("key does not empty");
  }
  return JSON.parse(localStorage.getItem(key)) || "";
}

function removeStorage(key) {
  if (!key.trim()) {
    throw new Error("key does not empty");
  }
  localStorage.removeItem(key);
  return key;
}
export { saveStorage, getStorage, removeStorage };
