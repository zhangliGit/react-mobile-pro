/***
 * @description 多环境配置
 */

let nodeEnv = process.env.WDS_SOCKET_PATH
let hostEnv = ''
console.log(process.env)
if (nodeEnv === 'prod') {
  hostEnv = 'http://prod'
} else if (nodeEnv === 'dev') {
  hostEnv = 'http://dev'
} else if (nodeEnv === 'test') {
  hostEnv = 'http://test'
}
console.log(hostEnv)
export default hostEnv
