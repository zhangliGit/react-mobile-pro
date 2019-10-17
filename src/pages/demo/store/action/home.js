import $ajax from '@u/ajax-serve';

export const TICKET_LIST = 'ticket_list';

/**
 * @Func ticketList
 * @Des 查询火车票列表
 */
const updateData = (data) => ({
  type: 'updateData',
  list: data
});
export const ticketList = () => {
  return async (dispatch) => {
    const params = {
      url: ''
    }
    let data = await $ajax.get(params);
    dispatch(updateData(data.data));
  }
}

