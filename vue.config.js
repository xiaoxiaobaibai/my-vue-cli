const { defineConfig } = require('@vue/cli-service')
const mockProxy = require('./mock/index.js')
module.exports = defineConfig({
  lintOnSave:false,
  transpileDependencies: true,
  devServer: {
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }

      const keys = Object.keys(mockProxy)

      keys.forEach(item => {
        devServer.app.get(item, (_, response) => {
          response.send(mockProxy[item])
        })

        devServer.app.post(item, (_, response) => {
          response.send(mockProxy[item])
        })
      })

      return middlewares
    }
  }
})
