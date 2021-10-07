<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: xx
 * @Date: 2021-10-04 17:25:36
 * @LastEditors: xx
 * @LastEditTime: 2021-10-05 04:45:10
-->
<template>
  <div class="common-tips">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CommonTips",
};
</script>

<style lang="scss" scoped>
.common-tips {
  margin: 15px 5px;
  font-size: 14px;
  color: #999;
}
</style>
