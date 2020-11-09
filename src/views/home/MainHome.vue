<template>
  <div class="home">
    <div class="wrapper">
      <div class="primary">
        <div class="left">
          <LeftItem
            :categoryItems="homeCategroy"
            @clickItem="leftItemClick"
          ></LeftItem>
        </div>
        <div class="right">
          <RightContainer :getData="homeData[currentIindex]"></RightContainer>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const LeftItem = () => import("./childhomecomps/LeftItem");
const RightContainer = () => import("./childhomecomps/RightContainer");
export default {
  name: "",
  props: {
    homeCategroy: {
      type: Array,
    },
    homeData: { type: Object },
  },
  data() {
    return {
      currentIindex: "secondCommonlyused",
      // homeCategory: ["常用网站", "冷们", "编程,开发"],
    };
  },
  components: {
    LeftItem,
    RightContainer,
  },
  methods: {
    leftItemClick(index) {
      switch (index) {
        case 0:
          this.currentIindex = "secondCommonlyused";
          break;
        case 1:
          this.currentIindex = "secondBtDownLoad";
          break;
        case 2:
          this.currentIindex = "secondMovies";
          break;
        case 3:
          this.currentIindex = "secondUnpopular";
          break;
        case 4:
          this.currentIindex = "programming";
          break;

        default:
          break;
      }
      // console.log(this.homeData);
      // console.log(homeCategroy);
    },
    getSecondData(type) {
      this.categorysecondData.list = this.homeData[type];
    },
  },
  created() {
    // console.log(this.homeCategroy);
  },
};
</script>
<style lang="less" scoped>
.home {
  position: absolute;
  left: 0;
  top: 70px;
  right: 0;
  bottom: 80px;
  .wrapper {
    height: 100%;
    .primary {
      display: flex;
      // position: relative;
      height: 100%;
      .left {
        // position: absolute;
        // left: 0;
        // top: 0;
        width: 280px;
        background-color: #fff;
      }
      .right {
        flex: 1;
        width: 100%;
        height: 100%;
        margin: 0 0 0 20px;
        background-color: #fff;
      }
    }
  }
}
</style>