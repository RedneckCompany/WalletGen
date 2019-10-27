import {
  SET_LIST,
  ADD_ITEM_LIST,
  UPDATE_ITEM_LIST,
  REMOVE_ITEM_LIST,
  CHECK_LIST,
  SET_BALANCE,
} from '../actions/walletActions';

const INITIAL_STATE = {
  balance: null,
  list: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_LIST : {
      return { ...state, list: [...action.list]}
    }

    case ADD_ITEM_LIST : {
      return { ...state, list: [...state.list, action.item] }
    }

    case UPDATE_ITEM_LIST : {
      const updatedList = [...state.list].map((item) => action.item && action.item.id === item.id ? action.item : item);
      return { ...state, list: updatedList }
    }

    case REMOVE_ITEM_LIST : {
      const filteredList = [...state.list.filter(item => item.id !== action.id)];
      return { ...state, list: filteredList }
    }

    case CHECK_LIST : {
      const checkedList = [...state.list].filter(item => item !== null);
      return { ...state, list: checkedList }
    }

    case SET_BALANCE : {
      return { ...state, balance: { ...action.balance }};
    }
    default:
      return state;
  }
}
