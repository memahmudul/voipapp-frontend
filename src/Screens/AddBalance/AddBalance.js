//import liraries
import React, { Component,useState,useEffect } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import TextInputWithLabels from '../../components/TextInputWithLabel';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import { addBalanceValidation } from '../../utils/validations';
import { showError,showSuccess } from '../../utils/helperFunction';
import Clipboard from '@react-native-community/clipboard';
import Icon from 'react-native-vector-icons/FontAwesome5'
import actions from '../../redux/actions';
import { useSelector } from 'react-redux';
// create a component
const AddBalance = ({navigation}) => {
    const {user} = useSelector((state)=> state.auth.userData)
    const copyToClipboard = (number) => {
        Clipboard.setString(number);
      };
    const [state, setState] = useState({
        isLoading: false,
        sender_phone: '',
        trx_id: '',
        amount:'',
        isSecure: true,
        admin:user.admin,
        name:user.name,
        username:user.username,
        email:user.email,
       user_phone:user.phone

    })

    const [payment,setPayment] = useState({})
    console.log(payment);

    useEffect(() => {
        fetchPaymentMethod()

    }, [])


    const fetchPaymentMethod = async()=>{
        const result  = await actions.getPaymentMethod()
            
      if(result.success){
        const data = result.result[0]
        
        setPayment(data)
        
    
              
      }else{
         showError('Error Occurred')
      }  

    }
    
    const { isLoading, sender_phone, trx_id, isSecure,amount,admin,name,username,email,user_phone } = state
  
    const updateState = (data) => setState(() => ({ ...state, ...data }))

    const isValidData = () => {
        const error = addBalanceValidation({
            phone:sender_phone,
            trx_id,
            amount
        })
        if (error) {
            showError(error)
            return false
        }
        return true
    }

    const onSubmit = async () => {
        const checkValid = isValidData()
        if (checkValid) {
            updateState({ isLoading: true })
            try {
                     
            const addBalanceRequest = await actions.addBalanceRequest({
                sender_phone,
                trx_id,
                amount,
                admin,
                name,
                username,
        email,
       user_phone,

            })

            if(addBalanceRequest){
                showSuccess('এড ব্যালেন্স রিকুয়েস্ট গ্রহণ করা হয়েছে। আপনার পেমেন্টের তথ্য পর্যালোচনা করার পর অতি দ্রুত আপনার একাউন্টে টাকা যুক্ত হবে।')
                updateState({ isLoading: false })

                navigation.navigate('Home')

            }
                
            } catch (error) {
                showError(error)
                updateState({ isLoading: false })
                
            }
        }

    }
    return (
        <View style={styles.container}>
            <Text style={{fontFamily:'Li Sirajee Sanjar Unicode',color:'black',fontSize:20}}>আপনার রিসেলার একাউন্ট এ ব্যালেন্স এড করার জন্য নিচের পদ্ধতি অনুসরন করুন :</Text>
            <Text style={{fontFamily:'Li Sirajee Sanjar Unicode',color:'black',fontSize:16}}>১. নিম্নোক্ত যেকোন একটি নাম্বারে বিকাশ বা নগদ থেকে টাকা সেন্ড মানি করুন
            *সর্বনিম্ন ৫০০ টাকা </Text>
            {
                user.admin==='admin1'? <View style={styles.btnStyle}>
            <Text style={styles.textStyle}>{payment.payment_method_1}</Text>
            
        <Icon.Button
        
            name="clipboard-list"
                backgroundColor="transparent"
                onPress={()=>{ copyToClipboard(payment.payment_method_1)}}
                
  >
          
  </Icon.Button>

            </View> : ''
            }
           {
            user.admin==='admin2'?  <View style={styles.btnStyle}>
            <Text style={styles.textStyle}>{payment.payment_method_2}</Text>
            <Icon.Button
        
            name="clipboard-list"
                backgroundColor="transparent"
                onPress={()=>{ copyToClipboard(payment.payment_method_2)}}
                
  >
          
  </Icon.Button>

            </View>: ''
           }

           {
            user.admin==='admin3'?  <View style={styles.btnStyle}>
            <Text style={styles.textStyle}>{payment.payment_method_3}</Text>
            <Icon.Button
        
            name="clipboard-list"
                backgroundColor="transparent"
                onPress={()=>{ copyToClipboard(payment.payment_method_3)}}
                
  >
          
  </Icon.Button>

            </View>: ''
           }
            <Text style={{fontFamily:'Li Sirajee Sanjar Unicode',color:'black',fontSize:16}}>২. নিচের ফর্ম এ যে নাম্বার থেকে টাকা পাঠানো হয়েছে সেই নাম্বার এবং ট্রানজেশন আইডি দিয়ে সাবমিট করুন।</Text>
            <TextInputWithLabels
                  label="নাম্বার"
                placeHolder="যে নাম্বার থেকে টাকা পাঠানো হয়েছে"
                keyboardType='numeric'
                
                onChangeText={(sender_phone) => updateState({ sender_phone })}
            />
             <TextInputWithLabels
                  label="ট্রানজেকশন আইডি"
                placeHolder="ট্রানজেকশন আইডি টাইপ করুন"
                
                onChangeText={(trx_id) => updateState({ trx_id })}
            />
            <TextInputWithLabels
                  label="এমাউন্ট"
                placeHolder="এমাউন্ট লিখুন"
                keyboardType='numeric'
                
                onChangeText={(amount) => updateState({ amount })}
            />
            <ButtonWithLoader
                text="সাবমিট"
                onPress={onSubmit} 
                isLoading={isLoading}
            />
            <Text style={{fontFamily:'Li Sirajee Sanjar Unicode',color:'black',fontSize:16,textAlign:'center'}}>সাহায্যের জন্য  যোগাযোগ করুন</Text>
            <Text style={{fontFamily:'Li Sirajee Sanjar Unicode',color:'black',fontSize:16,textAlign:'center'}}>হোয়াটসএপ: 01965255711</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:10,
        backgroundColor: 'white',
    },
    btnStyle: {
        height: 48,
        backgroundColor: '#E31D25',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        paddingHorizontal: 30,
        marginVertical: 10,
        display:'flex',
        flexDirection:'row',
        gap:10
        
        
    },
    textStyle: {
        fontSize: 26,
        textTransform: 'uppercase',
        fontWeight:'bold',
        
        color: 'white',
        // fontFamily:'Li Sirajee Sanjar Unicode',
    }
});

//make this component available to the app
export default AddBalance;
