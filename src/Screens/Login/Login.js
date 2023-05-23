//import liraries
import React, { Component,useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import TextInputWithLabels from '../../components/TextInputWithLabel';
import { validation } from '../../utils/validations';
import { showError,showSuccess } from '../../utils/helperFunction';
import actions from '../../redux/actions';
import { login } from '../../redux/actions/auth';
import { setUserData } from '../../utils/asyncStorage';
import { saveUserData } from '../../redux/actions/auth';


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
        const error = validation({
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
                
            const login_result = await actions.login({
                    email,
                    password
                })
                if(login_result[0]=='login-success'){
                   
                    
                  
                    
                   
                    
                    setUserData(login_result[1]); //to add user data to async storage
		
        
		saveUserData(login_result[1])
        showSuccess('লগইন সাকসেস')
        updateState({ isLoading: false }) //to update state so that everything gets rendered
                }else{
                    

                    showError(login_result[0])


                    updateState({ isLoading: false })

                }
              
              
                
                
                
                
            } catch (error) {
                
                showError(error)
                updateState({ isLoading: false })
            }
            

           
        }
    }



    return (
        <View style={styles.container}>
            <SafeAreaView>
            <TextInputWithLabels
                label="ইমেইল"
                placeHolder="আপনার ইমেইল টাইপ করুন"
                onChangeText={(email) => updateState({ email })}
                
            />
            <TextInputWithLabels
                label="পাসওয়ার্ড"
                placeHolder="আপনার পাসওয়ার্ড টাইপ করুন"
                isSecure={isSecure}
                onChangeText={(password) => updateState({ password })}
               
                
            />
            <ButtonWithLoader text="লগইন করুন" onPress={onLogin} isLoading={isLoading}/>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'center',marginTop:10}}>
      <Text style={{fontFamily:'Li Sirajee Sanjar Unicode',fontSize:16}}>একাউন্ট নেই?  </Text>
      <TouchableOpacity onPress={()=> navigation.navigate('Signup')}><Text style={{fontFamily:'Li Sirajee Sanjar Unicode',fontSize:16,color:'#EE2424'}}>এখানে সাইন আপ করুন</Text></TouchableOpacity>
      </View>
            
            
              
            
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
