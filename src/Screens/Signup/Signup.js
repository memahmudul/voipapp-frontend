//import liraries
import React, { Component,useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import TextInputWithLabels from '../../components/TextInputWithLabel';
import { SignupFirstValidation } from '../../utils/validations';
import { showError } from '../../utils/helperFunction';
import actions from '../../redux/actions';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome5'






// create a component
const Signup = ({navigation}) => {


    const adminSelect = ["admin1", "admin2", "admin3"]

    
    const [state, setState] = useState({
        isLoading: false,
        name: '',
        username: '',
        phone: '',
        email: '',
        admin: ''
    })
    const { name,username, phone,email,isLoading,admin } = state
    const updateState = (data) => setState(() => ({ ...state, ...data }))


    const isValidData = () => {
        const error = SignupFirstValidation({
            name,
            username,
            phone,
            email,
            admin
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
                    email,
                    admin

                })
                
                if(result==='signup-first-page-validation-success'){
                    console.log('success');
                    updateState({ isLoading: false })
                    navigation.navigate('SignupNext',{name,username,phone,email,admin})
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



<Text style={{fontSize:18,fontFamily:'Li Sirajee Sanjar Unicode',marginBottom:10,color:'#E31D25'}}>এডমিন</Text>




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
            data={adminSelect}
            onSelect={(admin, index) => {
                updateState({ admin })
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
