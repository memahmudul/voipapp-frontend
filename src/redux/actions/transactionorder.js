
import types from "../types";
import { PLACE_MOBILE_BANKING_ORDER,
  FETCH_MOBILE_BANKING_TRANSACTION,
  PLACE_BANKING_ORDER,
  FETCH_BANKING_TRANSACTION,
  PLACE_BILL_PAY_ORDER,
  PLACE_RECHARGE_ORDER,
  FETCH_BILL_PAY_TRANSACTION, 
  FETCH_RECHARGE_TRANSACTION,
  GET_OFFER_PACKAGES,
  PLACE_OFFER_ORDER,
  FETCH_OFFER_PACKAGE_TRANSACTION } from "../../config/urls";

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

  export async function placeBillPayOrder(data) {
    return apiPost(PLACE_BILL_PAY_ORDER, data)
       
  }


  export async function placeRechargeOrder(data) {
    return apiPost(PLACE_RECHARGE_ORDER, data)

  
    
  }




  export async function getAllOrder(data) {
  
    
    
   const data1 = await apiPost(FETCH_MOBILE_BANKING_TRANSACTION, data)
   const data2 = await apiPost(FETCH_BANKING_TRANSACTION, data)
   const data3 = await apiPost(FETCH_BILL_PAY_TRANSACTION, data)
   const data4 = await apiPost(FETCH_RECHARGE_TRANSACTION, data)
   const data5 = await apiPost(FETCH_OFFER_PACKAGE_TRANSACTION, data)





  


    if(!data1){
      data1=[];
    }

    if(!data2){
      data2=[];
    }

    if(!data3){
      data2=[];
    }
    if(!data4){
      data4=[];
    }
    if(!data5){
      data5=[];
    }


    const combinedData = [...data1,...data2,...data3,...data4,...data5]
    combinedData.sort(
      function(a, b) {
        var c = new Date(a.createdAt);
        var d = new Date(b.createdAt);
        return c-d;
    }
    )

    



  
 
   
    
 
   
    
  

  
    if(data1 || data2 || data3 || data4 || data5){


const combinedData = [...data1,...data2,...data3,...data4,...data5]
combinedData.sort(
  function(a, b) {
    var c = new Date(a.createdAt);
    var d = new Date(b.createdAt);
    return c-d;
}
)



      return ['fetch-all-order-success',combinedData.reverse()]
    }else{
      return ['error in fetching all data']

    }
      
  }



  export const getAllOfferPackages = (data)=>{
   
    return apiPost(GET_OFFER_PACKAGES, data)

  }

  export const placeOfferOrder = (data)=>{
    return apiPost(PLACE_OFFER_ORDER, data)

  }

