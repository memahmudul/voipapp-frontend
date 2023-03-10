//import liraries
import React, { Component,useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import TextInputWithLabels from '../../components/TextInputWithLabel';
import validations from '../../utils/validations.js';
import { showError } from '../../utils/helperFunction';
import actions from '../../redux/actions';
import { login } from '../../redux/actions/auth';


// create a component
const Login = ({ navigation }) => {
    const [state, setState] = useState({
        isLoading: false,
        email: '',
        password: '',
        isSecure: true
    })
    const { isLoading, email, password, isSecure } = state
    const updateState = (data) => setState(() => ({ ...state, ...data }))
   


    const isValidData = () => {
        const error = validations({
            email,
            password
        })
        if (error) {
            showError(error)
            return false
        }
        return true
    }
    const onLogin = async () => {
        const checkValid = isValidData()
        if (checkValid) {
           
           
            updateState({ isLoading: true })
            try {
                
            await actions.login({
                    email,
                    password
                })
                updateState({ isLoading: false })
              
                
                
                
                
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
            <ButtonWithLoader text="Login" onPress={onLogin} isLoading={isLoading}/>
            <TouchableOpacity onPress={()=> navigation.navigate('Signup')}><Text>SIGN UP</Text></TouchableOpacity>
            
            
              
            
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
export default Login;
