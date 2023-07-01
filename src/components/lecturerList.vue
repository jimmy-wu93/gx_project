<style lang="scss" scoped>
.lecturerList {
  background: #fff;
  padding-top: 70px;
  padding-bottom: 70px;
  .lecturerTitle {
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
  .lecturerDesc {
    opacity: 0.7;
    font-size: 24px;
    color: #545454;
    letter-spacing: 0;
    text-align: center;
    font-weight: 400;
  }
  .lecturerContent {
    // width: 300px;
    margin-top: 50px;
    .contentPic {
      width: 274px;
      height: 218px;
    }
  }
}
</style>
<style lang="scss" scoped>
.el-carousel__item {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

// .el-carousel__item:nth-child(2n) {
//   background-color: #99a9bf;
// }

// .el-carousel__item:nth-child(2n + 1) {
//   background-color: #d3dce6;
// }
</style>
<template>
  <div class="lecturerList">
    <div class="lecturerTitle flex-cc">
      <div class="titleDivider"></div>
      <p class="titleName">明星讲师</p>
      <div class="titleDivider"></div>
    </div>
    <div class="lecturerDesc">
      <p>用耐心与专业，为每一课护航</p>
    </div>
    <div class="lecturerContent">
      <el-carousel
        :interval="6000"
        type="card"
        height="320px"
        pause-on-hover
        arrow="always"
        loop
        indicator-position="outside"
      >
        <el-carousel-item v-for="(item, key) in lecturerItem" :key="key">
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <img :src="item" alt="" class="contentPic" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue'

const lecturerItem = reactive([
  'https://hs-schedule.hongsong.club/website/fengjin/pages/home/components/StarLecturer/lecturer-xiaojiang-gq.png',
  'https://hs-schedule.hongsong.club/website/fengjin/pages/home/components/StarLecturer/lecturer-xiaotian-gq.png',
  'https://hs-schedule.hongsong.club/website/fengjin/pages/home/components/StarLecturer/lecturer-xiaoyin-gq.png',
  'https://hs-schedule.hongsong.club/website/fengjin/pages/home/components/StarLecturer/lecturer-xiaofei-gq.png',
])
</script>