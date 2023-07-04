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
      height: 52px;
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
        .phoneInput {
          width: 100%;
          height: 100%;
          border-radius: 28px;
          border: 0px;
          outline: none;
        }
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
        background: #ca4444;
        border-radius: 28px;
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
<template>
  <div class="firstBanner">
    <div class="bannerPic">
      <img src="@/assets/img/firstBanner.png" alt="" />
      <img src="@/assets/img/bannerLogo.png" alt="" class="bannerIcon" />
      <div class="bannerTable flex-cc">
        <p class="tableTitle">免费领取</p>
        <p class="tableDescribe">精彩试听课</p>
        <!-- <input type="text" placeholder="请输入手机号"> -->
        <div class="tablePhone mt-9">
          <!-- <el-input placeholder="请输入手机号"></el-input> -->
          <input type="text" placeholder="请输入手机号" class="phoneInput" />
        </div>
        <el-button class="custom_el_button">立即领取</el-button>
        <p class="tableDesc mt-18 fs-16">青松有伴会保护您的隐私</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>