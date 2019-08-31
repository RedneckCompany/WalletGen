import {
  SET_LIST,
  ADD_LIST,
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
      return { ...state, list: [...state.list, action.item]}
    }

    default:
      return state;
  }
}
