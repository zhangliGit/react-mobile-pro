/**
 * @description 本地请求代理配置(可配置多个)
 * @author zhangli
 */

const proxy = require('http-proxy-middleware')
module.exports = function(app) {
  app.use(
    proxy.createProxyMiddleware('/api', {
      target: 'http://192.168.1.28:3004/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/'
      }
    })
  )
  app.use(
    proxy.createProxyMiddleware('/app', {
      target: 'http://192.168.1.28:3005/',
      changeOrigin: true,
      pathRewrite: {
        '^/app': '/'
      }
    })
  )
}
