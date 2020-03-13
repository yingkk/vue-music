<template>
  <div class="slider-content-wrap">
    <div
      class="slider-content-item"
      v-for="(item, index) in currentPageData"
      :key="`slider-content-more-${index}`"
    >
      <div class="content-img">
        <a :href="item.url">
          <img :src="item.imgUrl" :alt="item.label" />
        </a>
        <div class="slider-play" v-show="isPlay">
          <i class="fa fa-play"></i>
        </div>
      </div>
      <div class="content-desc">
        <div class="content-desc-item title">{{ item.label }}</div>
        <div class="content-desc-item other">{{ item.other }}</div>
      </div>
      <div class="content-time">{{ item.time }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["currentPageData", "isPlay"],
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.slider-content-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .slider-content-item {
    width: 378px;
    height: 87px;
    margin: -1px 30px 13px 0;
    padding-top: 12px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .content-img {
      position: relative;
      width: 86px;
      height: 86px;
      margin-right: 14px;
      img {
        width: 86px;
      }
      .slider-play {
        display: none;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -20px;
        margin-top: -20px;
        width: 40px;
        height: 40px;
        background-color: #fff;
        border-radius: 50%;
        color: #999;
        i {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
    .content-img:hover .slider-play {
      display: block;
    }
    .content-desc {
      width: 50%;
      height: 100%;
      .content-desc-item {
        color: black;
        text-align: left;
        font-size: 14px;
      }
      .title {
        font-weight: 400;
        height: 23px;
      }
      .other {
        color: #999;
        height: 21px;
      }
    }
    .content-time {
      width: 38px;
      height: 100%;
      color: #999;
    }
  }
}
</style>