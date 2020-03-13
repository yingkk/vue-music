<template>
  <div class="header-search">
    <div class="header-search-inner">
      <div class="search-input">
        <input type="text" placeholder="搜索音乐、MV、歌单、用户" @click="showSmartBox(isShowSmartBox)" />
      </div>
      <div class="search-btn">
        <i class="fa fa-search"></i>
      </div>
      <div class="search-smart-box" v-show="isShowSmartBox">
        <div class="search-smart-box-hot">
          <div
            class="search-smart-hot-item"
            v-for="(item, index) in hotItems"
            :key="`hot-smart-${index}`"
          >
            <a :href="item.url">
              <span class="hot-no">{{ item.no }}</span>
              <span class="hot-name">{{ item.name }}</span>
              <span class="hot-number">{{ item.number }}</span>
            </a>
          </div>
        </div>
        <div class="smart-box-history"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowSmartBox: false,
      hotItems: [
        {
          no: 1,
          name: "我们的歌",
          number: "76.6W",
          url: ""
        },
        {
          no: 2,
          name: "冰雪奇缘",
          number: "75.6W",
          url: ""
        },
        {
          no: 3,
          name: "桥边姑娘",
          number: "74.6W",
          url: ""
        },
        {
          no: 4,
          name: "星辰大海",
          number: "73.6W",
          url: ""
        },
        {
          no: 5,
          name: "大凯凯",
          number: "72.6W",
          url: ""
        }
      ]
    };
  },
  methods: {
    showSmartBox(value) {
      this.isShowSmartBox = !value;
    }
  }
};
</script>

<style scoped lang="scss">
.header-search {
  display: flex;
  align-items: center;
  width: 220px;
  height: 100%;
  .header-search-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    height: 36px;
    border: 1px solid #c9c9c9;
    border-radius: 3px;
    .search-input {
      margin-left: 11px;
      input {
        width: 174px;
        height: 36px;
        padding: 0;
        border: none;
        outline: none;
      }
      input::-webkit-input-placeholder {
        font-size: 14px;
      }
    }
    .search-btn {
      margin-right: 8px;
      &:hover {
        color: #31c27c;
      }
    }
    .search-smart-box {
      position: absolute;
      top: 36px;
      left: -1px;
      width: 218px;
      background-color: #fff;
      border: 1px solid #c9c9c9;
      font-size: 14px;
      .search-smart-box-hot {
        width: 218px;
        overflow: hidden;
        padding: 5px 0;
        .search-smart-hot-item {
          width: 196px;
          height: 36px;
          line-height: 36px;
          padding: 0 11px;
          color: #333;
          a {
            display: block;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .hot-no {
              display: block;
              width: 18px;
              padding: 0 10px;
              color: #ff4222;
            }
            .hot-name {
              display: block;
              width: 56px;
              color: #333;
            }
            .hot-number {
              display: block;
              padding: 0 10px;
              width: 37px;
              color: #333;
            }
          }
        }
      }
    }
  }
}
</style>