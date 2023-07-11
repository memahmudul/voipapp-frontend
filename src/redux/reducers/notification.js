import types from "../types";

const initial_state = {
    notifications:[]
}

export default function(state= initial_state, action){
    switch (action.type) {
       

        case types.GET_NOTIFICATION:
              
            
          
        return {...state,notifications:action.payload}
           
          
        default:
            return {...state}
    }
}