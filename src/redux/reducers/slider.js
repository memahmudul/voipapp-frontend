import types from "../types";

const initial_state = {
    sliderImages:[]
}

export default function(state= initial_state, action){
    switch (action.type) {
       

        case types.UPDATE_SLIDER_IMAGES:
              
            
          
        return {...state,sliderImages:action.payload}
           
          
        default:
            return {...state}
    }
}