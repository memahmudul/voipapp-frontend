import React, {useState,useEffect } from 'react';
import { View, Text, StyleSheet,SafeAreaView,ScrollView } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import ButtonWithLoader from '../../components/ButtonWithLoader';
import TextInputWithLabels from '../../components/TextInputWithLabel';
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { showError,showSuccess } from '../../utils/helperFunction';
import { useSelector } from 'react-redux';
import actions from '../../redux/actions';
import { billPayValidation } from '../../utils/validations';
import { addSingleTransactionState } from '../../redux/actions/transactionorder';
import { updateCommissionState } from '../../redux/actions/commission';

// create a component
const BillPay = ({navigation}) => {

    const billData = ["Gas", "Electricity", "Water","Internet","Telephone","TV","Education","Credit Card","others","Western Union"]
    const monthData = ["January", "February", "March","April","May","June","July","August","September","October","November",'December']
    const typeData = [
        'prepaid',
         'postpaid'
         
        ];

    const [state, setState] = useState({
        isLoading: false,
        
        bill_service: '',
        type:'',
        month:'',
        meter_no:'',
        account_no:'',
        contact_no:'',

        biller_name:'',
        
        amount: '',
       
        
    })

    const { isLoading,bill_service,type,month,meter_no,account_no,contact_no,biller_name,amount} = state
    const updateState = (data) => setState(() => ({ ...state, ...data }))

    const {admin,email,username,phone} = useSelector((state)=> state.auth.userData.user)
    const currentBalance = useSelector((state)=> state.balance.balance)


    const fetchCommission = async()=>{
        const result = await actions.getCommission()
       
      
       
        
         
         
        if(result){
          const data = result.result[0].commission

          console.log(data);
         
       
                 updateCommissionState(data)
         }else{
            showError('Error Occurred')
         }  
  
      }


      
      

      useEffect(()=>{

       
        fetchCommission()
       
      },[]) 
    const commissionRate = useSelector((state)=> state.commission.commission)
   
   const rate = ()=>{
    for(let i = 0;i<commissionRate.length;i++){
        if(commissionRate[i].transaction_type==='bill-pay'){
            return commissionRate[i].rate
        }
    }
   }

   const finalCommission = rate()
    

   
    const isValidData = (type) => {
        if(type==='prepaid'){
            const error = billPayValidation({
                bill_service,
                type,
                month,
                meter_no,
                account_no,
                contact_no,
                biller_name,
                amount,
                currentBalance
            })
            
            if (error) {
                showError(error)
                return false
            }
            return true
        }else if(type==='postpaid'){
            const error = billPayValidation({
                bill_service,
                type,
               
                account_no,
                
                amount,
                currentBalance
            })
            
            if (error) {
                showError(error)
                return false
            }
            return true

        }else{
            const error = billPayValidation({
                type
               
            })
            
            if (error) {
                showError(error)
                return false
            }
            return true

        }
    }


    const onSend = async () => {
       
      
       
       
        const checkValid = isValidData(type)
        
        if (checkValid) {
            updateState({ isLoading: true })
            try {

                let result;
               
               
               if(type==='prepaid'){
                result = await actions.placeBillPayOrder({
                    admin,
                    bill_service,
                    type,
                    month,
                    meter_no,
                    account_no,
                    contact_no,
                    biller_name,
                    amount,
                    sender_username: username,
                    sender_email:email,
                    sender_phone:phone,
                    status: 'pending',
                    commission:finalCommission




                })
                
                
               }else if(type==='postpaid'){
                result = await actions.placeBillPayOrder({
                    admin,
                    bill_service,
                    type,
                    
                    account_no,
                    
                    amount,
                    sender_username: username,
                    sender_email:email,
                    sender_phone:phone,
                    status: 'pending',
                    commission:rate()




                })

               }

               

                

                

                
                if(result[0]==='billpay-order-success'){
                    console.log('huuuuu');
                   
                  
                    
                addSingleTransactionState(result[1])
               
                    showSuccess('Order placed Successfully')
                    updateState({ isLoading: false })
                    
                    
                   navigation.navigate('Home')
                }else{
                    showError(result[0])
                    updateState({ isLoading: false })
                }
                    
               

                
                
                
                
                
               
            } catch (error) {
                showError(error)
                updateState({ isLoading: false })
            }
           
            

            
        }
    }




    return (

       <ScrollView showsVerticalScrollIndicator={false}>
       <View style={styles.container}>
      

<SelectDropdown
        buttonStyle={{width:'100%',marginBottom:15,backgroundColor:'#E31D25',borderRadius:10}}
        buttonTextStyle={{color:'white',fontFamily:'Li Sirajee Sanjar Unicode'}}
        renderDropdownIcon = {
            ()=>{
                return <Icon name="angle-down"  backgroundColor="transparent" color="white" size={25}></Icon>
            }
        }
        dropdownStyle={{backgroundColor:'#E31D25',color:'white'}}
        rowTextStyle={{color:'white'}}
        defaultButtonText= 'বিলের ধরন সিলেক্ট করুন'
            data={typeData}
            onSelect={(type, index) => {
                updateState({ type })
	}}

    buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}

    rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
        />

















      

<SelectDropdown
        buttonStyle={{width:'100%',marginBottom:15,backgroundColor:'#E31D25',borderRadius:10}}
        buttonTextStyle={{color:'white',fontFamily:'Li Sirajee Sanjar Unicode'}}
        renderDropdownIcon = {
            ()=>{
                return <Icon name="angle-down"  backgroundColor="transparent" color="white" size={25}></Icon>
            }
        }
        dropdownStyle={{backgroundColor:'#E31D25',color:'white'}}
        rowTextStyle={{color:'white'}}
        defaultButtonText= 'সার্ভিস সিলেক্ট করুন'
            data={billData}
            onSelect={(bill_service, index) => {
                updateState({ bill_service })
	}}

    buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}

    rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
        />
       
        {
            type==='prepaid'? 
            <SelectDropdown
        buttonStyle={{width:'100%',marginBottom:15,backgroundColor:'#E31D25',borderRadius:10}}
        buttonTextStyle={{color:'white',fontFamily:'Li Sirajee Sanjar Unicode'}}
        renderDropdownIcon = {
            ()=>{
                return <Icon name="angle-down"  backgroundColor="transparent" color="white" size={25}></Icon>
            }
        }
        dropdownStyle={{backgroundColor:'#E31D25',color:'white'}}
        rowTextStyle={{color:'white'}}
        defaultButtonText= 'মাস সিলেক্ট করুন'
            data={monthData}
            onSelect={(month, index) => {
                updateState({ month })
	}}

    buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}

    rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
        />

        

        
        :
        ''

        }


        {
            type==='prepaid'? 
            <TextInputWithLabels
            label="মিটার নং"
            placeHolder="বিল মিটার নং টাইপ করুন"
            keyboardType='numeric'
            onChangeText={(meter_no) => updateState({ meter_no })}
            
        />
        :
        ''

        }

        <TextInputWithLabels
            label="একাউন্ট নাম্বার"
            keyboardType='numeric'
            placeHolder="বিল একাউন্ট নাম্বার টাইপ করুন"
            onChangeText={(account_no) => updateState({ account_no })}
            
        />

{
            type==='prepaid'? 
            <TextInputWithLabels
            label="কন্টাক্ট নাম্বার"
            keyboardType='numeric'
            placeHolder="বিল কন্টাক্ট নাম্বার টাইপ করুন"
            onChangeText={(contact_no) => updateState({ contact_no })}
            
        />
        :
        ''

        }

        {
            type==='prepaid'? 
            <TextInputWithLabels
            label="বিলার নেম"
            placeHolder="বিলার নেম টাইপ করুন"
            onChangeText={(biller_name) => updateState({ biller_name })}
            
        />
        :
        ''

        }

        <TextInputWithLabels
            label="এমাউন্ট"
            placeHolder="বিল এমাউন্ট টাইপ করুন"
            keyboardType='numeric'
            onChangeText={(amount) => updateState({ amount })}
            
        />

<ButtonWithLoader text="সেন্ড করুন" onPress={()=>onSend()} isLoading={isLoading}/>






       </View>

       </ScrollView>
        
       
        
        
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'white'
    },
});

//make this component available to the app
export default BillPay;
