getPaymentMethod

import { GET_PAYMENT_METHOD } from "../../config/urls"
import types from "../types";

import { apiPost } from "../../utils/utils";




export async function getPaymentMethod() {
    return apiPost(GET_PAYMENT_METHOD)
       
  }


