/*
 * @Description:
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-11 20:48:05
 * @LastEditors: xx
 * @LastEditTime: 2021-09-30 21:34:09
 */
const Edit = () => import("../views/edit/Edit.vue");

const AddCategory = () => import("../views/add-category/AddCategory.vue");
const AddNewLink = () => import("../views/add-new-link/AddNewLink.vue");
const AddNewUpdated = () =>
  import("../views/add-new-updated/AddNewUpdated.vue");
const AddSecondCategory = () =>
  import("../views/add-second-category/AddSecondCategory.vue");
const AddNewTag = () => import("../views/add-new-tag/AddNewTag.vue");
const UpdateLinks = () => import("../views/update-links/UpdateLinks.vue");

const edit = [
  {
    path: "/edit",
    component: Edit,
    meta: {
      title: "编辑 - XXXXX的储物间",
      isHeader: true,
      isToken: true,
    },
    children: [
      {
        path: "/edit/addcategory",
        component: AddCategory,
        meta: {
          title: "添加一级分类 - XXXXX的储物间",
          isHeader: true,
          isToken: true,
        },
      },
      {
        path: "/edit/addnewlink",
        component: AddNewLink,
        meta: {
          title: "添加新网站 - XXXXX的储物间",
          isHeader: true,
          isToken: true,
        },
      },
      {
        path: "/edit/addnewupdated",
        component: AddNewUpdated,
        meta: {
          title: "编辑更新日志 - XXXXX的储物间",
          isHeader: true,
          isToken: true,
        },
      },
      {
        path: "/edit/addsecondcategory",
        component: AddSecondCategory,
        meta: {
          title: "添加二级分类 - XXXXX的储物间",
          isHeader: true,
          isToken: true,
        },
      },
      {
        path: "/edit/addnewtag",
        component: AddNewTag,
        meta: {
          title: "添加新标签 - XXXXX的储物间",
          isHeader: true,
          isToken: true,
        },
      },
      {
        path: "/edit/updatelinks",
        name: "UpdateLinks",
        component: UpdateLinks,
        meta: {
          title: "编辑链接 - XXXXX的储物间",
          isHeader: true,
          isToken: true,
        },
      },
    ],
  },
];

export { edit };
