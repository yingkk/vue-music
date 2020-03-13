<template>
  <div class="slider-content-wrap">
    <div
      class="slider-content"
      v-for="(item, index) in  currentPageData"
      :key="`slider-content-item-${index}`"
    >
      <!-- <transition-group name="bounce"> -->
      <div class="slider-content-img">
        <a :href="item.url">
          <transition name="bounce">
            <img
              :src="item.imgUrl"
              :alt="item.label"
              @mouseover="setShowPlay(index)"
              @mouseleave="setShowPlay(index)"
            />
          </transition>
        </a>

        <transition name="bounce">
          <div class="slider-play" v-if="mouseIndex === index ? isShowPlay : ''">
            <i class="fa fa-play"></i>
          </div>
        </transition>
      </div>
      <!-- </transition-group > -->

      <div class="slider-desc">{{ item.label }}</div>

      <div class="slider-desc other">{{ item.other }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["currentPageData", "isPlay"],
  data() {
    return {
      isShowPlay: false,
      mouseIndex: ""
    };
  },
  methods: {
    setShowPlay(index) {
      console.log("aaa");
      this.mouseIndex = index;
      if (this.isPlay) {
        this.isShowPlay = !this.isShowPlay;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.slider-content-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  .slider-content {
    width: 224px;
    .slider-content-img {
      position: relative;
      width: 100%;
      height: 224px;
      margin-bottom: 10px;
      img {
        width: 100%;
      }
      .bounce-enter-active {
        animation: bounce-in 0.5s;
      }
      .bounce-leave-active {
        animation: bounce-in 0.5s reverse;
      }
      @keyframes bounce-in {
        0% {
          transform: scale(0);
        }
        50% {
          transform: scale(1.5);
        }
        100% {
          transform: scale(1);
        }
      }
      .slider-play {
        // display: none;
        position: absolute;
        left: 50%;
        top: 50%;
        width: 50px;
        height: 50px;
        margin-left: -25px;
        margin-top: -25px;
        background-color: #fff;
        border-radius: 50%;
        font-size: 20px;
        color: #999;
        i {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
    .slider-desc {
      text-align: left;
      font-size: 14px;
      font-weight: 400;
      min-height: 22px;
    }
    .other {
      color: #999;
    }
  }
  //根据isPlay显示
  // .slider-content-img:hover .slider-play {
  //   display: block;
  // }
}
</style>