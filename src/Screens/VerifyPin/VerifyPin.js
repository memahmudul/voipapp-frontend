//import liraries
import React, { Component,useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import TextInputWithLabels from '../../components/TextInputWithLabel';
import { validation } from '../../utils/validations';
import { showError } from '../../utils/helperFunction';
import actions from '../../redux/actions';

import { useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

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
        <SafeAreaView>
        <TextInputWithLabels
                label="পিন"
                placeHolder="আপনার ৬ ডিজিট পিন টাইপ করুন"
                keyboardType='numeric'
                onChangeText={(pin) => updateState({ pin })}
                
            />
            <ButtonWithLoader text="কনফার্ম" onPress={onConfirm} isLoading={isLoading}/>
            <TouchableOpacity onPress={onLogout}><Text style={{fontFamily:'Li Sirajee Sanjar Unicode',fontSize:16,color:'#EE2424',textAlign:'center'}}>লগ আউট করুন</Text></TouchableOpacity>
        </SafeAreaView>
           
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flex: 1,
        padding: 24,
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default VerifyPin;
