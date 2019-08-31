import { combineReducers } from "redux";

import walletReducer from './walletReducer';

const appReducer = combineReducers({
  wallets: walletReducer,
});
const rootReducer = (state, action) => (appReducer(state, action));

export default rootReducer;
