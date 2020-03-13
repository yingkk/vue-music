<template>
  <div class="header-nav">
    <div v-for="(item, index) in navItems" :key="`nav-item-${index}`">
      <div
        v-if="item.childMenu"
        @mouseenter="enterHandler"
        @mouseleave="leaveHandler"
        :class="['header-nav-item', activeNavIndex === index ? 'click-light' : 'hover-light']"
        @click="chooseNavHandler(index)"
      >
        <a :href="item.url" :title="item.label">{{item.label}}</a>
        <img v-if="item.markUrl" :src="item.markUrl" />

        <div class="nav-item-popups" v-show="isChildMenuShow">
          <div
            class="nav-popup"
            v-for="(menu, index) in item.childMenu"
            :key="`child-menu-${index}`"
          >{{ menu }}</div>
          <div class="nav-popup download-btn">
            <button>下载体验</button>
          </div>
        </div>
      </div>
      <div
        v-else
        :class="['header-nav-item', activeNavIndex === index ? 'click-light' : 'hover-light']"
        @click="chooseNavHandler(index)"
      >
        <a :href="item.url" :title="item.label">{{item.label}}</a>
        <img v-if="item.markUrl" :src="item.markUrl" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChildMenuShow: false,
      activeNavIndex: 0,
      navItems: [
        {
          label: "音乐馆",
          url: "//y.qq.com"
        },
        {
          label: "我的音乐",
          url: "/portal/profile.html"
        },
        {
          label: "客户端",
          url: "//y.qq.com/download/index.html",
          childMenu: [
            "HQ高品质 全员开启",
            "独家音效 全面升级",
            "轻盈视觉 动态皮肤"
          ],
          markUrl: "http://y.gtimg.cn/mediastyle/yqq/extra/mark_1.png"
        },
        {
          label: "开放平台",
          url: "//y.qq.com/artists"
        },
        {
          label: "VIP",
          url: "//y.qq.com/portal/vipportal/index.html"
        }
      ]
    };
  },
  created() {
    this.activeNav = this.navItems[0];
  },
  methods: {
    chooseNavHandler(index) {
      this.activeNavIndex = index;
    },
    enterHandler() {
      this.isChildMenuShow = true;
    },
    leaveHandler() {
      this.isChildMenuShow = false;
    }
  }
};
</script>

<style scoped lang="scss">
.header-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header-nav-item {
    position: relative;
    height: 90px;
    padding: 0 20px;
    line-height: 90px;
    img {
      position: absolute;
      margin-top: 18px;
      right: 0;
      height: 14px;
    }
    .nav-item-popups {
      position: absolute;
      top: 68px;
      left: 20px;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.35);
      border-radius: 4px;
      width: 160px;
      background-color: #fff;
      font-size: 12px;
      .nav-popup {
        width: 144px;
        margin-left: 16px;
        margin-right: 0;
        padding: 5px 0;
        height: 22px;
        line-height: 22px;
      }
      .download-btn {
        text-align: center;
        width: 120px;
        height: 15px;
        margin-bottom: 5px;
        button {
          width: 110px;
          background-color: #31c27c;
          border-radius: 10px;
          border-color: #31c27c;
        }
      }
    }
  }
  .click-light {
    background-color: #31c27c;
    a {
      color: #fff;
    }
  }
  .hover-light a:hover {
    color: #31c27c;
  }
}
</style>