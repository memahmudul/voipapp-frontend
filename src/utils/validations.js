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
    return `${key} টি ইনভ্যালিড। `

   }else{
    return '';
   }

}


export const SignupFirstValidation = (data)=>{
    const {  name,username,phone,email,admin} = data
     
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


    if(admin!==undefined){
        let emptyValidationText = checkEmpty(admin, 'এডমিনের নাম লিখুন')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
    }

}




export const validation = (data) =>{
    const { name,username,phone, email, password,confirmPassword,pin,confirmPin,recipient,amount,type,currentBalance, } = data
    
    
    if(name!==undefined){
        let emptyValidationText = checkEmpty(name, 'আপনার পূর্ণ নাম টাইপ করুন')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
    }

    if (username !== undefined) {
        let emptyValidationText = checkEmpty(username, 'একটি ইউজার নেম টাইপ করুন')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            let minLengthValidation = checkMinLength(username, 3, 'ইউজার নেম')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }
        }
    }

    if (phone !== undefined) {
        let emptyValidationText = checkEmpty(phone, 'আপনার ফোন নাম্বার টাইপ করুন')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        }else{
            if(!validate(phone)){
                return `দয়া করে একটি ভ্যালিড নাম্বার টাইপ করুন`
        
            }
        }
    }




    if (email !== undefined) {
        let emptyValidationText = checkEmpty(email, 'আপনার ইমেইল টাইপ করুন')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            if (!validator.email(email)) {
                return 'একটি ভ্যালিড ইমেইল টাইপ করুন'
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
        } 
            
        let minLengthValidation = checkMinLength(pin, 6, 'পিন')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }

            if(pin.trim().length>6){

                return 'পিন ৬ ডিজিটের বেশি হতে পারেবেনা।'

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

            if(confirmPin.trim().length>6){

                return 'পিন ৬ ডিজিটের বেশি হতে পারেবেনা।'

            }

            if(confirmPin!==pin){
                return 'কনফার্ম পিন ম্যাচ করছেনা'
            }
        
    }

    if(recipient!==undefined){
        let emptyValidationText = checkEmpty(recipient, 'একটি নাম্বার টাইপ করুন')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }

        if(!validate(recipient)){
            return 'নাম্বারটি ভ্যালিড নয়।'
        }
           
        
    }

    


    if(amount!==undefined){
        let emptyValidationText = checkEmpty(amount, 'এমাউন্ট টাইপ করুন')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
            if(parseInt(amount)<10){
                return "এমাউন্ট অবশ্যই ১০ টাকার উপর হতে হবে।"
            }

            
            

            if(parseInt(amount)>parseInt(currentBalance)){
                return "আপনার যথেষ্ট পরিমাণ ব্যালেন্স নেই।"

            }
           
        
    }

    if(type!==undefined){
        let emptyValidationText = checkEmpty(type, 'একটি টাইপ সিলেক্ট করুন')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
    }



}

export const bankTransferValidation = (data)=>{
    const { bank,branch,account_no,account_name,type,amount,currentBalance } = data
   
    
    if(bank!==undefined){
        let emptyValidationText = checkEmpty(bank, 'একটি ব্যাংক সিলেক্ট করুন')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
    }

    if(branch!==undefined){
        let emptyValidationText = checkEmpty(branch, 'একটি ব্রাঞ্চ টাইপ করুন')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
    }
    if(account_no!==undefined){
       
        let emptyValidationText = checkEmpty(account_no, 'একাউন্ট নাম্বার টাইপ করুন')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
        let isNumValidation = checkIsNum(account_no, 'একাউন্ট নাম্বার')
        if (isNumValidation !== '') {
            return isNumValidation
        }
       
    }

    if(account_name!==undefined){
        let emptyValidationText = checkEmpty(account_name, 'একাউন্ট হোল্ডার এর নাম টাইপ করুন')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
    }
   
    if(amount!==undefined){
        let emptyValidationText = checkEmpty(amount, 'এমাউন্ট টাইপ করুন')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
        let isNumValidation = checkIsNum(amount, 'এমাউন্ট')
        if (isNumValidation !== '') {
            return isNumValidation
        }
            if(parseInt(amount)<50000){
                return "ব্যাংক ট্রান্সফারে মিনিমাম এমাউন্ট ৫০০০০ টাকা ।"
            }

            
            

            if(parseInt(amount)>parseInt(currentBalance)){
                return "আপনার যথেষ্ট পরিমাণ ব্যালেন্স নেই।"

            }
           
        
    }
    if(type!==undefined){
        let emptyValidationText = checkEmpty(type, 'একাউন্ট টাইপ সিলেক্ট করুন।')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
    }

}


export const billPayValidation = (data)=>{
    const { bill_service,type,month,meter_no,account_no,contact_no,biller_name,amount,currentBalance} = data
    if(bill_service!==undefined){
        let emptyValidationText = checkEmpty(bill_service, 'সার্ভিস সিলেক্ট করুন')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
    }

    if(type!==undefined){
        let emptyValidationText = checkEmpty(type, 'বিলের ধরন সিলেক্ট করুন')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
    }

    if(month!==undefined){
        let emptyValidationText = checkEmpty(month, 'মাস সিলেক্ট করুন')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
    }

    if(meter_no!==undefined){
        let emptyValidationText = checkEmpty(meter_no, 'মিটার নং টাইপ করুন')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }

        let isNumValidation = checkIsNum(meter_no, 'মিটার নং')
        if (isNumValidation !== '') {
            return isNumValidation
        }
    }

   

    if(account_no!==undefined){
        let emptyValidationText = checkEmpty(account_no, 'একাউন্ট নম্বর টাইপ করুন')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
        let isNumValidation = checkIsNum(account_no, 'একাউন্ট নং')
        if (isNumValidation !== '') {
            return isNumValidation
        }
    }

    

    if(contact_no!==undefined){
        let emptyValidationText = checkEmpty(contact_no, 'বিল কন্টাক্ট নম্বর টাইপ করুন')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }

        let isNumValidation = checkIsNum(contact_no, 'কন্টাক্ট নং')
        if (isNumValidation !== '') {
            return isNumValidation
        }
    }

    if(biller_name!==undefined){
        let emptyValidationText = checkEmpty(biller_name, 'বিলার নেম টাইপ করুন')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
    }

    if(amount!==undefined){
        let emptyValidationText = checkEmpty(amount, 'এমাউন্ট টাইপ করুন')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
        let isNumValidation = checkIsNum(amount, 'এমাউন্ট')
        if (isNumValidation !== '') {
            return isNumValidation
        }

        if(parseInt(amount)<10){
            return "১০ টাকার নিচে বিল এমাউন্ট ট্রানজেকশনের জন্য গ্রহণযোগ্য নয়।"
        }

        
        

        if(parseInt(amount)>parseInt(currentBalance)){
            return "আপনার যথেষ্ট পরিমাণ ব্যালেন্স নেই।"

        }
    }
}






export const rechargeValidation = (data)=>{
    const { operators,recipient,amount,type,currentBalance} = data
    if(operators!==undefined){
        let emptyValidationText = checkEmpty(operators, 'একটি অপারেটর সিলেক্ট করুন')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
    }

    if(recipient!==undefined){
        let emptyValidationText = checkEmpty(recipient, 'একটি ফোন নাম্বার টাইপ করুন')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
    }



    const validation_object = operator(recipient)

  

    if(validation_object.operator!==operators){
        return `নাম্বারটি ভ্যালিড ${operators} নাম্বার নয়।`

    }

  
       
  
    


      
   



   

   

    

   

 
    if(amount!==undefined){
        let emptyValidationText = checkEmpty(amount, 'এমাউন্ট টাইপ করুন')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
        let isNumValidation = checkIsNum(amount, 'এমাউন্ট')
        if (isNumValidation !== '') {
            return isNumValidation
        }

        if(parseInt(amount)<20){
            return "রিচার্জ এমাউন্ট ২০ টাকার নিচে গ্রহণযোগ্য নয়।"
        }

        
        

        if(parseInt(amount)>parseInt(currentBalance)){
            return "আপনার যথেষ্ট পরিমাণ ব্যালেন্স নেই।"

        }
    }





    if(type!==undefined){
        let emptyValidationText = checkEmpty(type, 'দয়া করে একটি টাইপ সিলেক্ট করুন')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }
    }
}


export const activateOfferValidation = (data)=>{
    const { recipient,operators,price,currentBalance} = data
    if(recipient!==undefined){
        let emptyValidationText = checkEmpty(recipient, 'একটি ফোন নাম্বার টাইপ করুন')
        if(emptyValidationText!==''){
            return emptyValidationText;

        }

        const validation_object = operator(recipient)
      
        

        const temp = validation_object.operator
        const toLower = temp.toLowerCase()

        if(toLower!==operators){
            return `নাম্বারটি ভ্যালিড ${operators} নাম্বার নয়।`
    
        }

        if(parseInt(price)>parseInt(currentBalance)){
            return "আপনার একাউন্টে যথেষ্ট পরিমাণ ব্যালেন্স নেই।"

        }
    

    }

}

export const addBalanceValidation = (data)=>{
    const { phone,trx_id,amount} = data
   

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

    if (trx_id !== undefined) {
        let emptyValidationText = checkEmpty(trx_id, 'ট্রানজেকশন আইডি লিখুন')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        }
    }

    if (amount !== undefined) {
        let emptyValidationText = checkEmpty(amount, 'এমাউন্ট টাইপ করুন')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        }

        if(parseInt(amount)<500){
            return " ৫০০ টাকার চেয়ে কম এমাউন্ট যুক্ত করতে পারবেন "

        }
    }

}





