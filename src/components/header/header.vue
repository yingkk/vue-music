<template>
  <div class="header-wrap">
    <div class="header">
      <div class="header-main">
        <div class="header-logo">
          <a href="//y.qq.com">
            <img src="//y.gtimg.cn/mediastyle/yqq/img/logo.png?nowebp=1" alt="QQ音乐" />
          </a>
        </div>
        <nav-tag />
        <search-tag />
        <option-tag />
      </div>
      <div class="header-subnav">
        <subnav-tag />
      </div>
    </div>
  </div>
</template>

<script>
import navTag from "./nav/nav";
import searchTag from "./search/search";
import optionTag from "./options/options";
import subnavTag from "./subnav/subnav";
export default {
  data() {
    return {};
  },
  components: {
    navTag,
    searchTag,
    optionTag,
    subnavTag
  }
};
</script>

<style scoped lang="scss">
.header-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  .header {
    width: 1200px;
    height: 142px;
    font-size: 18px;
    color: #000;
    font-weight: bold;
    .header-main {
      width: 100%;
      height: 90px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .header-logo {
        display: flex;
        align-items: center;
        width: 170px;
        height: 100%;
        a {
          text-align: center;
        }
      }
    }
    .header-subnav {
      width: 100%;
      height: 52px;
      border-top: 1px solid #c9c9c9;
    }
  }
}
</style>