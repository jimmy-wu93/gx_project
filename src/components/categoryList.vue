<style lang="scss" scoped>
@mixin maskStyle {
  .mask {
    position: relative;
    display: inline-block;
  }
  .mask:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .mask:hover:before {
    opacity: 1;
  }
}

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
    // width: 50%;
    width: 800px;
    height: 800px;
    margin-top: 50px;
    flex-wrap: wrap;
    .contentItem {
      width: 375px;
      height: 211px;
      margin-bottom: 24px;
      position: relative;
      text-align: center;
      // float: left;
      &:hover {
        transform: translate(-3px, -3px);
        transition: all 0.6s;
        opacity: 0.7;
      }
      .contentPic {
        // width: 375px;
        width: 100%;
        // height: 211px;
        margin: 0px 12px 24px 12px;
        box-shadow: 12px 18px 18px -4px rgba(195, 197, 217, 1);
      }
      .contentDesc {
        width: calc(100% + 24px);
        position: absolute;
        bottom: 86px;
        z-index: 1000;
        font-size: 32px;
        font-weight: bold;
        &:hover {
          color: rgba($color: #000000, $alpha: 0.8);
        }
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
      <p class="titleName">课程覆盖</p>
      <div class="titleDivider"></div>
    </div>
    <div class="categoryDesc">
      <p class="descName">不止于学习，更为点燃生活热情</p>
    </div>
    <div class="categoryContent flex-ccl">
      <div
        v-for="(item, i) in categoryItem"
        :key="i"
        class="contentItem cursor"
      >
        <img
          :src="require(`@/assets/img/system0${i + 1}.png`)"
          alt=""
          class="contentPic mask br-8"
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