import { GET_SLIDER_IMAGE } from "../../config/urls"

import types from "../types";

import { apiPost } from "../../utils/utils";

import store from "../store";
const { dispatch } = store

export async function getSliderImage() {
    return apiPost(GET_SLIDER_IMAGE)
       
  }


  export const updateSliderImageState = (data) => {
    dispatch({
        type: types.UPDATE_SLIDER_IMAGES,
        payload: data
    })
  }
  


  