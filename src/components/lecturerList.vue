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
    margin-top: 50px;
    .contentPic {
      width: 274px;
      min-height: 218px;
      overflow: hidden;
      margin-top: 12px;
      &:hover {
        transition: 1s;
        transform: scale(1.1);
      }
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
  z-index: 1;
  &.is-active {
    opacity: 0.9;
    z-index: 2;
  }
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
        :interval="8000"
        type="card"
        height="400px"
        indicator-position="outside"
        @change="carouselChange"
      >
        <el-carousel-item v-for="(item, key) in lecturerItem" :key="key">
          <div>
            <img :src="item.picUrl" alt="" class="contentPic" />
            <h3>{{ item.teacherName }}</h3>
          </div>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue'

const lecturerItem = reactive([{
  teacherName: '明明老师',
  picUrl: require('@/assets/img/teacherMing.png')
}, {
  teacherName: '成瑞老师',
  picUrl: require('@/assets/img/teacherRui.png')
}, {
  teacherName: '德华老师',
  picUrl: require('@/assets/img/teacherDe.png')
}, {
  teacherName: '谦煜老师',
  picUrl: require('@/assets/img/teacherQian.png')
}, {
  teacherName: '夏南老师',
  picUrl: require('@/assets/img/teacherXia.png')
}])

function carouselChange(e) {
  console.log(e)
}
</script>