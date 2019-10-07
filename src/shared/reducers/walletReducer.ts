import {
  SET_LIST,
  ADD_LIST,
  UPDATE_LIST,
  REMOVE_LIST,
} from '../actions/walletActions';

const INITIAL_STATE = {
  selectedId: undefined,
  list: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_LIST : {
      return { ...state, list: [...action.list]}
    }
    case ADD_LIST : {
      return { ...state, list: [...state.list, action.item] }
    }

    case UPDATE_LIST : {
      const updatedList = [...state.list.filter(item => item.id !== action.id)];
      return { ...state, list: [...updatedList, action.item] }
    }

    case REMOVE_LIST : {
      const filteredList = [...state.list.filter(item => item.id !== action.id)];
      return { ...state, list: filteredList }
    }

    default:
      return state;
  }
}
