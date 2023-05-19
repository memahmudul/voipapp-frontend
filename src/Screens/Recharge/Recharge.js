//import liraries
import React, { useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SelectDropdown from 'react-native-select-dropdown'
import ButtonWithLoader from '../../components/ButtonWithLoader';
import TextInputWithLabels from '../../components/TextInputWithLabel';
import RadioButtonRN from 'radio-buttons-react-native';
import { useSelector } from 'react-redux';
import { rechargeValidation } from '../../utils/validations';
import { showError,showSuccess } from '../../utils/helperFunction';
import { addSingleTransactionState } from '../../redux/actions/transactionorder';
import actions from '../../redux/actions';


// create a component
const Recharge = ({navigation}) => {


    const operatorData = ["GrameenPhone", "Banglalink", "Robi","Teletalk","Airtel"]
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
        
        operators: '',
       
        recipient:'',
        
        amount: '',
        type:''
        
    })

    const { isLoading,operators,recipient,amount,type} = state
    const updateState = (data) => setState(() => ({ ...state, ...data }))
    const {email,username,phone} = useSelector((state)=> state.auth.userData.user)
    const currentBalance = useSelector((state)=> state.balance.balance)

    const updateTypeState = (data)=>{
        const type = data.label
       
        updateState({type})

    }



    const isValidData = () => {
        const error = rechargeValidation({
            operators,
            recipient,
            type,
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
        
      
       
       
        const checkValid = isValidData()
        
        if (checkValid) {
            updateState({ isLoading: true })
            try {
                
                
               
               
                const result = await actions.placeRechargeOrder({
                    operators,
                    recipient,
                    type,
                    amount,
                    sender_username: username,
                    sender_email:email,
                    sender_phone:phone,
                    status: 'pending'




                })
                

                

                

                
                if(result[0]==='recharge-order-success'){
                   
                  
                    
                    addSingleTransactionState(result[1])
                    updateState({ isLoading: false })
                    showSuccess('Order placed Successfully')
                    
                    
                   navigation.navigate('Home')
                }else{
                    showError(result[0])
                    updateState({ isLoading: false })
                }
                    
               

                
                
                
                
                
               
            } catch (error) {
                console.log(error)
                showError(error)
                updateState({ isLoading: false })
            }
           
            

            
        }
    }
    
    return (
        <View style={styles.container}>
            <SafeAreaView>
            <Text style={{fontSize:16,fontWeight:'bold' ,marginBottom:10}}>Select Operator</Text>

            <SelectDropdown
        buttonStyle={{width:'100%',marginBottom:15}}
        defaultButtonText= 'Click to select an operator'
            data={operatorData}
            onSelect={(operators, index) => {
                updateState({ operators })
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

<TextInputWithLabels
            label="Phone"
            placeHolder="Enter Phone Number"
            onChangeText={(recipient) => updateState({ recipient })}
            
        />

<TextInputWithLabels
            label="Amount"
            placeHolder="Enter Recharge Amount"
            onChangeText={(amount) => updateState({ amount })}
            
        />


<RadioButtonRN
  data={typeData}
  box={false}
  selectedBtn={(type) => updateTypeState(type)}
/>

<ButtonWithLoader text="Recharge Now" onPress={()=>onSend()} isLoading={isLoading}/>
            </SafeAreaView>
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
export default Recharge;
