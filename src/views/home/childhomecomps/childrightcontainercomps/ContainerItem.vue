<template>
  <ul class="list-item clearfix">
    <li v-for="(item, i) in items" :key="i">
      <a :href="items[i].url" target="_blank" :title="items[i].title">
        <p>{{ items[i].title }}</p>
        <span>{{ items[i].desc }}</span>
      </a>
    </li>
  </ul>
</template>
<script>
//import  from "";
// const  =()=>import("components/common/footer/Footer")
export default {
  name: "",
  props: {
    items: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  components: {},

  created() {
    // console.log(this.items);
  },
};
</script>
<style lang="less" scoped>
.list-item {
  width: 100%;
  height: 100%;
  li {
    float: left;
    width: 33.333%;
    height: 70px;
    padding: 5px 10px;
    a {
      display: block;
      width: 100;
      height: 100%;
      background-color: #fafbfc;
      border: 1px solid #e1e4e8;
      transition: all 0.25s;
      &:hover {
        border: 1px solid#39d45d;
      }
      p {
        padding: 0 10px;
        float: left;
        width: 100%;
        height: 35px;
        line-height: 35px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      span {
        display: block;
        padding: 0 10px;
        float: left;
        width: 100%;
        height: 25px;
        line-height: 25px;
      }
    }
  }
}
</style>