const { defineConfig } = require('@vue/cli-service')
// console.log('(process.env', process.env)
// const mockProxy = require('@/mock')
module.exports = defineConfig({
  lintOnSave:false,
  transpileDependencies: true,
  devServer: {
    onBeforeSetupMiddleware: function(devServer) {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }

      devServer.app.post('/service/a', function (req, res) {
        res.json({ custom: 'response' });
      });
    }
  }
})
