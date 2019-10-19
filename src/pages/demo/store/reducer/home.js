
/**
 * @Func reducer
 * @Des 全局数据存储
 */
const intiState = {
  list: []
};

export const reducer = (state = intiState, action) => {
  const params = action.action
  switch(action.type) {
    case 'updateState' :
    return {
      ...state,
      [params.key]: params.data
    }
    default: 
    return state
  }
}