import { GET_BALANCE } from "../../config/urls"


import { apiPost } from "../../utils/utils";


export async function getBalance(data) {
    return apiPost(GET_BALANCE, data)
       
  }