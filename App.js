//import liraries
import React, { Component,useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import FlashMessage from 'react-native-flash-message';



import Routes from './src/Navigations/Route';
import { Provider } from 'react-redux';
import store from './src/redux/store';

import { getUserData} from './src/utils/asyncStorage';
import { saveUserData } from './src/redux/actions/auth';



// create a component
const App = () => {
  useEffect(()=>{

    (async()=>{
      const userData = await getUserData()
      console.log("App js user data is",userData)
      if(!!userData){
        saveUserData(userData)
      }  
    })();
  },[])
  return (
    
      <Provider store={store}>
        <Routes />
      <FlashMessage position="top"/>
      </Provider>
  


  );
};



//make this component available to the app
export default App;
