const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: '后端url地址',
        // 允许跨域请求
        changeOrigin: true
      }
    }
  }
});
