

export const SET_LIST = 'wallet/SET_LIST';
export const ADD_LIST = 'wallet/ADD_LIST';
export const REMOVE_LIST = 'wallet/REMOVE_LIST';

export function setWalletList(list) {
  return async (dispatch) => {
    dispatch({
      type: SET_LIST,
      list,
    });
  };
}

export function addWallet(item) {
  return async (dispatch) => {
    dispatch({
      type: ADD_LIST,
      item,
    });
  };
}

export function removeWallet(id) {
  return async (dispatch) => {
    dispatch({
      type: REMOVE_LIST,
      id,
    });
  };
}
