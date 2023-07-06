<style lang="scss" scoped>
.receiveFooter {
  //   padding: 70px 301px 70px 306px;
  .receiveFree {
    justify-content: space-around;
    // background-image: url('https://hs-schedule.hongsong.club/website/fengjin/money.png');
    width: 100%;
    height: 165px;
    background-color: rgba(0, 0, 0, 0.6);
    position: relative;
    background-image: url(https://hs-schedule.hongsong.club/website/fengjin/money.png);
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: 0;
    .freeTitle {
      //   margin-left: 306px;
      .free {
        font-weight: bold;
        display: flex;
        font-size: 43px;
        background-color: #fff;
        background: linear-gradient(180deg, #ffc100, #fffad7);
        color: #fff;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .receive {
        font-size: 35px;
        font-family: SourceHanSansCN-Regular, SourceHanSansCN;
        font-weight: 400;
        background: transparent !important;
        -webkit-text-fill-color: #fff;
        color: #fff;
        margin-left: 10px;
        margin-top: 5px;
      }
    }
  }
  .receiveInfo {
    width: 100%;
    background: #9d202d;
    padding: 70px 0px 70px 0px;
    justify-content: space-around;
    .infoAddress {
      font-size: 24px;
      color: #fff;
      font-weight: 600;
    }
    .infoFilings {
      margin-top: 50px;
      font-size: 16px;
      color: #fff;
      font-weight: 400;
    }
  }
}
</style>
<style lang="scss">
.custom_footer_el_button {
  width: 156px;
  height: 56px;
  border-color: #ca4444;
  font-family: SourceHanSansCN-Regular;
  font-size: 24px;
  color: #fff;
  letter-spacing: 0;
  text-align: center;
  font-weight: 600;
  background: #ca4444;
  border-radius: 28px;
  margin-left: -20px;
  z-index: 1000;
  &:hover {
    background: #ffffff;
    color: #ca4444;
  }
}
.custom_el_input {
  .el-input__wrapper {
    width: 180px;
    height: 56px;
    border-radius: 30px 0px 0px 30px;
  }
  .el-input__inner {
    font-size: 24px;
    line-height: 24px;
    text-align: center;
  }
}
</style>
<template>
  <div class="receiveFooter">
    <div class="receiveFree flex-sc">
      <div class="freeTitle flex-sc">
        <p class="free">免费领取</p>
        <p class="receive">精彩试听课</p>
      </div>
      <div class="freeTelephone flex-sc">
        <el-input
          class="custom_el_input"
          placeholder="请输入手机号"
          v-model="phoneNumber"
          maxlength="11"
        ></el-input>
        <el-button class="custom_footer_el_button" @click="primaryButton"
          >立即领取</el-button
        >
      </div>
    </div>
    <div class="receiveInfo flex-sc">
      <div>
        <div class="infoAddress">
          <p>咨询热线：{{ addressInfo.telephone }}</p>
          <p>地址：{{ addressInfo.address }}</p>
        </div>
        <div class="infoFilings">
          <p>备案号：{{ filingsInfo.content }}</p>
          <p>广播电视节目制作经营许可证：{{ filingsInfo.permit }}</p>
          <p>Copyright © 2021青松有伴</p>
        </div>
      </div>
      <div class="flex-cc">
        <div class="infoPromotion flex-ccl">
          <p class="infoAddress">青松有伴</p>
          <p class="fs-14 ft-cWhite fw-b mt-12">公众号二维码</p>
        </div>
        <div class="qrCode">
          <img src="@/assets/img/qrCode.jpg" alt="" class="w-128 h-128 ml-24" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue';
import { ElMessage } from 'element-plus';

const addressInfo = reactive({
  telephone: '400-6688-175',
  address: '北京市亦庄经济开发区经开壹中心10号楼3层'
})

const filingsInfo = reactive({
  content: '京ICP备2023001926号-2 | 增值电信业务许可证：京B2-20230848',
  permit: '（京）字第11307号'
})

const phoneNumber = ref('')

function primaryButton(e) {
  let mobileReg = /^1[3-9]\d{9}$/
  if (!phoneNumber.value.trim()) {
    ElMessage.error('手机号码输入为空，请重新输入')
  } else if (!mobileReg.test(phoneNumber.value)) {
    ElMessage.error('手机号输入有误，请重新输入')
  } else {
    ElMessage({
      message: '手机号提交成功',
      type: 'success'
    })
    phoneNumber.value = ''
  }
}

</script>