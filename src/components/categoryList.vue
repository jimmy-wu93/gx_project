<style lang="scss" scoped>
.categoryList {
  background: #f5f3f3;
  padding-top: 70px;
  padding-bottom: 70px;
  flex-direction: column;
  .categoryTitle {
    width: 100%;
    .titleName {
      font-size: 40px;
      color: #ca4444;
      letter-spacing: 0;
      text-align: center;
      font-weight: 700;
      margin: 0 30px;
    }
    .titleDivider {
      background: #979797;
      height: 2px;
      width: 110px;
      opacity: 0.23;
    }
  }
  .categoryDesc {
    .descName {
      opacity: 0.7;
      font-size: 24px;
      color: #545454;
      letter-spacing: 0;
      text-align: center;
      font-weight: 400;
    }
  }
  .categoryContent {
    margin-top: 50px;
    .contentPic {
      background: yellow;
      width: 375px;
      height: 211px;
      margin: 3px;
    }
    .contentPic02 {
      background: red;
      width: 280px;
      height: 165px;
      margin: 3px;
    }
  }
  .categoryExplain {
    opacity: 0.7;
    font-size: 18px;
    color: #000;
    letter-spacing: 0;
    text-align: center;
    font-weight: 500;
  }
}
</style>
<template>
  <div class="categoryList flex-cc">
    <div class="categoryTitle flex-cc">
      <div class="titleDivider"></div>
      <p class="titleName">覆盖品类</p>
      <div class="titleDivider"></div>
    </div>
    <div class="categoryDesc">
      <p class="descName">为兴趣而学，点亮退休生活热情</p>
    </div>
    <div class="categoryContent">
      <div class="flex-sc">
        <div class="contentPic"></div>
        <div class="contentPic"></div>
        <div class="contentPic"></div>
      </div>
      <div class="flex-sc">
        <div class="contentPic02"></div>
        <div class="contentPic02"></div>
        <div class="contentPic02"></div>
        <div class="contentPic02"></div>
      </div>
    </div>
    <div class="categoryExplain mt-40">
      <p>覆盖类目包括但不限于展示内容</p>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>