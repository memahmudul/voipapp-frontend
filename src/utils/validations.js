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
        return `Please enter valid ${key}`
    } else {
        return '';
    }
}

export default function (data) {
    const { name,username,phone, email, password,confirmPassword,pin,confirmPin } = data
    
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

}