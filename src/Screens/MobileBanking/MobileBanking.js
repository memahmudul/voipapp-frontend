//import liraries
import React, { Component,useState } from 'react';
import { View, Text, StyleSheet,SafeAreaView } from 'react-native';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import TextInputWithLabels from '../../components/TextInputWithLabel';
import SelectDropdown from 'react-native-select-dropdown'
import validations from '../../utils/validations.js';
import { showError } from '../../utils/helperFunction';

// create a component
const MobileBanking = ({route}) => {
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

    const { recipient,amount,type,isLoading} = state
    
    const updateState = (data) => setState(() => ({ ...state, ...data }))

    const isValidData = () => {
        const error = validations({
            recipient,
            amount,
            type,
           
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
                console.log(state);
                updateState({ isLoading: false })
                // const result = await actions.signup({
                //     name,
                //     username,
                //     country,
                //     phone,
                //     email,
                //     password,
                //     pin,
                //     role

                // })
                
                // if(result==='signup-success'){
                //     updateState({ isLoading: false })
                //     navigation.navigate('Login')
                // }else{
                //     showError(result)
                //     updateState({ isLoading: false })
                // }
                    
               

                
                
                
                
                
               
            } catch (error) {
                console.log("error raised")
                showError(error.message)
                updateState({ isLoading: false })
            }
           
            

            
        }
    }

    return (
        <View style={styles.container}>
        <SafeAreaView>
       
        <TextInputWithLabels
            label="Enter Recipient"
            placeHolder="eg: 01*********"
            onChangeText={(recipient) => updateState({ recipient })}
            
        />

<Text style={{fontSize:16,fontWeight:'bold' ,marginBottom:10}}>Select Mobile Banking</Text>

<SelectDropdown
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
        />
       
        <TextInputWithLabels
            label="Amount"
            placeHolder="eg: 100"
            onChangeText={(amount) => updateState({ amount })}
            
        />
        <Text style={{fontSize:16,fontWeight:'bold' ,marginBottom:10}}>Type</Text>


        <SelectDropdown
        buttonStyle={{width:'100%',marginBottom:15}}
        defaultButtonText="Select A Type"
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
        
        
        <ButtonWithLoader text="Send Now" onPress={()=>onSend()} isLoading={isLoading}/>
       
      
        
        
          
        
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
