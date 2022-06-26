const { defineConfig } = require('@vue/cli-service')
// console.log('(process.env', process.env)
const mockProxy = import('@/mock/index.js')
console.log('mockProxy', mockProxy)
module.exports = defineConfig({
  lintOnSave:false,
  transpileDependencies: true,
  devServer: {
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }

      devServer.app.post('/service/a', (_, response) => {
        response.send({ custom: 'response1' });
      });

      return middlewares
    }
  }
})
