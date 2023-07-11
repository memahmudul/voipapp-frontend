//import liraries
import React, { Component,useState,useEffect } from 'react';
import { View, Text, StyleSheet,SafeAreaView } from 'react-native';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import TextInputWithLabels from '../../components/TextInputWithLabel';
import SelectDropdown from 'react-native-select-dropdown'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { validation } from '../../utils/validations.js';
import { showError,showSuccess } from '../../utils/helperFunction';
import {  useSelector } from 'react-redux';
import actions from '../../redux/actions';
import { addSingleTransactionState } from '../../redux/actions/transactionorder';
import { updateCommissionState } from '../../redux/actions/commission';



// create a component
const MobileBanking = ({route,navigation}) => {
    const valuefrompreviouspage = route.params.method
    const typeSelect = ["Cash in", "Cash Out", "Send Money"]
    const bankSelect = ["bkash", "rocket", "nagad","surecash","mcash","ucash","okwallet"]

    const [state, setState] = useState({
        isLoading: false,
        recipient: '',
        bank: valuefrompreviouspage,
        
        amount: '',
        type:''
    })

    const { recipient,amount,type,isLoading,bank} = state
    const currentBalance = useSelector((state)=> state.balance.balance)
    const {admin,email,username,phone} = useSelector((state)=> state.auth.userData.user)


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
        if(commissionRate[i].transaction_type==='mobile-banking'){
            return commissionRate[i].rate
        }
    }
   }


   const finalCommission = rate()





    
    
    const updateState = (data) => setState(() => ({ ...state, ...data }))

    const isValidData = () => {
        const error = validation({
            recipient,
            amount,
            type,
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
                const result = await actions.placeMobileBankingOrder({
                    admin,
                    receiver:recipient,
                    banking_method:bank,
                    
                    type,
                    amount,
                    sender_username: username,
                    sender_email:email,
                    sender_phone:phone,
                    status: 'pending',
                    commission:finalCommission




                })
                

                

                
                if(result[0]==='mobile-banking-order-success'){
                    
                    addSingleTransactionState(result[1].data)
                    updateState({ isLoading: false })
                    showSuccess('Order placed Successfully')
                    
                    
                    navigation.navigate('Home')
                }else{
                    showError(result)
                    updateState({ isLoading: false })
                }
                    
               

                
                
                
                
                
               
            } catch (error) {
                // console.log(error)
                // showError(error)
                updateState({ isLoading: false })
            }
           
            

            
        }
    }


    const myIcon  = ()=>{
        return (
            <Icon name="arrow-right"  backgroundColor="transparent" color="#E31D25"></Icon>
        )
    }

    return (
        <View style={styles.container}>
        <SafeAreaView>
        <View>
            {
                valuefrompreviouspage==='bkash'? <Text style={{fontSize:30,marginBottom:10,color:'#E31D25',textAlign:'center',fontFamily:'Li Sirajee Sanjar Unicode'}}>বিকাশ</Text>:
                valuefrompreviouspage==='nagad'? <Text style={{fontSize:30,marginBottom:10,color:'#E31D25',textAlign:'center',fontFamily:'Li Sirajee Sanjar Unicode'}}>নগদ</Text>:
                valuefrompreviouspage==='rocket'? <Text style={{fontSize:30,marginBottom:10,color:'#E31D25',textAlign:'center',fontFamily:'Li Sirajee Sanjar Unicode'}}>রকেট</Text>:
                valuefrompreviouspage==='ucash'? <Text style={{fontSize:30,marginBottom:10,color:'#E31D25',textAlign:'center',fontFamily:'Li Sirajee Sanjar Unicode'}}>ইউক্যাশ</Text>:
                valuefrompreviouspage==='surecash'? <Text style={{fontSize:30,marginBottom:10,color:'#E31D25',textAlign:'center',fontFamily:'Li Sirajee Sanjar Unicode'}}>শিওরক্যাশ</Text>:
                valuefrompreviouspage==='mcash'? <Text style={{fontSize:30,marginBottom:10,color:'#E31D25',textAlign:'center',fontFamily:'Li Sirajee Sanjar Unicode'}}>এমক্যাশ</Text>:
                valuefrompreviouspage==='okbanking'? <Text style={{fontSize:30,marginBottom:10,color:'#E31D25',textAlign:'center',fontFamily:'Li Sirajee Sanjar Unicode'}}>ওকে ব্যাংকিং</Text>:
                valuefrompreviouspage==='upay'? <Text style={{fontSize:30,marginBottom:10,color:'#E31D25',textAlign:'center',fontFamily:'Li Sirajee Sanjar Unicode'}}>উপায়</Text>:''
                
            }
        </View>
       
        <TextInputWithLabels
            label="ফোন নাম্বার"
            placeHolder="01*********"
            keyboardType='numeric'
            onChangeText={(recipient) => updateState({ recipient })}
            
        />



{/* <SelectDropdown
        buttonStyle={{width:'100%',marginBottom:15}}
        defaultButtonText= {valuefrompreviouspage}
            data={bankSelect}
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
        /> */}
       
        <TextInputWithLabels
            label="এমাউন্ট"
            placeHolder="500"
            keyboardType='numeric'
            onChangeText={(amount) => updateState({ amount })}
            
        />
        <Text style={{fontSize:18,fontFamily:'Li Sirajee Sanjar Unicode',marginBottom:10,color:'#E31D25'}}>পেমেন্ট টাইপ</Text>


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
        defaultButtonText="সিলেক্ট করুন"
            data={typeSelect}
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
        
        
        <ButtonWithLoader text="সেন্ড করুন" onPress={()=>onSend()} isLoading={isLoading}/>
       
      
        
        
          
        
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
export default MobileBanking;
