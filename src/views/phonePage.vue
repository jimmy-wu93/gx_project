<style lang="scss" scoped>
.phonePage {
  position: relative;
  .custom-el-affix {
    width: 100vw;
    height: 6;
    position: fixed;
    bottom: 0px;
    z-index: 3000;
    .contactTelephone {
      background: rgba(52, 88, 44, 1);
      padding: 8px;
      justify-content: space-around;
      .contactImg {
        width: auto;
        height: 24px;
        display: block;
      }
    }
  }
  .mbBanner {
    position: relative;
    .custom-vant-banner-image {
      overflow: hidden;
      width: 100%;
    }
    .bannerIcon {
      position: absolute;
      width: calc(100vw / 7);
      left: 5%;
      top: 10%;
    }
  }
  .mbRegister {
    background: hsla(0, 0%, 100%, 0.8);
    margin-bottom: 28px;
    padding: 25px;
    .registerTitle {
      font-size: 0.7rem;
      color: #5f5f5f;
      font-weight: bold;
      text-align: center;
    }
    .registerDescribe {
      font-size: 0.4rem;
      color: #5f5f5f;
      font-weight: 400;
      opacity: 0.6;
      text-align: center;
    }
    .tableDesc {
      color: #a2a2a2;
      text-align: center;
      font-weight: 600;
    }
    .tablePhone {
      // width: 325px;
      width: 100%;
      height: 56px;
      margin-bottom: 25px;
    }
    .custom_el_button {
      // width: 325px;
      width: 100%;
      height: 56px;
      border-color: #ca4444;
      font-family: SourceHanSansCN-Regular;
      font-size: 24px;
      color: #fff;
      letter-spacing: 0;
      text-align: center;
      font-weight: 400;
      background: rgba(202, 68, 68, 1);
      border-radius: 28px;
      &:hover {
        background: rgba(202, 68, 68, 0.8);
      }
    }
  }
}
</style>
<style lang="scss">
.custom_banner_el_input {
  width: 100%;
  height: 56px;
  border-radius: 28px;
  //   border: 0px;
  outline: none;
  .el-input__wrapper {
    border-radius: 28px;
  }
  .is-focus {
    // box-shadow: none;
  }
  .el-input__inner {
    font-size: 24px;
    line-height: 24px;
    text-align: center;
  }
}
</style>
<template>
  <div class="phonePage">
    <el-affix :offset="10" class="custom-el-affix">
      <div class="contactTelephone flex-cc">
        <div class="flex-cc">
          <img
            src="@/assets/img/telephone.png"
            alt=""
            class="contactImg mr-8"
          />
          <p class="fs-18 ft-cWhite title">客服热线：</p>
          <p class="fs-26 ft-cWhite fw-b">400-6688-175</p>
        </div>
      </div>
    </el-affix>
    <div class="mbBanner">
      <van-image
        :src="require('@/assets/img/mbBanner.png')"
        fit="space-down"
        class="custom-vant-banner-image"
      />
      <img src="@/assets/img/bannerLogo.png" alt="" class="bannerIcon" />
    </div>
    <div class="mbRegister flex-ccl">
      <p class="registerTitle">免费领取</p>
      <p class="registerDescribe">精彩试听课</p>
      <div class="tablePhone mt-9">
        <el-input
          placeholder="请输入手机号"
          class="custom_banner_el_input"
          v-model="phoneNumber"
          maxlength="11"
          clearable
        ></el-input>
      </div>
      <el-button
        class="custom_el_button"
        @click="primaryButton"
        v-loading.fullscreen.lock="fullscreenLoading"
        >立即领取</el-button
      >
      <p class="tableDesc mt-18 fs-16">青松有伴会保护您的隐私</p>
    </div>
    <mbCategoryList></mbCategoryList>
    <mbLecturerList></mbLecturerList>
    <mbAdvantageList></mbAdvantageList>
    <serviceContent></serviceContent>
    <mbAnalysisContent></mbAnalysisContent>
    <receiveFooter></receiveFooter>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus'
import mbCategoryList from '../components/mobile/mbCategoryList.vue';
import mbLecturerList from '../components/mobile/mbLecturerList.vue';
import mbAdvantageList from '@/components/mobile/mbAdvantageList.vue'
import serviceContent from '@/components/serviceContent.vue';
import mbAnalysisContent from '@/components/mobile/mbAnalysisContent.vue';
import receiveFooter from '@/components/receiveFooter.vue';

const phoneNumber = ref('')
const fullscreenLoading = ref(false)

function primaryButton(e) {
  let mobileReg = /^1[3-9]\d{9}$/
  if (!phoneNumber.value.trim()) {
    ElMessage.error('手机号码输入为空，请重新输入')
  } else if (!mobileReg.test(phoneNumber.value)) {
    ElMessage.error('手机号输入有误，请重新输入')
  } else {
    fullscreenLoading.value = true;
    setTimeout(() => {
      fullscreenLoading.value = false;
      ElMessage({
        message: '手机号提交成功',
        type: 'success',
        onClose() {
          phoneNumber.value = ''
        }
      })
    }, 1000)
  }
}
</script>