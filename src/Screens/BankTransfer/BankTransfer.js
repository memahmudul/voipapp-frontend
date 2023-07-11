//import liraries
import React, {useState,useEffect } from 'react';
import { View, Text, StyleSheet,SafeAreaView,ScrollView } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import ButtonWithLoader from '../../components/ButtonWithLoader';
import Icon from 'react-native-vector-icons/FontAwesome5'
import TextInputWithLabels from '../../components/TextInputWithLabel';
import RadioButtonRN from 'radio-buttons-react-native';
import { bankTransferValidation } from '../../utils/validations';
import { showError,showSuccess } from '../../utils/helperFunction';
import { useSelector } from 'react-redux';
import actions from '../../redux/actions';
import { addSingleTransactionState } from '../../redux/actions/transactionorder';
import { updateCommissionState } from '../../redux/actions/commission';

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
        if(commissionRate[i].transaction_type==='bank-transfer'){
            return commissionRate[i].rate
        }
    }
   }

   const finalCommission = rate()

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
                    admin,
                    bank,
                    branch,
                    account_no,
                    account_name,
                    
                    type,
                    amount,
                    sender_username: username,
                    sender_email:email,
                    sender_phone:phone,
                    status: 'pending',
                    commission:finalCommission




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
       
        

<Text style={{fontSize:18,fontFamily:'Li Sirajee Sanjar Unicode',marginBottom:10,color:'#E31D25'}}>ব্যাংক</Text>



        
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
        defaultButtonText="ব্যাংক সিলেক্ট করুন"
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
            label="ব্রাঞ্চ"
            placeHolder="ব্রাঞ্চের নাম"
            onChangeText={(branch) => updateState({ branch })}
            
        />
        <TextInputWithLabels
            label="একাউন্ট নাম্বার"
            placeHolder="ব্যাংক একাউন্ট নাম্বার"
            keyboardType='numeric'
            onChangeText={(account_no) => updateState({ account_no })}
            
        />
        <TextInputWithLabels
            label="একাউন্টের নাম"
            placeHolder="ব্যাংক একাউন্ট নেম"
            onChangeText={(account_name) => updateState({ account_name })}
            
        />
       
         
       
        <TextInputWithLabels
            label="এমাউন্ট"
            placeHolder="এমাউন্ট টাইপ করুন"
            keyboardType='numeric'
            onChangeText={(amount) => updateState({ amount })}
            
        />
         <Text style={{fontSize:18,fontFamily:'Li Sirajee Sanjar Unicode',marginBottom:10,color:'#E31D25'}}>একাউন্ট টাইপ সিলেক্ট করুন</Text>
        <RadioButtonRN
     
        activeColor='#E31D25'
        textStyle = {{color:'#E31D25',textTransform:'uppercase',fontWeight:'bold'}}
  data={typeData}
  box={false}
  selectedBtn={(type) => updateTypeState(type)}
/>
      
        


        
        
        
        <ButtonWithLoader text="সেন্ড করুন" onPress={()=>onSend()} isLoading={isLoading}/>
       
      
        
        
          
        
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
