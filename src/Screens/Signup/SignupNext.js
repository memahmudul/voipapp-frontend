//import liraries
import React, { useState} from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import TextInputWithLabels from '../../components/TextInputWithLabel';
import actions from '../../redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { validation } from '../../utils/validations';
import { showError,showSuccess } from '../../utils/helperFunction';

// create a component
const SignupNext = ({route,navigation}) => {
    const item =route.params

    const [state, setState] = useState({
        name: item.name,
        username: item.username,
        phone: item.phone,
        email: item.email,
        admin:item.admin,
        isLoading: false,
        password: '',
        confirmPassword: "",
        role:'user',
        pin:'',
        confirmPin:'',
        isSecure: true
    })
    const updateState = (data) => setState(() => ({ ...state, ...data }))

    const {  name,username,email,phone,admin,password,confirmPassword,role, isSecure,isLoading,pin,confirmPin } = state

    const isValidData = () => {
        const error = validation({
            name,
            username,
            phone,
            email,
            
            password,
            confirmPassword,
            pin,
            confirmPin
        })
        if (error) {
            showError(error)
            return false
        }
        return true
    }

    


    const onSignUp = async () => {
       
       
        const checkValid = isValidData()
        if (checkValid) {
            updateState({ isLoading: true })
            try {
                const result = await actions.signup({
                    name,
                    username,
                    phone,
                    email,
                    admin,
                    password,
                    pin,
                    role
                  

                })
                
                if(result==='signup-success'){
                    updateState({ isLoading: false })
                    showSuccess('Successfully signed up')
                    navigation.navigate('Login')
                }else{
                    showError(result)
                    updateState({ isLoading: false })
                }
                    
               

                
                
                
                
                
               
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
            label="পাসওয়ার্ড"
            placeHolder="আপনার পাসওয়ার্ড দিন"
            isSecure={isSecure}
            onChangeText={(password) => updateState({ password })}
           
            
        />
        <TextInputWithLabels
            label="কনফার্ম পাসওয়ার্ড"
            placeHolder="পাসওয়ার্ড নিশ্চিত করুন"
            isSecure={isSecure}
            onChangeText={(confirmPassword) => updateState({ confirmPassword })}
           
            
        />

<TextInputWithLabels
            label="পিন"
            placeHolder="সিকিউরিটি পিন দিন"
            isSecure={isSecure}
            onChangeText={(pin) => updateState({ pin })}
           
            
        />
        <TextInputWithLabels
            label="কনফার্ম পিন"
            placeHolder="সিকিউরিটি পিন নিশ্চিত করুন"
            isSecure={isSecure}
            onChangeText={(confirmPin) => updateState({ confirmPin })}
           
            
        />
         <ButtonWithLoader text="সাইন আপ করুন" onPress={onSignUp} isLoading={isLoading}/>
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
export default SignupNext;
