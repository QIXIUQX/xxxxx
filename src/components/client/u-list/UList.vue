<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-07 14:30:00
 * @LastEditors: xx
 * @LastEditTime: 2021-09-30 22:32:39
-->
<template>
  <ul class="u-list">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "",
};
</script>

<style lang="scss" scoped>
.u-list {
  width: 100%;
  height: max-content;
  list-style: none;
  & > :nth-child(2n) {
    background-color: #f5f5f5;
  }
}
</style>
