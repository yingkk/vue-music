<template>
  <div class="subnav">
    <div @click="selectSubNav(index)"
      :class="['subnav-item', activeItemIndex === index ? 'high-light' : '']"
      v-for="(item, index) in subnavItems"
      :key="`sub-nav-${index}`" 
    >
      <a :href="item.url">{{ item.label }}</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeItemIndex: 0,
      subnavItems: [
        {
          label: "首页",
          url: ""
        },
        {
          label: "歌手",
          url: ""
        },
        {
          label: "新碟",
          url: ""
        },
        {
          label: "排行榜",
          url: ""
        },
        {
          label: "分类歌单",
          url: ""
        },
        {
          label: "电台",
          url: ""
        },
        {
          label: "MV",
          url: ""
        },
        {
          label: "数字专辑",
          url: ""
        },
        {
          label: "票务",
          url: ""
        }
      ]
    };
  },
  methods: {

    selectSubNav(index) {
      this.activeItemIndex = index;
    }
  }
};
</script>

<style scoped lang="scss">
.subnav {
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  // justify-content: flex-start;
  align-items: center;
  font-size: 15px;
  font-weight: none;
  .subnav-item {
    height: 100%;
    margin-right: 47px;
    line-height: 52px;
    a:hover {
      color: #31c27c;
    }
  }
  .high-light {
    a {
      color: #31c27c;
    }
  }
}
</style>