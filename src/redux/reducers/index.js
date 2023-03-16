import { combineReducers } from "redux";
import types from "../types";
import auth from './auth';
import balance from "./balance";


const appReducer = combineReducers({
    auth,
    balance
})

// const rootReducer = (state, action) => {
//     if (action.type == types.CLEAR_REDUX_STATE) {
//        state= initial
//     }
//     return appReducer(state, action)

export default appReducer