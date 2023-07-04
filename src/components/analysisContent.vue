<style lang="scss" scoped>
.analysisContent {
  padding: 90px 0px 120px 0px;
  background: #f5f3f3;
  .analysisTitle {
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
  .analysisDesc {
    opacity: 0.7;
    font-size: 24px;
    color: #545454;
    letter-spacing: 0;
    text-align: center;
    font-weight: 500;
    margin-bottom: 50px;
  }
  .analysisItem {
    width: 60%;
    margin: 0 auto;
    justify-content: space-around;
    .item {
      font-size: 20px;
      color: rgba(0, 0, 0, 0.5);
      letter-spacing: 0;
      text-align: center;
      line-height: 30px;
      font-weight: 600;
    }
    .analysisPic {
      width: 311px;
      height: 322px;
      margin-bottom: 16px;
    }
  }
}
</style>
<template>
  <div class="analysisContent">
    <div class="analysisTitle flex-cc">
      <div class="titleDivider"></div>
      <p class="titleName">学习闭环</p>
      <div class="titleDivider"></div>
    </div>
    <div class="analysisDesc">
      <p>熟能生巧&nbsp;重在坚持</p>
    </div>
    <div class="analysisItem flex">
      <div v-for="(item, i) in analysisItem" :key="i" class="flex-scl item">
        <img :src="item.iconUrl" alt="" class="analysisPic" />
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue';

const analysisItem = reactive([{
  title: '基础练习课 提前打好基础',
  iconUrl: require('@/assets/img/lessonBefore.png')
}, {
  title: '课上师生互动问答 全程沉浸式学习',
  iconUrl: require('@/assets/img/lesson.png')
}, {
  title: '课程可会看 课后作业与答疑扩展活动',
  iconUrl: require('@/assets/img/lessonAfter.png')
}])
</script>