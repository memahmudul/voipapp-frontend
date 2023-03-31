import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StatusBar } from 'react-native';


import { Login, Signup,VerifyPin,Home,Profile,MobileBanking, BankTransfer,BillPay } from '..'
import TabRoutes from './TabRoutes';

import { useSelector } from 'react-redux';



const Stack = createStackNavigator();


export default function Routes() {

    const userData = useSelector((state)=> state.auth.userData)
   


    return (
      
        <SafeAreaView  style={{flex: 1}}>
         <StatusBar
      backgroundColor= '#060047'
    
  />
          <NavigationContainer>
            <Stack.Navigator>
            {!userData.token ? (
        <Stack.Group>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Group>
      ) : (
        <Stack.Group>
        <Stack.Screen name="VerifyPin" component={VerifyPin} />
        <Stack.Screen name="TabRoutes" component={TabRoutes} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} /> */}
          <Stack.Screen name="MobileBanking" component={MobileBanking} />
          <Stack.Screen name="BankTransfer" component={BankTransfer} />
          <Stack.Screen name="BillPay" component={BillPay} />
         
        </Stack.Group>
      )}
                

                
                
           

                
            </Stack.Navigator>
        </NavigationContainer>
        </SafeAreaView>
    );
}