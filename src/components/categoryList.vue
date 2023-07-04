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
    width: 75%;
    margin-top: 50px;
    flex-wrap: wrap;
    .contentItem {
      position: relative;
      text-align: center;
      // float: left;
      &:hover {
        transform: translate(-3px, -3px);
        transition: all 0.6s;
      }
      .contentPic {
        width: 375px;
        height: 211px;
        margin: 0px 12px 24px 12px;
        box-shadow: 12px 18px 18px -4px rgba(195, 197, 217, 1);
      }
      .contentDesc {
        width: 100%;
        position: absolute;
        bottom: 110px;
        z-index: 1000;
        font-size: 32px;
        font-weight: bold;
      }
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
    <div class="categoryContent flex-cc">
      <div
        v-for="(item, i) in categoryItem"
        :key="i"
        class="contentItem cursor"
      >
        <img
          :src="require(`@/assets/img/system0${i + 1}.png`)"
          alt=""
          class="contentPic br-8"
        />
        <p class="contentDesc ft-cWhite">{{ item }}</p>
      </div>
    </div>
    <div class="categoryExplain mt-40">
      <p>覆盖类目包括但不限于展示内容</p>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue';
const categoryItem = ['国画', '手机摄影', '书法', '养生健康', '易学', '正念冥想'];

// const categorySystemList = reactive(['@/assets/img/system01.png', '@/assets/img/system02.png', '@/assets/img/system03.png'])
</script>