import React, {useState } from 'react';
import { View, Text, StyleSheet,SafeAreaView,ScrollView } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import ButtonWithLoader from '../../components/ButtonWithLoader';
import TextInputWithLabels from '../../components/TextInputWithLabel';
import RadioButtonRN from 'radio-buttons-react-native';
import { showError,showSuccess } from '../../utils/helperFunction';
import { useSelector } from 'react-redux';
import actions from '../../redux/actions';
import { billPayValidation } from '../../utils/validations';
import { addSingleTransactionState } from '../../redux/actions/transactionorder';

// create a component
const BillPay = () => {

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

    const {email,username,phone} = useSelector((state)=> state.auth.userData.user)
    const currentBalance = useSelector((state)=> state.balance.balance)
    

   
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
        console.log(type);
      
       
       
        const checkValid = isValidData(type)
        
        if (checkValid) {
            updateState({ isLoading: true })
            try {

                let result;
               
               
               if(type==='prepaid'){
                result = await actions.placeBillPayOrder({
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
                    status: 'pending'




                })
                
                
               }else if(type==='postpaid'){
                result = await actions.placeBillPayOrder({
                    bill_service,
                    type,
                    
                    account_no,
                    
                    amount,
                    sender_username: username,
                    sender_email:email,
                    sender_phone:phone,
                    status: 'pending'




                })

               }

               

                

                

                
                if(result[0]==='billpay-order-success'){
                    console.log('huuuuu');
                   
                  
                    
                addSingleTransactionState(result[1])
                updateState({ isLoading: false })
                //     showSuccess('Order placed Successfully')
                    
                    
                //    navigation.navigate('Home')
                // }else{
                //     showError(result[0])
                //     updateState({ isLoading: false })
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
        buttonStyle={{width:'100%',marginBottom:15}}
        defaultButtonText= 'Select Bill Type'
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
        buttonStyle={{width:'100%',marginBottom:15}}
        defaultButtonText= 'Bill Service'
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
        buttonStyle={{width:'100%',marginBottom:15}}
        defaultButtonText= 'Month'
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
            label="bill Meter No"
            placeHolder="Enter bill Meter No"
            onChangeText={(meter_no) => updateState({ meter_no })}
            
        />
        :
        ''

        }

        <TextInputWithLabels
            label="bill Account No"
            placeHolder="Enter bill Account No"
            onChangeText={(account_no) => updateState({ account_no })}
            
        />

{
            type==='prepaid'? 
            <TextInputWithLabels
            label="bill Contact No"
            placeHolder="Enter bill Contact No"
            onChangeText={(contact_no) => updateState({ contact_no })}
            
        />
        :
        ''

        }

        {
            type==='prepaid'? 
            <TextInputWithLabels
            label="Biller Name"
            placeHolder="Enter biller name"
            onChangeText={(biller_name) => updateState({ biller_name })}
            
        />
        :
        ''

        }

        <TextInputWithLabels
            label="Bill Amount"
            placeHolder="Enter Bill Amount"
            onChangeText={(amount) => updateState({ amount })}
            
        />

<ButtonWithLoader text="Send Now" onPress={()=>onSend()} isLoading={isLoading}/>






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
