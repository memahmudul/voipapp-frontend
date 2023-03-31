
import types from "../types";
import { PLACE_MOBILE_BANKING_ORDER,FETCH_MOBILE_BANKING_TRANSACTION,PLACE_BANKING_ORDER,FETCH_BANKING_TRANSACTION } from "../../config/urls";

import { apiPost } from "../../utils/utils";
import { getHeaders } from "../../utils/utils";
import axios from 'axios';



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


  export async function placeBankingOrder(data) {
    return apiPost(PLACE_BANKING_ORDER, data)
       
  }

  export async function getAllOrder(data) {
  
    
    
   const data1 = await apiPost(FETCH_MOBILE_BANKING_TRANSACTION, data)
    const data2 = await apiPost(FETCH_BANKING_TRANSACTION, data)
 
   
    
  

  
    if(data1 && data2){
      const data = [...data1,...data2]
    data.sort(function(a, b) {
      var c = new Date(a.createdAt);
      var d = new Date(b.createdAt);
      return c-d;
  });

      return ['fetch-all-order-success',data.reverse()]
    }else{
      return ['error in fetching all data']

    }
      
  }


