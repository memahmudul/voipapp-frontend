import { GET_NOTIFICATIONS } from "../../config/urls"

import types from "../types";

import { apiPost } from "../../utils/utils";

import store from "../store";
const { dispatch } = store

export async function getNotification() {
    return apiPost(GET_NOTIFICATIONS)
       
  }


  export const updateNotificationState = (data) => {
    dispatch({
        type: types.GET_NOTIFICATION,
        payload: data
    })
  }
  


  