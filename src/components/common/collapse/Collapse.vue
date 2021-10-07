<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-08 12:48:40
 * @LastEditors: xx
 * @LastEditTime: 2021-09-21 20:46:02
-->
<template>
  <div class="x-ui-collspace">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "XCollapse",
  props: {
    value: {
      type: Array,
      default: [],
    },
  },
  provide() {
    return {
      collapse: this,
    };
  },
  created() {
    this.$on("itemChange", (item) => {
      let idx = this.value.indexOf(item);
      if (idx > -1) {
        this.value.splice(idx, 1);
      } else {
        this.value.push(item);
      }
    });
  },
};
</script>

<style lang="scss" scoped></style>
