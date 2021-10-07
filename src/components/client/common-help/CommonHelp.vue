<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: xx
 * @Date: 2021-10-04 17:15:47
 * @LastEditors: xx
 * @LastEditTime: 2021-10-05 18:06:04
-->
<template>
  <div class="common-help">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CommonHelp",
};
</script>

<style lang="scss" scoped>
.common-help {
  margin-top: 5px;
  font-size: 13px;
  color: #999;
}
</style>
