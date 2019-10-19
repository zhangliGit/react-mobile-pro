import $ajax from '@u/ajax-serve';
import apiList from '../../api/index'

const updateState = (action) => ({
  type: 'updateState',
  action
});

// 同步改变reducer
export const commit = (action) => {
  return (dispatch) => {
    dispatch(updateState(action));
  }
}
/**
 * @description 当前模块接口列表
 * @param {url} 功能接口
 * @param {type} 请求类型
 * @param {params} 请求参数
 */
const actions = Object.create(null)
for (const key in apiList) {
  const url = apiList[key].split('#')[0]
  const type = apiList[key].split('#')[1]
  const isLoad = apiList[key].split('#')[2] === undefined
  actions[key] = function (params = {}) {
    return async () => {
      let reqType = type === 'getUrl' ? 'get' : type
      const isGetUrl = type === 'getUrl'
      const res = await $ajax[reqType]({
        url: isGetUrl || type === 'del' ? url + '/' + params : url,
        params: isGetUrl ? {} : params
      }, isLoad)
      return new Promise(resolve => {
        resolve(res)
      })
    }
  }
}
export default actions
