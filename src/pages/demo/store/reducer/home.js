
/**
 * @Func ticketList
 * @Des 火车票列表，详情数据处理
 */
const intiState = {
  name: 'zhangli',
  list: '列表'
};

export const reducer = (state = intiState, action) => {
  const params = action.action
  switch(action.type) {
    case 'updateData' :
    return {
      ...state,
      [params.key]: params.data
    }
    default: 
    return state
  }
}