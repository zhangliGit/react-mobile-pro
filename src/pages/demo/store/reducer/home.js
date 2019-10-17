
/**
 * @Func ticketList
 * @Des 火车票列表，详情数据处理
 */
const intiState = {
  list: []
};

export const updataState = (state = intiState, action) => {
  return {
    ...state,
    [action.key]: action.data
  }
}