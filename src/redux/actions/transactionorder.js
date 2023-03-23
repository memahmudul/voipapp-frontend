
import types from "../types";
import { PLACE_MOBILE_BANKING_ORDER } from "../../config/urls";

import { apiPost } from "../../utils/utils";



import store from "../store";
const { dispatch } = store


export const addSingleTransactionState= (data) => {
  dispatch({
      type: types.ORDER_TRANSACTION,
      payload: data
  })
}

export const updateFullTransactionState= (data) => {
  dispatch({
      type: types.GET_TRANSACTION,
      payload: data
  })
}





export async function placeMobileBankingOrder(data) {
    return apiPost(PLACE_MOBILE_BANKING_ORDER, data)
       
  }