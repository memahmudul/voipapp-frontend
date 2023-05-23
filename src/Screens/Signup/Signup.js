//import liraries
import React, { Component,useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import TextInputWithLabels from '../../components/TextInputWithLabel';
import { SignupFirstValidation } from '../../utils/validations';
import { showError } from '../../utils/helperFunction';
import actions from '../../redux/actions';






// create a component
const Signup = ({navigation}) => {

    
    const [state, setState] = useState({
        isLoading: false,
        name: '',
        username: '',
        phone: '',
        email: '',
    })
    const { name,username, phone,email,isLoading } = state
    const updateState = (data) => setState(() => ({ ...state, ...data }))


    const isValidData = () => {
        const error = SignupFirstValidation({
            name,
            username,
            phone,
            email,
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
                const result = await actions.signupfirstpage({
                    name,
                    username,
                    phone,
                    email

                })
                
                if(result==='signup-first-page-validation-success'){
                    console.log('success');
                    updateState({ isLoading: false })
                    navigation.navigate('SignupNext',{name,username,phone,email})
                }else{
                    showError(result)
                    updateState({ isLoading: false })
                }
                
            } catch (error) {
                
            }
           
        }
          
    }
    return (
        <View style={styles.container}>
        <SafeAreaView>
       
        
        <TextInputWithLabels
            label="রিসেলারের নাম"
            placeHolder="আপনার নাম টাইপ করুন"
            onChangeText={(name) => updateState({ name })}
            
        />
        <TextInputWithLabels
            label="রিসেলারের ইউজার নেম"
            placeHolder="আপনার ইউজার নেম টাইপ করুন"
            onChangeText={(username) => updateState({ username })}
            
        />
        <TextInputWithLabels
            label="রিসেলারের ফোন নাম্বার"
            placeHolder="আপনার ফোন নাম্বার টাইপ করুন"
            onChangeText={(phone) => updateState({ phone })}
            
        />
        <TextInputWithLabels
            label="রিসেলারের ইমেইল"
            placeHolder="আপনার ইমেইল টাইপ করুন"
            onChangeText={(email) => updateState({ email })}
            
        />
       
        <ButtonWithLoader text="পরবর্তী পেজে যান" onPress={onSignUp} isLoading={isLoading}/>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'center',marginTop:10}}>
      <Text style={{fontFamily:'Li Sirajee Sanjar Unicode'}}>অলরেডি একাউন্ট আছে?  </Text>
      <TouchableOpacity onPress={()=> navigation.navigate('Login')}><Text style={{fontFamily:'Li Sirajee Sanjar Unicode',fontSize:16,color:'#EE2424'}}>এখানে লগইন করুন</Text></TouchableOpacity>
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
        backgroundColor: 'white',
        
       
    },
   
});

//make this component available to the app
export default Signup;
