<template>
  <div class="slider-content-wrap">
    <div class="slider-content">
      <div
        class="slider-content-item"
        v-for="(item, index) in  currentPageData"
        :key="`slider-item-simple-${index}`"
      >
        <a :href="item.url">
          <img :src="item.imgUrl" :alt="item.label" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["currentPageData"]
};
</script>

<style scoped lang="scss">
.slider-content-wrap {
  width: 100%;
  height: 100%;
  .slider-content {
    width: 100%;
    height: 246px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 10px;
    .slider-content-item {
      width: 590px;

      padding-right: 20px;
      img {
        width: 590px;
        height: 236px;
      }
    }
  }
}
</style>