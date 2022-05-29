const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/user': {
        target: 'http://202.193.53.235:8080',
        changeOrigin: true,
      },
    }
  }
})
