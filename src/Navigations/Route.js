import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView,Text,View, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'


import { Login, Signup,VerifyPin,Home,Profile,MobileBanking, BankTransfer,BillPay, Recharge,Offer, BuyOffer, SignupNext,AddBalance } from '..'
import TabRoutes from './TabRoutes';

import { useSelector } from 'react-redux';



const Stack = createStackNavigator();


export default function Routes({navigation}) {

  // const goBack = ()=>{
  //   navigation.navigate('Home')
  // }

    const userData = useSelector((state)=> state.auth.userData)
   


    return (
      
        <SafeAreaView  style={{flex: 1}}>
         <StatusBar
      backgroundColor= '#E31D25'
    
  />
          <NavigationContainer>
            <Stack.Navigator>
            {!userData.token ? (
        <Stack.Group>
          <Stack.Screen name="Login" component={Login} options={{
             headerTintColor: 'white',
              headerTitle: '',
              headerRight:()=><Text style={{fontSize:20,color:'white',fontFamily:'Li Sirajee Sanjar Unicode',paddingRight:170}}>লগ ইন</Text>,   
       headerStyle: {backgroundColor: '#E31D25'},

            }} />
          <Stack.Screen name="Signup" component={Signup} options={{
             headerTintColor: 'white',
              headerTitle: '',
              headerRight:()=><Text style={{fontSize:20,color:'white',fontFamily:'Li Sirajee Sanjar Unicode',paddingRight:150}}>সাইন আপ</Text>,   
       headerStyle: {backgroundColor: '#E31D25'},

            }}/>
          <Stack.Screen name="SignupNext" component={SignupNext} options={{
             headerTintColor: 'white',
              headerTitle: '',
              headerRight:()=><Text style={{fontSize:20,color:'white',fontFamily:'Li Sirajee Sanjar Unicode',paddingRight:170}}>সাইন আপ</Text>,   
       headerStyle: {backgroundColor: '#E31D25'},

            }}/>
        </Stack.Group>
      ) : (
        <Stack.Group>
        <Stack.Screen name="VerifyPin" component={VerifyPin} options={{
             headerTintColor: 'white',
              headerTitle: '',
              headerRight:()=><Text style={{fontSize:20,color:'white',fontFamily:'Li Sirajee Sanjar Unicode',paddingRight:150}}>পিন ভেরিফাই</Text>,
       headerStyle: {backgroundColor: '#E31D25'},

            }}/>
        <Stack.Screen name="TabRoutes" component={TabRoutes} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} /> */}
          <Stack.Screen name="MobileBanking" component={MobileBanking} options={{
             headerTintColor: 'white',
              headerTitle: '',
              headerRight:()=><Text style={{fontSize:20,color:'white',fontFamily:'Li Sirajee Sanjar Unicode',paddingRight:130}}>মোবাইল ব্যাংকিং</Text>,   
       headerStyle: {backgroundColor: '#E31D25'},

            }}  />
          <Stack.Screen name="BankTransfer" component={BankTransfer} options={{
             headerTintColor: 'white',
              headerTitle: '',
              headerRight:()=><Text style={{fontSize:20,color:'white',fontFamily:'Li Sirajee Sanjar Unicode',paddingRight:140}}>ব্যাংক ট্রান্সফার</Text>,   
       headerStyle: {backgroundColor: '#E31D25'},

            }}  />
          <Stack.Screen name="BillPay" component={BillPay} options={{
             headerTintColor: 'white',
              headerTitle: '',
              headerRight:()=><Text style={{fontSize:20,color:'white',fontFamily:'Li Sirajee Sanjar Unicode',paddingRight:170}}>বিল পে</Text>,   
       headerStyle: {backgroundColor: '#E31D25'},

            }}  />
          <Stack.Screen name="Recharge" component={Recharge} options={{
             headerTintColor: 'white',
              headerTitle: '',
              headerRight:()=><Text style={{fontSize:20,color:'white',fontFamily:'Li Sirajee Sanjar Unicode',paddingRight:180}}>রিচার্জ</Text>,   
       headerStyle: {backgroundColor: '#E31D25'},

            }}  />

<Stack.Screen name="Offer" component={Offer} options={{
             headerTintColor: 'white',
              headerTitle: '',
              headerRight:()=><Text style={{fontSize:20,color:'white',fontFamily:'Li Sirajee Sanjar Unicode',paddingRight:140}}>অফার প্যাকেজ</Text>,   
       headerStyle: {backgroundColor: '#E31D25'},

            }}  />

            
<Stack.Screen name="BuyOffer" component={BuyOffer} options={{
             headerTintColor: 'white',
              headerTitle: '',
              headerRight:()=><Text style={{fontSize:20,color:'white',fontFamily:'Li Sirajee Sanjar Unicode',paddingRight:120}}>অফার একটিভ করুন</Text>,   
       headerStyle: {backgroundColor: '#E31D25'},
       }}  />

<Stack.Screen name="AddBalance" component={AddBalance} options={{
             headerTintColor: 'white',
              headerTitle: '',
              headerRight:()=><Text style={{fontSize:20,color:'white',paddingRight:150,fontFamily:'Li Sirajee Sanjar Unicode',}}>এড ব্যালেন্স</Text>,   
       headerStyle: {backgroundColor: '#E31D25'},
       }}  />

            
         
        </Stack.Group>
      )}
                

                
                
           

                
            </Stack.Navigator>
        </NavigationContainer>
        </SafeAreaView>
    );
}