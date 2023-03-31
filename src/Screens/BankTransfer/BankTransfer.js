//import liraries
import React, {useState } from 'react';
import { View, Text, StyleSheet,SafeAreaView,ScrollView } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import ButtonWithLoader from '../../components/ButtonWithLoader';
import TextInputWithLabels from '../../components/TextInputWithLabel';
import RadioButtonRN from 'radio-buttons-react-native';
import { bankTransferValidation } from '../../utils/validations';
import { showError,showSuccess } from '../../utils/helperFunction';
import { useSelector } from 'react-redux';
import actions from '../../redux/actions';
import { addSingleTransactionState } from '../../redux/actions/transactionorder';

// create a component
const BankTransfer = ({navigation}) => {
    const bankData = ["Brac Bank", "Islami Bank", "DBBL","Mutual Trust Bank","Meghna Bank","Jamuna bank","City Bank"]
    const typeData = [
        {
          label: 'savings'
         },
         {
          label: 'current'
         }
        ];

    const [state, setState] = useState({
        isLoading: false,
        
        bank: '',
        branch:'',
        account_no:'',
        account_name:'',
        
        amount: '',
        type:''
        
    })

    const { isLoading,bank,branch,account_no,account_name,amount,type} = state
    const updateState = (data) => setState(() => ({ ...state, ...data }))
    const {email,username,phone} = useSelector((state)=> state.auth.userData.user)
    const currentBalance = useSelector((state)=> state.balance.balance)

    const updateTypeState = (data)=>{
        const type = data.label
       
        updateState({type})

    }



    const isValidData = () => {
        const error = bankTransferValidation({
            bank,
            branch,
            account_no,
            account_name,
            
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
        console.log(state);
      
       
       
        const checkValid = isValidData()
        
        if (checkValid) {
            updateState({ isLoading: true })
            try {
               
               
                const result = await actions.placeBankingOrder({
                    bank,
                    branch,
                    account_no,
                    account_name,
                    
                    type,
                    amount,
                    sender_username: username,
                    sender_email:email,
                    sender_phone:phone,
                    status: 'pending'




                })
                

                

                

                
                if(result[0]==='banking-order-success'){
                   
                  
                    
                    addSingleTransactionState(result[1])
                    updateState({ isLoading: false })
                    showSuccess('Order placed Successfully')
                    
                    
                   navigation.navigate('Home')
                }else{
                    showError(result[0])
                    updateState({ isLoading: false })
                }
                    
               

                
                
                
                
                
               
            } catch (error) {
                // console.log(error)
                // showError(error)
                updateState({ isLoading: false })
            }
           
            

            
        }
    }
    return (
        <ScrollView>
            <View style={styles.container}>
        <SafeAreaView>
       
        

<Text style={{fontSize:16,fontWeight:'bold' ,marginBottom:10}}>Select Bank</Text>

<SelectDropdown
        buttonStyle={{width:'100%',marginBottom:15}}
        defaultButtonText= 'Click to select a bank'
            data={bankData}
            onSelect={(bank, index) => {
                updateState({ bank })
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
            label="Branch"
            placeHolder="Enter Branch"
            onChangeText={(branch) => updateState({ branch })}
            
        />
        <TextInputWithLabels
            label="Account Number"
            placeHolder="Enter bank a/c no"
            onChangeText={(account_no) => updateState({ account_no })}
            
        />
        <TextInputWithLabels
            label="Account Name"
            placeHolder="Enter bank a/c name"
            onChangeText={(account_name) => updateState({ account_name })}
            
        />
       
         
       
        <TextInputWithLabels
            label="Amount"
            placeHolder="Enter Amount"
            onChangeText={(amount) => updateState({ amount })}
            
        />
         <Text style={{fontSize:16,fontWeight:'bold' ,marginBottom:10}}>Select Type</Text>
        <RadioButtonRN
  data={typeData}
  box={false}
  selectedBtn={(type) => updateTypeState(type)}
/>
      
        


        
        
        
        <ButtonWithLoader text="Send Now" onPress={()=>onSend()} isLoading={isLoading}/>
       
      
        
        
          
        
        </SafeAreaView>
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
export default BankTransfer;
