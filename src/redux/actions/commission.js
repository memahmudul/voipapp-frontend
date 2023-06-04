import { GET_COMMISSION } from "../../config/urls"
import types from "../types";

import { apiPost } from "../../utils/utils";

import store from "../store";
const { dispatch } = store



export async function getCommission() {
    return apiPost(GET_COMMISSION)
       
  }


  export const updateCommissionState = (data) => {
    dispatch({
        type: types.UPDATE_COMMISSION,
        payload: data
    })
  }
  