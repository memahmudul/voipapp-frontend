//import liraries
import React, { Component,useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import TextInputWithLabels from '../../components/TextInputWithLabel';
import { validation } from '../../utils/validations';
import { showError } from '../../utils/helperFunction';
import actions from '../../redux/actions';

import { useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';

// create a component
const VerifyPin = ({ navigation }) => {
    const userData = useSelector((state)=> state.auth.userData)
 
    
    let email;
    if(userData.success){
        email = userData.user.email
    }
    
    


    
    const [state, setState] = useState({
        isLoading: false,
        pin:'',
        isSecure: true
    })
    const { isLoading, pin,isSecure } = state
    const updateState = (data) => setState(() => ({ ...state, ...data }))

    const isValidData = () => {
        const error = validation({
            pin
        })
        if (error) {
            showError(error)
            return false
        }
        return true
    }

    const onLogout = ()=>{
        actions.logout()
    }


    const onConfirm = async () => {
        const checkValid = isValidData()
        if (checkValid) {
            updateState({ isLoading: true })
            try {
                const result = await actions.confirmPin({
                    pin,
                    email
                })
                 

                if(result==='verify-pin-success'){
                    updateState({ isLoading: false })
                    navigation.navigate('TabRoutes')
                }else{
                    showError(result)
                    updateState({ isLoading: false })

                }

                 
                
            } catch (error) {
                
                showError(error.message)
                updateState({ isLoading: false })
                
            }

        }

    }
    return (
        <View style={styles.container}>
            <TextInputWithLabels
                label="Enter Pin"
                placeHolder="enter your 6 digit pin"
                onChangeText={(pin) => updateState({ pin })}
                
            />
            <ButtonWithLoader text="Confirm" onPress={onConfirm} isLoading={isLoading}/>
            <TouchableOpacity onPress={onLogout}><Text>LOGOUT</Text></TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default VerifyPin;
