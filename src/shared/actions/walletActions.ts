import Bitcoin from '../../tools/bitcoin';

export const SET_LIST = 'wallet/SET_LIST';
export const ADD_ITEM_LIST = 'wallet/ADD_ITEM_LIST';
export const UPDATE_ITEM_LIST = 'wallet/UPDATE_ITEM_LIST';
export const REMOVE_ITEM_LIST = 'wallet/REMOVE_ITEM_LIST';
export const CHECK_LIST = 'wallet/CHECK_LIST';

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
      type: ADD_ITEM_LIST,
      item,
    });
  };
}


export function fetchBalanceWallet(item) {
  return async (dispatch) => {
    const balance = await new Bitcoin().getInfo(item.address.publicKey);

    dispatch({
      type: UPDATE_ITEM_LIST,
      item: {...item, ...balance },
    });
  };
}

export function removeWallet(id) {
  return async (dispatch) => {
    dispatch({
      type: REMOVE_ITEM_LIST,
      id,
    });
  };
}

export function checkWalletListIntegrity() {
  return async (dispatch) => {
    dispatch({
      type: CHECK_LIST,
    });
  };
}
