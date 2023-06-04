import { GET_BALANCE,ADD_BALANCE_REQUEST } from "../../config/urls"
import types from "../types";

import { apiPost } from "../../utils/utils";

import store from "../store";
const { dispatch } = store


export const updateBalanceState = (data) => {
  dispatch({
      type: types.GET_BALANCE,
      payload: data
  })
}



export async function getBalance(data) {
    return apiPost(GET_BALANCE, data)
       
  }

  
export async function addBalanceRequest(data) {
  return apiPost(ADD_BALANCE_REQUEST, data)
     
}