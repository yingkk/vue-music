<template>
  <div class="slider-wrap">
    <div class="slider">
      <div class="action left" @click="prevHandler">
        <i class="fa fa-angle-left"></i>
      </div>
      <div class="slider-main">
        <template v-if="theme === 'default'">
          <default-theme :currentPageData="currentPageData" :isPlay="isPlay"></default-theme>
        </template>
        <template v-else-if="theme === 'more'">
          <more-theme :currentPageData="currentPageData" :isPlay="isPlay"></more-theme>
        </template>
        <template v-else-if="theme === 'simple'">
           <simple-theme :currentPageData="currentPageData"></simple-theme>
        </template>
      </div>
      <div class="action right" @click="nextHandler">
        <i class="fa fa-angle-right"></i>
      </div>
    </div>
    <div class="slider-page">
      <div
        :class="['slider-page-item', index === currentPageIndex ? 'active' : '']"
        @click="gotoPage(index)"
        v-for="(item, index) in totalPage"
        :key="`slider-page-item-${index}`"
      ></div>
    </div>
  </div>
</template>

<script>
import defaultTheme from './theme/defaultTheme';
import moreTheme from './theme/moreTheme';
import simpleTheme from './theme/simpleTheme';

export default {
  props: ["dataItems"],
  data() {
    return {
      currentPageIndex: 0,
      currentPageData: [],
      totalPage: "",
      isLoop: "",
      isPlay: false,
      pageSize: 1,
      theme: "default",
      tempDataItems: []
    };
  },
  created() {
    const compProp = this.$attrs;
    this.isLoop = compProp.hasOwnProperty("isLoop");
    this.isPlay = compProp.hasOwnProperty("isPlay");
    this.theme = compProp.theme ? compProp.theme : this.theme;
    this.pageSize = compProp.sliderSize;
    this.currentPageData = this.dataItems.slice(0, this.pageSize);
    this.totalPage = Math.ceil(this.dataItems.length / this.pageSize);
    this.tempDataItems = this.dataItems;
  },
  methods: {
    prevHandler() {
      if (this.isLoop) {
        this.currentPageIndex = this.currentPageIndex
          ? --this.currentPageIndex
          : this.totalPage - 1;
      } else {
        this.currentPageIndex = this.currentPageIndex
          ? --his.currentPageIndex
          : 0;
      }
      this.gotoPage(this.currentPageIndex);
    },
    nextHandler() {
      if (this.isLoop) {
        this.currentPageIndex =
          this.currentPageIndex === this.totalPage - 1
            ? 0
            : ++this.currentPageIndex;
      } else {
        this.currentPageIndex =
          this.currentPageIndex === this.totalPage - 1
            ? this.totalPage - 1
            : ++this.currentPageIndex;
      }
      this.gotoPage(this.currentPageIndex);
    },
    gotoPage(index) {
      this.currentPageIndex = index;
      const tempLen = this.pageSize * this.totalPage;
      if (this.dataItems.length === tempLen) {
        this.currentPageData = this.dataItems.slice(
          index * this.pageSize,
          (index + 1) * this.pageSize
        );
      } else {
        this.tempDataItems = this.tempDataItems.concat(this.dataItems);
        this.currentPageData = this.tempDataItems.slice(
          index * this.pageSize,
          (index + 1) * this.pageSize
        );
      }
    }
  },
  components: {
    defaultTheme,
    moreTheme,
    simpleTheme
  }
};
</script>

<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
}
.slider-wrap {
  width: 100%;
  min-height: 283px;
  .slider {
    min-height: 283px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .slider-main {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      margin: 0 auto;
      width: 85%;
      height: 100%;
    }
    .action {
      display: none;
      font-size: 50px;
      color: #999;
      width: 80px;
      height: 100px;
      line-height: 100px;
      background-color: #eee;
    }
  }
  .slider:hover .action {
    display: block;
  }
  .slider-page {
    width: 100%;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    .slider-page-item {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #ddd;
      margin-right: 10px;
    }
    .active {
      background-color: #999;
    }
  }
}
</style>