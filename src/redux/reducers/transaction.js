import types from "../types";

const initial_state = {
    transaction:[]
}

export default function(state= initial_state, action){
    switch (action.type) {

        case types.ORDER_TRANSACTION:
            console.log('order executing');

        return {...state,transaction:[...state.transaction,action.payload]}
       

        case types.GET_TRANSACTION:

           return {...state,transaction:action.payload}
              
           
          
        default:
            return {...state}
    }
}