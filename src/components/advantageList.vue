<style lang="scss" scoped>
.advantageList {
  width: 100%;
  background: #f5f3f3;
  padding: 70px 0;
  .advantageTitle {
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
  .advantageDesc {
    opacity: 0.7;
    font-size: 24px;
    color: #545454;
    letter-spacing: 0;
    text-align: center;
    font-weight: 500;
    margin-bottom: 50px;
  }
  .advantageItem {
    margin: 0 auto;
    width: 50%;
    flex-wrap: wrap;
    .itemContent {
      margin: 15px;
      width: 353px;
      height: 302px;
      background: #fff;
      border-radius: 16px;
      box-shadow: 0 2px 11px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      .itemPic {
        width: 353px;
        height: 211px;
        // border-radius: 16px 16px 0 0;
      }
      .itemDesc {
        height: 81px;
        background: #ffffff;
        font-size: 20px;
        color: #5f5f5f;
        letter-spacing: 0;
        text-align: center;
        font-weight: 600;
      }
    }
  }
}
</style>
<template>
  <div class="advantageList">
    <div class="advantageTitle flex-cc">
      <div class="titleDivider"></div>
      <p class="titleName">我们的优势</p>
      <div class="titleDivider"></div>
    </div>
    <div class="advantageDesc">
      <p>致力于为退休学员提供专业服务</p>
    </div>
    <div class="advantageItem flex-cc">
      <div v-for="(item, k) in advantageItem" :key="k" class="itemContent">
        <img :src="item" alt="" class="itemPic" />
        <div class="itemDesc flex-cc">
          <p>覆盖三十余品类 百余课程</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue';

const advantageItem = reactive([
  'https://hs-schedule.hongsong.club/website/fengjin/./pages/home/components/AdvantageSection/ys-pic01.png',
  'https://hs-schedule.hongsong.club/website/fengjin/./pages/home/components/AdvantageSection/ys-pic02.png',
  'https://hs-schedule.hongsong.club/website/fengjin/./pages/home/components/AdvantageSection/ys-pic03.png',
  'https://hs-schedule.hongsong.club/website/fengjin/./pages/home/components/AdvantageSection/ys-pic04.png',
  'https://hs-schedule.hongsong.club/website/fengjin/./pages/home/components/AdvantageSection/ys-pic05.png',
  'https://hs-schedule.hongsong.club/website/fengjin/./pages/home/components/AdvantageSection/ys-pic06.png'
])
</script>