import { combineReducers } from "redux";
import types from "../types";
import auth from './auth';
import balance from "./balance";
import transaction from "./transaction";
import commission from "./commission";
import slider from "./slider";
import notification from "./notification";



const appReducer = combineReducers({
    auth,
    balance,
    transaction,
    commission,
    slider,
    notification
})

// const rootReducer = (state, action) => {
//     if (action.type == types.CLEAR_REDUX_STATE) {
//        state= initial
//     }
//     return appReducer(state, action)

export default appReducer