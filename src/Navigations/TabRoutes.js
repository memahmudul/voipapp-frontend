import React from 'react';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Profile,History,Settings } from '../';
import ActionBarImage from '../Screens/Home/ActionBarImage';
import ActionBarIcon from '../Screens/Home/ActionBarIcon';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProfileActionBarIcon from '../Screens/Profile/ProfileActionBarIcon';
import { View, Text, StyleSheet,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Button } from 'react-native';


const BottomTab = createBottomTabNavigator();

const TabRoutes = () => {
  
    return (

      
        <BottomTab.Navigator initialRouteName="Home"
            
        >
        <BottomTab.Screen name="History" component={History}
        options={{
          headerTitle: 'রিফ্রেশ করার জন্য নিচের দিকে টানুন',
          headerTintColor:'white',
          headerRight:()=><View style={{paddingRight:15}}><Icon name="arrow-down" color='white' size={30}  /></View>,
         
          headerStyle: {
            backgroundColor: '#E31D25',
            
            
          },
          headerTitleStyle: {
            fontFamily:'Li Sirajee Sanjar Unicode'
          },
          tabBarLabelStyle:{color:'#DC0905',fontSize:12,fontFamily:'Li Sirajee Sanjar Unicode'},
          title:'লেনদেন',
                tabBarIcon:  ({ color, size }) => (
        <Icon name="history" color='#DC0905' size={30}  />
      ),

            }}
         />
            <BottomTab.Screen name="Home" component={Home}     options={
              ({ navigation, route }) => ({
          headerTitle: '',
          // Add a placeholder button without the `onPress` to avoid flicker
          headerLeft:()=><ActionBarImage/>,
          headerStyle: {
            backgroundColor: '#E31D25',
          },
          tabBarLabelStyle:{color:'#DC0905',fontSize:12,fontFamily:'Li Sirajee Sanjar Unicode'},
          title:'হোম',
          tabBarIcon:  ({ color, size }) => (
        <Icon name="home" color='#DC0905' size={30} />
      ),
          headerRight: () => (


            <Button title='notification'/>


      //       <TouchableOpacity onPress={onActionBarIconPress}>
      //  <Icon.Button style={{marginRight:-6}}  name="envelope" color='white' backgroundColor="transparent" >
           
      //      </Icon.Button>
      //  </TouchableOpacity>
          ),
        })
            }/>
            <BottomTab.Screen name="Profile" component={Profile} options={{
              headerTitle: '',
       headerLeft:()=><ActionBarImage/>,
       headerRight:()=> <ProfileActionBarIcon/>,
       headerStyle: {
            backgroundColor: '#E31D25',
          },
          tabBarLabelStyle:{color:'#DC0905',fontSize:12,fontFamily:'Li Sirajee Sanjar Unicode'},
          title:'প্রোফাইল',
                tabBarIcon:  ({ color, size }) => (
        <Icon name="user" color='#DC0905' size={30} />
      ),

            }} />
            <BottomTab.Screen name="Settings" component={Settings} options={{
              headerTitle: 'সেটিংস',
          headerTintColor:'white',
         
         
          headerStyle: {
            backgroundColor: '#E31D25',
            
            
          },
          headerTitleStyle: {
            fontFamily:'Li Sirajee Sanjar Unicode'
          },
              tabBarLabelStyle:{color:'#E31D25',fontSize:12,fontFamily:'Li Sirajee Sanjar Unicode'},
          title:'সেটিংস',
                tabBarIcon:  ({ color, size }) => (
        <Icon name="gear" color='#DC0905' size={30} />
      ),

            }} />
        </BottomTab.Navigator>

    )
}

export default TabRoutes