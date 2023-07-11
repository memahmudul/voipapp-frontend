//import liraries
import React, { useState,useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SelectDropdown from 'react-native-select-dropdown'
import ButtonWithLoader from '../../components/ButtonWithLoader';
import TextInputWithLabels from '../../components/TextInputWithLabel';
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useSelector } from 'react-redux';
import { rechargeValidation } from '../../utils/validations';
import { showError,showSuccess } from '../../utils/helperFunction';
import { addSingleTransactionState } from '../../redux/actions/transactionorder';
import actions from '../../redux/actions';
import { updateCommissionState } from '../../redux/actions/commission';

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
    const {admin,email,username,phone} = useSelector((state)=> state.auth.userData.user)
    const currentBalance = useSelector((state)=> state.balance.balance)


  



    const fetchCommission = async()=>{
        const result = await actions.getCommission()
       
      
       
        
         
         
        if(result){
          const data = result.result[0].commission

        
         
       
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
        if(commissionRate[i].transaction_type==='mobile-recharge'){
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
                    admin,
                    sender_username: username,
                    sender_email:email,
                    sender_phone:phone,
                    status: 'pending',
                    commission:finalCommission




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
         buttonStyle={{width:'100%',marginBottom:15,backgroundColor:'#E31D25',borderRadius:10}}
        buttonTextStyle={{color:'white',fontFamily:'Li Sirajee Sanjar Unicode'}}
        renderDropdownIcon = {
            ()=>{
                return <Icon name="angle-down"  backgroundColor="transparent" color="white" size={25}></Icon>
            }
        }
        dropdownStyle={{backgroundColor:'#E31D25',color:'white'}}
        rowTextStyle={{color:'white'}}
        defaultButtonText= 'অপারেটর সিলেক্ট করুন'
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
            label="ফোন"
            placeHolder="ফোন নাম্বার টাইপ করুন"
            onChangeText={(recipient) => updateState({ recipient })}
            
        />

<TextInputWithLabels
            label="এমাউন্ট"
            placeHolder="রিচার্জ এমাউন্ট টাইপ করুন"
            onChangeText={(amount) => updateState({ amount })}
            
        />
<Text style={{fontSize:18,fontFamily:'Li Sirajee Sanjar Unicode',marginBottom:10,color:'#E31D25'}}>রিচার্জ টাইপ সিলেক্ট করুন</Text>

<RadioButtonRN
  activeColor='#E31D25'
        textStyle = {{color:'#E31D25',textTransform:'uppercase',fontWeight:'bold'}}
  data={typeData}
  box={false}
  selectedBtn={(type) => updateTypeState(type)}
/>

<ButtonWithLoader text="রিচার্জ করুন" onPress={()=>onSend()} isLoading={isLoading}/>
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
