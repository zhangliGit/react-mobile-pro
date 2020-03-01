// 获取开发环境和打包环境的模块
const path = require('path')
const glob = require('glob')
const chalk = require('chalk')
const log = console.log
const pagePath = path.resolve(__dirname, '../src/views')
const modulesDir = glob.sync(pagePath + '/*')
const devModule = []
modulesDir.forEach(file => {
  devModule.push(file.split('/')[file.split('/').length - 1])
})
let pages
if (process.env.NODE_ENV === 'development') {
  pages = devModule
} else {
  let buildModule = process.argv.splice(2, 1)[0]
  if (!devModule.includes(buildModule) && process.env.NODE_ENV === 'production') {
    log(
      chalk.green(`
    提示
  
    请输入正确的打包模块，模块包括：${devModule.toString()}
    `)
    )
    process.exit(1)
  }
  pages = [buildModule]
}

module.exports = {
  pages
}
