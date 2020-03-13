<template>
  <div class="item-tabs">
    <div
      :class="['item-tabs-detail', item.id === currentTabId ? 'active' : '']"
      @click="clickHandler(item.id)"
      v-for="(item, index) in tabList"
      :key="`item-tabs-detail-${index}`"
    >
      <a>{{ item.label }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props:['tabs','index'],
  data() {
    return {
      currentTabId: '',
      tabList: this.tabs,
    };
  },
  created() {
     this.currentTabId = this.tabs[0].id;
     this.$emit("selectTabHandler",  {index: this.index, id:this.currentTabId});
  },
  methods: {
    clickHandler(id) {
      this.currentTabId = id;
      this.$emit("selectTabHandler",  {index: this.index, id});
    }
  }
};
</script>

<style scoped lang="scss">
.item-tabs {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  .item-tabs-detail {
    font-size: 15px;
    margin: 0 24px;
  }
  .active {
    a {
      color: #31c27c;
    }
  }
}
</style>