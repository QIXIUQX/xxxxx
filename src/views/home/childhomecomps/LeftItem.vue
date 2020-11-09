<template>
  <div class="left-item">
    <a
      href="javascript:;"
      v-for="(item, i) in categoryItems"
      :key="i"
      @click="clickItem(i)"
      :class="{ on: active == i }"
      >{{ item.title }}</a
    >
  </div>
</template>
<script>
//import  from "";
// const  =()=>import("components/common/footer/Footer")
export default {
  name: "",
  props: {
    categoryItems: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      active: 0,
    };
  },
  components: {},
  methods: {
    clickItem(index) {
      this.active = index;
      this.$emit("clickItem", index);
    },
  },
};
</script>
<style lang="less" scoped>
.left-item {
  a {
    display: block;
    line-height: 50px;
    text-align: center;
    line-height: 50px;
    width: 100%;
    height: 50px;
    transition: all 0.25s;
    color: black;
    &:hover {
      background-color: #115b97;
    }
  }
  .on {
    color: #ffffff;
    background-color: #024ea4;
  }
}
</style>