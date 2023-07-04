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
  font-weight: 400;
  background: #ca4444;
  border-radius: 28px;
  margin-left: -20px;
  z-index: 1000;
}
.custom_el_input {
  .el-input__wrapper {
    width: 180px;
    height: 56px;
    border-radius: 30px 0px 0px 30px;
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
        <el-input class="custom_el_input" placeholder="请输入手机号"></el-input>
        <el-button class="custom_footer_el_button">立即领取</el-button>
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
        <div class="infoPromotion">
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
import { reactive } from 'vue';

const addressInfo = reactive({
  telephone: '400-600-6222',
  address: '北京市朝阳区望京融科中心A座15层'
})

const filingsInfo = reactive({
  content: '京ICP备19053887号-13 | 增值电信业务许可证：京B2-20201188',
  permit: '（京）字第19253号'
})
</script>