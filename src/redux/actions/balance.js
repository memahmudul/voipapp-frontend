import { GET_BALANCE } from "../../config/urls"
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