const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5500', // 代理後端 API 的地址
        changeOrigin: true,
      },
    },
  },
});
