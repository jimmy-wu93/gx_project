<style lang="scss" scoped>
.firstBanner {
  width: 100%;
  display: flex;
  //   background:linear-gradient(to right, rgb(46, 70, 39),#FFFFFF);
  background: rgb(46, 70, 39);
  .bannerPic {
    margin: 0 auto;
    position: relative;
    .bannerIcon {
      position: absolute;
      width: 150px;
      left: 42px;
      top: 39px;
    }
    .bannerTable {
      background: hsla(0, 0%, 100%, 0.8);
      position: absolute;
      width: 32%;
      height: 50%;
      bottom: 20px;
      border-radius: 8px;
      margin-bottom: 28px;
      left: 90px;
      padding: 25px;
      flex-direction: column;
      .tableTitle {
        font-size: 36px;
        color: #5f5f5f;
        font-weight: bold;
        text-align: center;
      }
      .tableDescribe {
        font-size: 29px;
        color: #5f5f5f;
        font-weight: 400;
        opacity: 0.6;
        text-align: center;
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
      .tableDesc {
        color: #a2a2a2;
        text-align: center;
        font-weight: 600;
      }
    }
  }
}
</style>
<style lang="scss">
.custom_banner_el_input {
  width: 100%;
  height: 100%;
  border-radius: 28px;
  border: 0px;
  outline: none;
  .el-input__wrapper {
    border-radius: 28px;
  }
  .is-focus {
    box-shadow: none;
  }
  .el-input__inner {
    font-size: 24px;
    line-height: 24px;
    text-align: center;
  }
}
</style>
<template>
  <div class="firstBanner">
    <div class="bannerPic">
      <img src="@/assets/img/firstBanner.png" alt="" />
      <img src="@/assets/img/bannerLogo.png" alt="" class="bannerIcon" />
      <div class="bannerTable flex-cc">
        <p class="tableTitle">免费领取</p>
        <p class="tableDescribe">精彩试听课</p>
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
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus'

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