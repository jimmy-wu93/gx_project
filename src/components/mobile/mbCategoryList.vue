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

.mbCategoryList {
  background: #f5f3f3;
  padding-top: 70px;
  padding-bottom: 70px;
  flex-direction: column;
  .categoryTitle {
    width: 100%;
    .titleName {
      font-size: 1.1rem;
      color: #ca4444;
      letter-spacing: 0;
      text-align: center;
      font-weight: 700;
      margin: 0 30px;
    }
    .titleDivider {
      background: #979797;
      height: 2px;
      width: 10vw;
      opacity: 0.23;
    }
  }
  .categoryDesc {
    .descName {
      opacity: 0.7;
      font-size: 0.5rem;
      color: #545454;
      letter-spacing: 0;
      text-align: center;
      font-weight: 400;
    }
  }
  .categoryContent {
    width: 100vw;
    margin-top: 50px;
    flex-wrap: wrap;
    justify-content: space-around;
    .contentItem {
      width: calc(50vw - 32px);
      margin-bottom: 16px;
      position: relative;
      .contentPic {
        // width: 100%;
        // height: 100%;
        box-shadow: 12px 18px 18px -4px rgba(195, 197, 217, 1);
      }
      .contentDesc {
        text-align: center;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 40%;
        z-index: 1000;
        font-size: 0.5rem;
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
  <div class="mbCategoryList flex-cc">
    <div class="categoryTitle flex-cc">
      <div class="titleDivider"></div>
      <p class="titleName">课程覆盖</p>
      <div class="titleDivider"></div>
    </div>
    <div class="categoryDesc">
      <p class="descName">不止于学习，更为点燃生活热情</p>
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
          class="contentPic mask br-8"
        />
        <div class="contentDesc ft-cWhite">
          <p>{{ item }}</p>
        </div>
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
</script>