<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-15 17:00:42
 * @LastEditors: xx
 * @LastEditTime: 2021-10-05 18:14:14
-->
<template>
  <div id="wang--edit" @input="handleInput"></div>
</template>

<script>
import wangEditor from "wangeditor";

export default {
  name: "",
  data() {
    return {
      editor: null,
      editorData: "",
    };
  },
  mounted() {
    const editor = new wangEditor(`#wang--edit`);
    // 配置 onchange 回调函数，将数据同步到 vue 中
    editor.config.onchange = (newHtml) => {
      this.editorData = newHtml;
    };
    // 设置编辑器高度
    editor.config.height = 500;
    // 设置层级
    editor.config.zIndex = 1;
    // 创建编辑器
    editor.create();
    this.editor = editor;
  },
  methods: {
    handleInput() {
      this.$emit("input", this.editorData);
    },
  },
  beforeDestroy() {
    // 调用销毁 API 对当前编辑器实例进行销毁
    this.editor.destroy();
    this.editor = null;
  },
};
</script>

<style lang="scss" scoped></style>
