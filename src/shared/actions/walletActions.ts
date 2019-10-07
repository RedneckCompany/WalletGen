import Bitcoin from '../../tools/bitcoin';

export const SET_LIST = 'wallet/SET_LIST';
export const ADD_LIST = 'wallet/ADD_LIST';
export const UPDATE_LIST = 'wallet/UPDATE_LIST';
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

export function fetchBalanceWalletList(list) {
  console.log('l', list);
  return async (dispatch) => {
    const updatedList = list.map((item) => {
      const balance = new Bitcoin().getInfo(item.address.publicKey);
      return { ...item, ...balance };
    });

    console.log(updatedList);
    dispatch({
      type: UPDATE_LIST,
      list: updatedList,
    });
  };
}

export function fetchBalanceWallet(item) {
  return async (dispatch) => {
    const balance = await new Bitcoin().getInfo(item.address.publicKey);

    console.log(balance);

    dispatch({
      type: UPDATE_LIST,
      item: {...item, ...balance },
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
