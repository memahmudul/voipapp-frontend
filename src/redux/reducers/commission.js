import types from "../types";

const initial_state = {
    commission:[]
}

export default function(state= initial_state, action){
    switch (action.type) {
       

        case types.UPDATE_COMMISSION:
              
            
          
        return {...state,commission:action.payload}
           
          
        default:
            return {...state}
    }
}