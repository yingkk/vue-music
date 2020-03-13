<template>
  <div class="slider">
    <div class="item-slider">
      <hot-tag :currentPageData="currentPageData"></hot-tag>
    </div>
    <div class="item-slider-pages">
      <div
        @click="gotoPage(index)"
        :class="['page-btn',index === currentPageIndex ? 'active': '']"
        v-for="(item, index) in totalPage"
        :key="`page-index-${index}`"
      ></div>
    </div>
  </div>
</template>

<script>
import hotTag from "./hot/hot";

export default {
  props: ["currentTabData"],
  data() {
    return {
      totalPage: 0,
      sliderSize: 5,
      currentPageData: [],
      currentPageIndex: 0,
      tempData: []
    };
  },
  watch: {
    currentTabData(val) {
      this.tempData = this.currentTabData;
      this.currentPageData = this.currentTabData.slice(0, this.sliderSize);
      this.totalPage = Math.ceil(this.currentTabData.length / this.sliderSize);
    }
  },
  methods: {
    gotoPage(index) {
      this.currentPageIndex = index;
      // this.$emit("getPageHandler", {
      //   pageIndex: this.currentPageIndex,
      //   pages: this.totalPage
      // });
      var index = index > this.totalPage - 1 ? this.totalPage - 1 : index;
      const tempPageDataLength = this.totalPage * this.sliderSize;
      if (tempPageDataLength === this.currentTabData.length) {
        this.currentPageData = this.currentTabData.slice(
          index * this.sliderSize,
          (index + 1) * this.sliderSize
        );
      } else {
        this.tempData = this.tempData.concat(this.currentTabData);
        this.currentPageData = this.tempData.slice(
          index * this.sliderSize,
          (index + 1) * this.sliderSize
        );
      }
    }
  },
  components: {
    hotTag
  }
};
</script>

<style lang="scss" scoped>
.slider {
  width: 100%;
  height: 348px;
  .item-slider {
    width: 100%;
    height: 310px;
  }
  .item-slider-pages {
    width: 100%;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    .page-btn {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.1);
      margin-right: 10px;
    }
    .active {
      background-color: #999;
    }
  }
}
</style>