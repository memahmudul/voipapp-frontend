import types from "../types";

const initial_state = {
    balance: '0'
}

export default function(state= initial_state, action){
    switch (action.type) {
        case types.ADD_BALANCE:
            const data = action.payload
            return {balance: data}   
             
          
        default:
            return {...state}
    }
}