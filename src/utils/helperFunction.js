import {showMessage} from "react-native-flash-message";

const showError = (message) => {
    showMessage({
       
        type: 'warning',
        icon: 'danger',
        message
    })
}

const showSuccess = (message) => {
    showMessage({
       
        type: 'success',
        icon: 'success',
        message
    })
}

export {
    showError, 
    showSuccess
}