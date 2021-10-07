<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-07 14:30:09
 * @LastEditors: xx
 * @LastEditTime: 2021-09-30 22:43:14
-->
<template>
  <li class="u-list-item">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: "",
};
</script>

<style lang="scss" scoped>
.u-list-item {
  height: 40px;
  line-height: 40px;
  list-style: none;
  transition: all 0.1s ease-in;
  &:hover {
    background-color: #eee !important;
  }
}
</style>
