<style lang="scss" scoped>
.mainPage {
  width: 100%;
  .custom-el-affix {
    position: fixed;
    right: 0px;
    z-index: 1000;
  }
  .contactTelephone {
    width: 260px;
    height: 76px;
    background: #fff;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.03);
    border-radius: 8px 1px 1px 8px;
    border: 1px solid #e6e6e6;
    .title {
      color: #585858;
      font-weight: bold;
    }
    .divider {
      width: 1px;
      height: 52px;
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.03);
      border: 1px solid #d5d5d5;
      margin-left: 12px;
      margin-top: 3px;
    }
  }
}
</style>
<style lang="scss">
input::-webkit-input-placeholder {
  font-size: 0.4rem;
  line-height: 20px;
  color: #919191;
  font-weight: bold;
  text-align: center;
}
img {
  -moz-user-drag: none; /* Firefox */
  -khtml-user-drag: none; /* Safari */
  -webkit-user-drag: none; /* Chrome 和 Safari */
  -o-user-drag: none; /* Opera */
}
</style>
<template>
  <div class="mainPage">
    <el-affix
      position="top"
      :offset="offsetHeight || 300"
      class="custom-el-affix"
    >
      <div class="contactTelephone flex-cc">
        <div class="flex-ssl">
          <p class="fs-18 title">客服热线</p>
          <p class="fs-26 ft-cDanger fw-b">400-6688-175</p>
        </div>
        <div class="divider"></div>
        <img src="@/assets/img/telephone.png" alt="" class="w-38 h-38 ml-8" />
      </div>
    </el-affix>
    <FirstBanner></FirstBanner>
    <CategoryList></CategoryList>
    <LecturerList></LecturerList>
    <AdvantageList></AdvantageList>
    <ServiceContent></ServiceContent>
    <AnalysisContent></AnalysisContent>
    <ReceiveFooter></ReceiveFooter>
  </div>
</template>
<script setup>
import FirstBanner from '../components/firstBanner.vue';
import CategoryList from '@/components/categoryList.vue';
import LecturerList from '../components/lecturerList.vue';
import AdvantageList from '../components/advantageList.vue';
import ServiceContent from '@/components/serviceContent.vue';
import AnalysisContent from '@/components/analysisContent.vue';
import ReceiveFooter from '../components/receiveFooter.vue';
import { computed, ref } from 'vue';

const offsetHeight = computed(() => {
  return window.screen.availHeight - 260
})
</script>
