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
    const typeData = [
        {
          label: 'prepaid'
         },
         {
          label: 'postpaid'
         }
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

    const updateTypeState = (data)=>{
        const type = data.label
       
        updateState({type})

    }

    const isValidData = () => {
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
    }


    const onSend = async () => {
        console.log(state);
      
       
       
        const checkValid = isValidData()
        
        if (checkValid) {
            updateState({ isLoading: true })
            try {
               
               
                const result = await actions.placeBankingOrder({
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
                

                

                

                
                if(result[0]==='billpay-order-success'){
                   
                  
                    
                    addSingleTransactionState(result[1])
                    updateState({ isLoading: false })
                    showSuccess('Order placed Successfully')
                    
                    
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
        <View style={styles.container}>
            <Text>MyComponent</Text>
        </View>
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
