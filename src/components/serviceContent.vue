<style lang="scss" scoped>
.serviceContent {
  width: 100%;
  padding: 70px 0;
  .serviceTitle {
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
  .serviceDesc {
    opacity: 0.7;
    font-size: 0.5rem;
    color: #545454;
    letter-spacing: 0;
    text-align: center;
    font-weight: 500;
    margin-bottom: 50px;
  }
  .serviceItem {
    width: 100%;
    padding: 36px;
    justify-content: space-around;
    flex-wrap: wrap;
    .item {
      // width: 33%;
      height: auto;
      overflow: hidden;
      margin-bottom: 16px;
      .itemPic {
        width: 100%;
        height: 200px;
      }
      .itemTitle {
        margin: 30px 0px 20px 0px;
        font-size: 0.6rem;
        color: #db3143;
        letter-spacing: 0;
        text-align: center;
        font-weight: 700;
      }
      .itemDesc {
        white-space: pre-wrap;
        opacity: 0.5;
        font-size: 0.4rem;
        color: #000;
        text-align: center;
        font-weight: 400;
      }
    }
  }
}
</style>
<template>
  <div class="serviceContent">
    <div class="serviceTitle flex-cc">
      <div class="titleDivider"></div>
      <p class="titleName">课程服务</p>
      <div class="titleDivider"></div>
    </div>
    <div class="serviceDesc">
      <p>知识学得快，记得牢</p>
    </div>
    <div class="serviceItem flex-cc">
      <div v-for="(item, i) in serviceItem" :key="i" class="flex-ccl item">
        <img :src="item.icon" alt="" class="itemPic" />
        <p class="itemTitle">{{ item.title }}</p>
        <p class="itemDesc">{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue';

const serviceItem = reactive([{
  icon: require('@/assets/img/serviceTeacher.png'),
  title: '三师伴读',
  desc: '授课老师、助理老师、\n班主任三师伴读、专业化教学'
}, {
  icon: require('@/assets/img/serviceInduce.png'),
  title: '阶段总结',
  desc: '定期阶段化学习总结\n学习目标更清晰'
}, {
  icon: require('@/assets/img/serviceWarning.png'),
  title: '提醒服务',
  desc: '班主任在线提供服务课程提醒、\n作业提醒、疑问解答等'
}])
</script>