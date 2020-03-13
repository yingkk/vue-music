<template>
  <div class="header-option">
    <div class="header-option-login">
      <a href="#">登录</a>
    </div>
    <div class="header-option-btn">
      <div class="btn-item btn-green">
        <a href="#">开通绿钻豪华版</a>
      </div>
    </div>
    <div class="header-option-btn">
      <div class="btn-item">
        <a href="#">开通付费包</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.header-option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 264px;
  height: 100%;
  .header-option-login {
    display: flex;
    align-items: center;
    width: 38px;
    height: 100%;
    margin-right: 10px;
    a:hover {
      color: #31c27c;
    }
  }
  .header-option-btn {
    height: 100%;
    display: flex;
    align-items: center;
    .btn-item {
      width: 100%;
      height: 38px;
      padding: 0 9px;
      margin-left: 10px;
      font-size: 13px;
      line-height: 38px;
      border: 1px solid #c9c9c9;
      border-radius: 3px;
    }
    .btn-green {
      background-color: #31c27c;
      border-color: #31c27c;
      a {
        color: #fff;
      }
    }
  }
}
</style>