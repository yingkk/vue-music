<template>
  <div class="hot-wrap">
    <div class="hot-song">
      <div class="hot-song-item" v-for="(item, index) in dataItems" :key="`hot-song-item-${index}`">
        <div class="hot-song-item-img">
          <a :href="item.url">
            <img :src="item.imgUrl" :alt="item.title" />
          </a>
        </div>
        <div class="hot-song-item-other title">{{ item.title }}</div>
        <div class="hot-song-item-other num">播放量：{{ item.num }}w</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["currentPageData"],
  data() {
    return {
      dataItems: this.currentPageData
    };
  },
  watch: {
    currentPageData: {
      handler(val) {
        this.dataItems = val;
      },
      deep: true
    }
  }
};
</script>

<style scoped lang="scss">
.hot-wrap {
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  .hot-song {
    width: 1220px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    .hot-song-item {
      width: 224px;
      margin-right: 20px;
      .hot-song-item-img {
        width: 100%;
        height: 224px;
        margin-bottom: 10px;
        a img {
          width: 224px;
        }
      }
      .hot-song-item-other {
        text-align: left;
        font-size: 14px;
        width: 100%;
        min-height: 22px;
      }
      .title {
        font-weight: 400;
      }
      .num {
        color: #999;
      }
    }
  }
}
</style>