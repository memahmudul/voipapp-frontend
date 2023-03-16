import types from "../types";

const initial_state = {
    balance:''
}

export default function(state= initial_state, action){
    switch (action.type) {
       

        case types.GET_BALANCE:
              
            
          
           return {...state,balance:action.payload}
              
           
          
        default:
            return {...state}
    }
}