//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import TextInputWithLabels from '../../components/TextInputWithLabel';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import { showError,showSuccess } from '../../utils/helperFunction';
import { addSingleTransactionState } from '../../redux/actions/transactionorder';
import { activateOfferValidation } from '../../utils/validations';
import { useSelector } from 'react-redux';
import actions from '../../redux/actions';

// create a component
const BuyOffer = ({route,navigation}) => {
    const item =route.params

    const currentBalance = useSelector((state)=> state.balance.balance)

    const [state, setState] = useState({
        isLoading: false,
        
        operators: item.operator,
        offer_name:item.name,
       
        recipient:'',
        
        price: item.price,
        
        
    })
    const {email,username,phone} = useSelector((state)=> state.auth.userData.user)

    const updateState = (data) => setState(() => ({ ...state, ...data }))

    const { isLoading,recipient,price,operators,offer_name} = state


    const isValidData = () => {
        const error = activateOfferValidation({
            recipient,
           price,
           operators,
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
                
                
               
               
                const result = await actions.placeOfferOrder({
                    operators,
                    recipient,
                    offer_name,
                    price,
                    sender_username: username,
                    sender_email:email,
                    sender_phone:phone,
                    status: 'pending'




                })
                

                

                

                
                if(result[0]==='offer-order-success'){
                   
                  
                    
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
        <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
        <Text style={{backgroundColor:'#060047',color:'white',padding:10,fontSize:16,fontWeight:'medium',borderRadius:10}}>Operator</Text>
        <Text style={{paddingLeft:12,fontWeight:'bold',fontSize:18}}>{operators.toUpperCase()}</Text>
        </View>
        <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
        <Text style={{backgroundColor:'#060047',color:'white',padding:10,fontSize:16,fontWeight:'medium',borderRadius:10,minWidth:80}}>Offer</Text>
        <Text style={{paddingLeft:12,fontWeight:'bold',fontSize:18}}>{offer_name}</Text>
        </View>
            <TextInputWithLabels
            label="Phone"
            placeHolder="Enter Phone Number"
            onChangeText={(recipient) => updateState({ recipient })}
            
        />

<ButtonWithLoader text="Activate Now" onPress={()=>onSend()} isLoading={isLoading}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
       padding:10,
       flexDirection:'column',
       gap:10
    },
});

//make this component available to the app
export default BuyOffer;
