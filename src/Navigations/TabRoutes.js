import React from 'react';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Profile,History,Settings } from '../';
import ActionBarImage from '../Screens/Home/ActionBarImage';
import ActionBarIcon from '../Screens/Home/ActionBarIcon';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProfileActionBarIcon from '../Screens/Profile/ProfileActionBarIcon';


const BottomTab = createBottomTabNavigator();

const TabRoutes = () => {
  
    return (
        <BottomTab.Navigator initialRouteName="Home"
            
        >
        <BottomTab.Screen name="History" component={History}
        options={{
          headerTitle: 'Swipe Down To Refresh',
          headerTintColor:'white',
         
          headerStyle: {
            backgroundColor: '#060047',
            
          },
          tabBarLabelStyle:{color:'#DC0905',fontSize:12,fontFamily:'Li Sirajee Sanjar Unicode'},
          title:'লেনদেন',
                tabBarIcon:  ({ color, size }) => (
        <Icon name="history" color='#DC0905' size={30} o />
      ),

            }}
         />
            <BottomTab.Screen name="Home" component={Home}     options={{
                headerTitle: '',
       headerLeft:()=><ActionBarImage/>,
       headerRight:()=> <ActionBarIcon/>,
       headerStyle: {
            backgroundColor: '#E31D25',
          },
          tabBarLabelStyle:{color:'#DC0905',fontSize:12,fontFamily:'Li Sirajee Sanjar Unicode'},
          title:'হোম',
          tabBarIcon:  ({ color, size }) => (
        <Icon name="home" color='#DC0905' size={30} />
      ),
        }}/>
            <BottomTab.Screen name="Profile" component={Profile} options={{
              headerTitle: '',
       headerLeft:()=><ActionBarImage/>,
       headerRight:()=> <ProfileActionBarIcon/>,
       headerStyle: {
            backgroundColor: '#DC0905',
          },
          tabBarLabelStyle:{color:'#DC0905',fontSize:12,fontFamily:'Li Sirajee Sanjar Unicode'},
          title:'প্রোফাইল',
                tabBarIcon:  ({ color, size }) => (
        <Icon name="user" color='#DC0905' size={30} />
      ),

            }} />
            <BottomTab.Screen name="Settings" component={Settings} options={{
              tabBarLabelStyle:{color:'#DC0905',fontSize:12,fontFamily:'Li Sirajee Sanjar Unicode'},
          title:'সেটিংস',
                tabBarIcon:  ({ color, size }) => (
        <Icon name="gear" color='#DC0905' size={30} />
      ),

            }} />
        </BottomTab.Navigator>

    )
}

export default TabRoutes