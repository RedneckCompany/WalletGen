

export const SET_LIST = 'wallet/SET_LIST';
export const ADD_LIST = 'wallet/ADD_LIST';

export function setList(list) {
  return async (dispatch) => {
    dispatch({
      type: SET_LIST,
      list,
    });
  };
}

export function addList(item) {
  return async (dispatch) => {
    dispatch({
      type: ADD_LIST,
      item,
    });
  };
}
