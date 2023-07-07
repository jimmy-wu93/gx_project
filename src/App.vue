<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    // 根据不同路由跳转不同页面
    if (this._isMobile()) {
      console.log('移动端')
      this.$router.replace('/mb_index')
    } else {
      console.log('pc端'),
        this.$router.replace('/pc_index')
    }
  },
  methods: {
    // 判断是否是移动端，如果是返回true
    _isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone) /i)
      console.log(navigator.userAgent,flag)
      return flag
    }
  }

}
</script>

<style lang="scss">
#app {
  width: 100vw;
  height: 100vh;
}
</style>
