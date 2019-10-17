import $ajax from '@u/ajax-serve';

const updateData = (action) => ({
  type: 'updateData',
  action
});

// 同步改变reducer
export const commit = (action) => {
  return (dispatch) => {
    dispatch(updateData(action));
  }
}

// 异步改变reducer
export const fetch = () => {
  return async (dispatch) => {
    const params = {
      url: 'http://yapi.demo.qunar.com/mock/5691/app'
    }
    const res = await $ajax.get(params);
    return new Promise((resolve, reject) => {
      if (res.code === 200 || res.code === true) {
        resolve(res)
      } else {
        reject(res)
      }
    })
  }
}

