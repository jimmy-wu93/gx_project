<style lang="scss" scoped>
.mainPage {
}
</style>
<style lang="scss">
input::-webkit-input-placeholder {
  font-size: 18px;
  line-height: 18px;
  color: #919191;
  font-weight: bold;
  text-align: center;
}
</style>
<template>
  <div class="mainPage">
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
</script>
