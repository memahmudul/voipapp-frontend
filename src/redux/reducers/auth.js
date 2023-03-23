import types from "../types";

const initial_state = {
    userData: {},
    
}

export default function(state= initial_state, action){
    switch (action.type) {
        case types.LOGIN:
           
            return {userData: action.payload,balance:action.payload.user.balance} 

        // case types.GET_BALANCE:
              
            
        //    console.log({...state.userData.user,...action.payload}); //ekhane userdata er moddhe nested hisebe main data ace
        //    return {...state,balance:action.payload}
              
            case types.CLEAR_REDUX_STATE:
                
                return initial_state   
          
        default:
            return {...state}
    }
}