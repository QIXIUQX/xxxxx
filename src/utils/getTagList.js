/*
 * @Description:
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-09 01:57:16
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-16 23:59:52
 */
/**
 *
 * @param {*} tagList 全部标签列表
 * @param {*} tagIds 当前item 所拥有的标签列表
 * @returns
 */
export function getTagList(tagList, tagIds) {
  let idArr = tagIds.split(",");
  let tags = [];
  for (let i = 0; i < idArr.length - 1; i++) {
    tagList.forEach((item) => {
      if (item.tagId === idArr[i]) {
        tags.push(item);
      }
    });
  }
  return tags;
}
