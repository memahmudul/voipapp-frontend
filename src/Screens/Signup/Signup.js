//import liraries
import React, { Component,useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import TextInputWithLabels from '../../components/TextInputWithLabel';
import validations from '../../utils/validations.js';
import { showError } from '../../utils/helperFunction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
import actions from '../../redux/actions';



// create a component
const Signup = ({navigation}) => {
    const [state, setState] = useState({
        isLoading: false,
        name: '',
        country:'BD',
        username: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: "",
        role:'user',
        pin:'',
        confirmPin:'',
        isSecure: true
    })
    const { name,username,country, phone,email, password,confirmPassword,role, isSecure,isLoading,pin,confirmPin } = state
    const updateState = (data) => setState(() => ({ ...state, ...data }))


    const isValidData = () => {
        const error = validations({
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
                    country,
                    phone,
                    email,
                    password,
                    pin,
                    role

                })
                
                if(result==='signup-success'){
                    updateState({ isLoading: false })
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
        <ScrollView>
        <TextInputWithLabels
            label="Name"
            placeHolder="enter your full name"
            onChangeText={(name) => updateState({ name })}
            
        />
        <TextInputWithLabels
            label="Username"
            placeHolder="enter username"
            onChangeText={(username) => updateState({ username })}
            
        />
        <TextInputWithLabels
            label="Phone"
            placeHolder="enter your phone number"
            onChangeText={(phone) => updateState({ phone })}
            
        />
        <TextInputWithLabels
            label="Email"
            placeHolder="enter your email"
            onChangeText={(email) => updateState({ email })}
            
        />
        <TextInputWithLabels
            label="Password"
            placeHolder="enter your password"
            isSecure={isSecure}
            onChangeText={(password) => updateState({ password })}
           
            
        />
        <TextInputWithLabels
            label="Confirm Password"
            placeHolder="enter your password again"
            isSecure={isSecure}
            onChangeText={(confirmPassword) => updateState({ confirmPassword })}
           
            
        />

<TextInputWithLabels
            label="Pin"
            placeHolder="Enter your pin"
            isSecure={isSecure}
            onChangeText={(pin) => updateState({ pin })}
           
            
        />
        <TextInputWithLabels
            label="Confirm Pin"
            placeHolder="Enter your confirm pin"
            isSecure={isSecure}
            onChangeText={(confirmPin) => updateState({ confirmPin })}
           
            
        />
        <ButtonWithLoader text="Sign Up" onPress={onSignUp} isLoading={isLoading}/>
        <TouchableOpacity onPress={()=> navigation.navigate('Login')}><Text>LOG IN</Text></TouchableOpacity>
        </ScrollView>
        
        
          
        
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
export default Signup;
