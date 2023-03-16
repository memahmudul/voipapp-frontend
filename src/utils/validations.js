import validator from 'is_js';

const checkEmpty = (val, key) => {
    if (validator.empty(val.trim())) {
        return `${key}`;
    } else {
        return '';
    }
}

const checkMinLength = (val, minLength, key) => {
    if (val.trim().length < minLength) {
        return `${key} must be at least ${minLength} character long`
    } else {
        return '';
    }
}

const checkMaxLength = (val, maxLength, key) => {
    if (val.trim().length > maxLength) {
        return `${key} can not exceed ${maxLength} character`
    } else {
        return '';
    }
}




export default function (data) {
    const { name,username,phone, email, password,confirmPassword,pin,confirmPin,recipient,amount,type } = data
    
    if(name!==undefined){
        let emptyValidationText = checkEmpty(name, 'Please enter your full name')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
    }

    if (username !== undefined) {
        let emptyValidationText = checkEmpty(username, 'Please enter your user name')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            let minLengthValidation = checkMinLength(username, 3, 'username')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }
        }
    }

    if (phone !== undefined) {
        let emptyValidationText = checkEmpty(phone, 'Please enter your phone  number')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            let minLengthValidation = checkMinLength(phone, 11, 'phone number')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }
        }
    }




    if (email !== undefined) {
        let emptyValidationText = checkEmpty(email, 'Please enter your email')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            if (!validator.email(email)) {
                return 'Please enter valid email'
            }
        }
    }


    if (password !== undefined) {
        let emptyValidationText = checkEmpty(password, 'Please enter your password')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            let minLengthValidation = checkMinLength(password, 6, 'password')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }
        }
    }

    if (confirmPassword !== undefined) {
        let emptyValidationText = checkEmpty(confirmPassword, 'Please enter your confirm password')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } 

            let minLengthValidation = checkMinLength(confirmPassword, 6, 'confirm password')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }

            if(confirmPassword!==password){
                return 'Confirm Passowrd does not match'
            }
       
    }

    if (pin !== undefined) {
        let emptyValidationText = checkEmpty(pin, 'Please enter your pin')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else { 
            let minLengthValidation = checkMinLength(pin, 6, 'pin')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }
        }
    }


    if (confirmPin !== undefined) {
        let emptyValidationText = checkEmpty(confirmPin, 'Please Confirm your pin')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } 
            let minLengthValidation = checkMinLength(pin, 6, 'confirm pin')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }

            if(confirmPin!==pin){
                return 'confirm pin does not match'
            }
        
    }

    if(recipient!==undefined){
        let emptyValidationText = checkEmpty(recipient, 'Please enter a recipient')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
            let minLengthValidation = checkMinLength(recipient, 11, 'recipient')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }

            let maxLengthValidation = checkMaxLength(recipient,11,'recipient')
            if (maxLengthValidation !== '') {
                return maxLengthValidation
            }
        
    }

    console.log(amount);


    if(amount!==undefined){
        let emptyValidationText = checkEmpty(amount, 'Please enter an amount')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }else {
            if(parseInt(amount)<10){
                return "Amount can not be less than 10"
            }
           
        }
    }

    if(type!==undefined){
        let emptyValidationText = checkEmpty(type, 'Please select any transaction type')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
    }


}