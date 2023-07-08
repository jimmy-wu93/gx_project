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
      font-size: 24px;
      color: #545454;
      letter-spacing: 0;
      text-align: center;
      font-weight: 400;
    }
  }
  .categoryContent {
    width: 65%;
    margin-top: 50px;
    flex-wrap: wrap;
    justify-content: space-around;
    .contentItem {
      width: 33%;
      margin-bottom: 16px;
      position: relative;
      text-align: center;
      &:hover {
        transform: translate(-3px, -3px);
        transition: all 0.6s;
      }
      .contentPic {
        position: relative;
        max-width: 375px;
        height: 211px;
        border-radius: 16px;
        box-shadow: 12px 18px 18px -4px rgba(195, 197, 217, 1);
        &::after {
          content: '';
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: 9;
          background: rgba(0, 0, 0, 0.6);
          border-radius: 16px;
          display: inline-block;
        }
        .contentDesc {
          z-index: 1000;
          font-size: 32px;
          font-weight: bold;
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
    <div class="categoryContent flex-cc">
      <div
        v-for="(item, i) in categoryItem"
        :key="i"
        class="contentItem cursor"
      >
        <div
          class="contentPic flex-ccl"
          :style="{
            background: `url(${item.imgUrl})`,
            'background-repeat': 'no-repeat',
            'background-size': 'cover',
          }"
        >
          <p class="contentDesc ft-cWhite">{{ item.title }}</p>
        </div>
      </div>
    </div>
    <div class="categoryExplain mt-40">
      <p>覆盖类目包括但不限于展示内容</p>
    </div>
  </div>
</template>
<script setup>
import { computed, reactive } from 'vue';
const categoryItem = [{
  title: '国画',
  imgUrl: require('../assets/img/system01.png')
}, {
  title: '手机摄影',
  imgUrl: require('../assets/img/system02.png')
}, {
  title: '书法',
  imgUrl: require('../assets/img/system03.png')
}, {
  title: '养生健康',
  imgUrl: require('../assets/img/system04.png')
}, {
  title: '易学',
  imgUrl: require('../assets/img/system05.png')
}, {
  title: '正念冥想',
  imgUrl: require('../assets/img/system06.png')
},];
</script>