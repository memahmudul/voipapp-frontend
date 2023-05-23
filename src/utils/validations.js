import validator from 'is_js';
import phone_validator from "bd-phone-number-validator"
const { validate, operator } = phone_validator;






const checkEmpty = (val, key) => {
    if (validator.empty(val.trim())) {
        return `${key}`;
    } else {
        return '';
    }
}

const checkMinLength = (val, minLength, key) => {
    if (val.trim().length < minLength) {
        return `${key} অবশ্যই ${minLength} ক্যারেক্টার হতে হবে।`
    } else {
        return '';
    }
}

const checkMaxLength = (val, maxLength, key) => {
    if (val.trim().length > maxLength) {
        return `${key}  ${maxLength} ক্যারেক্টারের বেশি হতে পারবেনা।`
    } else {
        return '';
    }
}

const checkIsNum = (val,key)=>{
    let isnum = /^\d+$/.test(val);
   if(!isnum){
    return `${key} must contain only digit`

   }else{
    return '';
   }

}


export const SignupFirstValidation = (data)=>{
    const {  name,username,phone,email} = data
     
    if(name!==undefined){
        let emptyValidationText = checkEmpty(name, 'আপনার নাম লিখুন')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
    }

    if (username !== undefined) {
        let emptyValidationText = checkEmpty(username, 'আপনার ইউজারনেম লিখুন')
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
        let emptyValidationText = checkEmpty(phone, 'আপনার ফোন নাম্বার লিখুন')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
          

  

            if(!validate(phone)){
                return `দয়া করে একটি ভ্যালিড নাম্বার টাইপ করুন`
        
            }
        
        }
    }




    if (email !== undefined) {
        let emptyValidationText = checkEmpty(email, 'আপনার ইমেইল লিখুন')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            if (!validator.email(email)) {
                return 'ইমেইল ফরম্যাট সঠিক নয়।'
            }
        }
    }

}




export const validation = (data) =>{
    const { name,username,phone, email, password,confirmPassword,pin,confirmPin,recipient,amount,type,currentBalance, } = data
    
    
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
        let emptyValidationText = checkEmpty(password, 'আপনার পাসওয়ার্ড টাইপ করুন')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            let minLengthValidation = checkMinLength(password, 6, 'পাসওয়ার্ড')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }
        }
    }

    if (confirmPassword !== undefined) {
        let emptyValidationText = checkEmpty(confirmPassword, 'কনফার্ম পাসওয়ার্ড টাইপ করুন')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } 

            let minLengthValidation = checkMinLength(confirmPassword, 6, 'কনফার্ম পাসওয়ার্ড')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }

            if(confirmPassword!==password){
                return 'পাসওয়ার্ড ও কনফার্ম পাসওয়ার্ড ম্যাচ করেনি।'
            }
       
    }

    if (pin !== undefined) {
        let emptyValidationText = checkEmpty(pin, 'আপনার পিন টাইপ করুন')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else { 
            let minLengthValidation = checkMinLength(pin, 6, 'পিন')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }
        }
    }


    if (confirmPin !== undefined) {
        let emptyValidationText = checkEmpty(confirmPin, 'আপনার পিন কনফার্ম করুন')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } 
            let minLengthValidation = checkMinLength(pin, 6, 'কনফার্ম পিন')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }

            if(confirmPin!==pin){
                return 'কনফার্ম পিন ম্যাচ করছেনা'
            }
        
    }

    if(recipient!==undefined){
        let emptyValidationText = checkEmpty(recipient, 'Please enter a recipient')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }

        if(!validate(recipient)){
            return 'The number is not valid'
        }
           
        
    }

    


    if(amount!==undefined){
        let emptyValidationText = checkEmpty(amount, 'Please enter an amount')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
            if(parseInt(amount)<10){
                return "Amount can not be less than 10"
            }

            
            

            if(parseInt(amount)>parseInt(currentBalance)){
                return "You don't have enough balance"

            }
           
        
    }

    if(type!==undefined){
        let emptyValidationText = checkEmpty(type, 'Please select any  type')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
    }



}

export const bankTransferValidation = (data)=>{
    const { bank,branch,account_no,account_name,type,amount,currentBalance } = data
   
    
    if(bank!==undefined){
        let emptyValidationText = checkEmpty(bank, 'Please select a  bank')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
    }

    if(branch!==undefined){
        let emptyValidationText = checkEmpty(branch, 'Please select a  branch')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
    }
    if(account_no!==undefined){
       
        let emptyValidationText = checkEmpty(account_no, 'Please select account no')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
        let isNumValidation = checkIsNum(account_no, 'Account Number')
        if (isNumValidation !== '') {
            return isNumValidation
        }
       
    }

    if(account_name!==undefined){
        let emptyValidationText = checkEmpty(account_name, 'Please select account name')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
    }
   
    if(amount!==undefined){
        let emptyValidationText = checkEmpty(amount, 'Please enter an amount')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
        let isNumValidation = checkIsNum(amount, 'Amount')
        if (isNumValidation !== '') {
            return isNumValidation
        }
            if(parseInt(amount)<10){
                return "Amount can not be less than 10"
            }

            
            

            if(parseInt(amount)>parseInt(currentBalance)){
                return "You don't have enough balance"

            }
           
        
    }
    if(type!==undefined){
        let emptyValidationText = checkEmpty(type, 'Please select type')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
    }

}


export const billPayValidation = (data)=>{
    const { bill_service,type,month,meter_no,account_no,contact_no,biller_name,amount,currentBalance} = data
    if(bill_service!==undefined){
        let emptyValidationText = checkEmpty(bill_service, 'Please select a  biller service')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
    }

    if(type!==undefined){
        let emptyValidationText = checkEmpty(type, 'Please select a  type')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
    }

    if(month!==undefined){
        let emptyValidationText = checkEmpty(month, 'Please select a  month')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
    }

    if(meter_no!==undefined){
        let emptyValidationText = checkEmpty(meter_no, 'Please enter a  meter no')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }

        let isNumValidation = checkIsNum(meter_no, 'Meter No')
        if (isNumValidation !== '') {
            return isNumValidation
        }
    }

   

    if(account_no!==undefined){
        let emptyValidationText = checkEmpty(account_no, 'Please enter a  account no')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
        let isNumValidation = checkIsNum(account_no, 'Account No')
        if (isNumValidation !== '') {
            return isNumValidation
        }
    }

    

    if(contact_no!==undefined){
        let emptyValidationText = checkEmpty(contact_no, 'Please enter contact number')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }

        let isNumValidation = checkIsNum(contact_no, 'Contact No')
        if (isNumValidation !== '') {
            return isNumValidation
        }
    }

    if(biller_name!==undefined){
        let emptyValidationText = checkEmpty(biller_name, 'Please enter a  biller name')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
    }

    if(amount!==undefined){
        let emptyValidationText = checkEmpty(amount, 'Please enter an amount')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
        let isNumValidation = checkIsNum(amount, 'Amount')
        if (isNumValidation !== '') {
            return isNumValidation
        }

        if(parseInt(amount)<10){
            return "Amount can not be less than 10"
        }

        
        

        if(parseInt(amount)>parseInt(currentBalance)){
            return "You don't have enough balance"

        }
    }
}






export const rechargeValidation = (data)=>{
    const { operators,recipient,amount,type,currentBalance} = data
    if(operators!==undefined){
        let emptyValidationText = checkEmpty(operators, 'Please select an Operator')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
    }

    if(recipient!==undefined){
        let emptyValidationText = checkEmpty(recipient, 'Enter a phone number')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
    }



    const validation_object = operator(recipient)

  

    if(validation_object.operator!==operators){
        return `The number is not a valid ${operators} number`

    }

  
       
  
    


      
   



   

   

    

   

 
    if(amount!==undefined){
        let emptyValidationText = checkEmpty(amount, 'Please enter an amount')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
        let isNumValidation = checkIsNum(amount, 'Amount')
        if (isNumValidation !== '') {
            return isNumValidation
        }

        if(parseInt(amount)<20){
            return "Amount can not be less than 20"
        }

        
        

        if(parseInt(amount)>parseInt(currentBalance)){
            return "You don't have enough balance"

        }
    }





    if(type!==undefined){
        let emptyValidationText = checkEmpty(type, 'Please select a  type')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
    }
}


export const activateOfferValidation = (data)=>{
    const { recipient,operators,price,currentBalance} = data
    if(recipient!==undefined){
        let emptyValidationText = checkEmpty(recipient, 'Enter a phone number')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }

        const validation_object = operator(recipient)
      
        

        const temp = validation_object.operator
        const toLower = temp.toLowerCase()

        if(toLower!==operators){
            return `The number is not a valid ${operators} number`
    
        }

        if(parseInt(price)>parseInt(currentBalance)){
            return "You don't have enough balance to adtivate this offer"

        }
    

    }

}




