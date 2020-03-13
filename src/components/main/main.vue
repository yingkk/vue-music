<template>
  <div class="main-wrap">
    <div class="main" v-for="(item, index) in dataList" :key="`main-item-index-${index}`">
      <div class="slider-btn left" @click="preHandler(index)">
        <i class="fa fa-angle-left"></i>
      </div>
      <div class="main-item">
        <div class="item-hd">
          <span>{{ item.title }}</span>
        </div>
        <tabs-tag :tabs="item.tabs" :index="index" @selectTabHandler="selectTabHandler"></tabs-tag>
        <slider-tag :currentTabData="currentTabData[index] || []" ref="slider"></slider-tag>
      </div>
      <div class="slider-btn right" @click="nextHandler(index)">
        <i class="fa fa-angle-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
import tabsTag from "./tabs/tabs";
import sliderTag from "./slider/slider";
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      currentTabData: {}
      //1. 用this.$store.state.变量名
      // dataList: this.$store.state.dataList
    };
  },
  created() {
    //???  打印的是函数？
    console.log(this.firstDataListItem);
  },
  //2. 用computed
  // computed: {
  //   dataList(){
  //     return this.$store.state.dataList;
  //   }
  // },
  // 3. 用mapState
  // computed: mapState(["dataList"]),
  // 4. 用对象展开运算符
  computed: {
    firstDataListItem() {
       return this.$store.state.getters.getDataListFirstItem
    }
    ,
    ...mapState([
      "dataList"
    ]),
    ...mapGetters([
      'getDataListFirstItem',
      'getTabsListById'
    ])
    //如果想要换getters名字
    // ,
    // ...mapGetters({
    //   item: 'getDataListFirstItem'
    // })
  },

  methods: {
    selectTabHandler({ index, id }) {
      var currentTab = this.dataList[index].tabs.filter(t => t.id === id)[0];
      this.currentTabData[index] = currentTab.items;
      this.currentTabData = JSON.parse(JSON.stringify(this.currentTabData));
    },
    preHandler(index) {
      const sliderObj = this.$refs.slider[index];
      sliderObj.currentPageIndex = sliderObj.currentPageIndex
        ? --sliderObj.currentPageIndex
        : sliderObj.totalPage - 1;
      sliderObj.gotoPage(sliderObj.currentPageIndex);
    },
    nextHandler(index) {
      const sliderObj = this.$refs.slider[index];
      sliderObj.currentPageIndex =
        sliderObj.currentPageIndex === sliderObj.totalPage - 1
          ? 0
          : ++sliderObj.currentPageIndex;
      this.$refs.slider[index].gotoPage(sliderObj.currentPageIndex);
    }
  },
  components: {
    tabsTag,
    sliderTag
  }
};
</script>

<style scoped lang="scss">
.main-wrap {
  width: 100%;
  .main {
    width: 100%;
    min-height: 532px;
    display: flex;
    justify-content: center;
    align-items: center;
    //background-color: #f5f5f5;
    .main-item {
      width: 1200px;
      height: 100%;
      .item-hd {
        font-size: 32px;
        font-weight: bold;
        width: 100%;
        height: 40px;
        padding: 50px 0 24px;
      }
    }
    .slider-btn {
      display: none;
      cursor: pointer;
      color: #999;
      font-size: 50px;
      text-align: center;
      line-height: 100px;
      width: 80px;
      height: 100px;
      background-color: #ddd;
    }
    .left {
      position: absolute;
      left: 0;
    }
    .right {
      position: absolute;
      right: 0;
    }
  }
  .main:hover .slider-btn {
    display: block;
  }
}
</style>