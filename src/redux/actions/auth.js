import { LOGIN, SIGNUP,SIGNUP_FIRST_PAGE,CONFIRM_PIN } from "../../config/urls";


import { apiPost } from "../../utils/utils";

import store from "../store";
import types from "../types";
import { clearUserData } from "../../utils/asyncStorage";

const { dispatch } = store


export const saveUserData = (data) => {
    dispatch({
        type: types.LOGIN,
        payload: data
    })
}



export async function login(data) {
  return apiPost(LOGIN, data)
 




      
      
       
   
}

export function confirmPin(data) {
    return apiPost(CONFIRM_PIN, data)
}


export function signupfirstpage(data) {
    return apiPost(SIGNUP_FIRST_PAGE, data)
}

export function signup(data) {
    return apiPost(SIGNUP, data)
}





export async function logout() {
   await clearUserData()
    dispatch({type: types.CLEAR_REDUX_STATE})
    
}