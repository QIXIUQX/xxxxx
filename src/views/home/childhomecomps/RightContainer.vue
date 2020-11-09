<template>
  <div class="container">
    <div class="container-header">
      <h2>{{ getData.list.title }}</h2>
    </div>
    <div class="container-main">
      <ContainerItem :items="getData.list.rows"></ContainerItem>
    </div>
  </div>
</template>
<script>
//import  from "";
const ContainerItem = () => import("./childrightcontainercomps/ContainerItem");
export default {
  name: "",
  props: {
    getData: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  components: { ContainerItem },
  created() {
    // console.log(this.getData);
  },
};
</script>
<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  height: 100%;
  .container-header {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #e1e4e8;

    h2 {
      padding: 0 30px;
      width: 100%;
      height: 50px;
      line-height: 50px;
    }
  }
  .container-main {
    overflow: auto;
    padding: 10px;
    flex: 1;
  }
}
</style>