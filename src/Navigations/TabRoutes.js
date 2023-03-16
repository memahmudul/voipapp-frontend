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
                tabBarIcon:  ({ color, size }) => (
        <Icon name="history" color='#060047' size={30} />
      ),

            }}
         />
            <BottomTab.Screen name="Home" component={Home}     options={{
                headerTitle: '',
       headerLeft:()=><ActionBarImage/>,
       headerRight:()=> <ActionBarIcon/>,
       headerStyle: {
            backgroundColor: '#060047',
          },
          tabBarIcon:  ({ color, size }) => (
        <Icon name="home" color='#060047' size={30} />
      ),
        }}/>
            <BottomTab.Screen name="Profile" component={Profile} options={{
              headerTitle: '',
       headerLeft:()=><ActionBarImage/>,
       headerRight:()=> <ProfileActionBarIcon/>,
       headerStyle: {
            backgroundColor: '#060047',
          },
                tabBarIcon:  ({ color, size }) => (
        <Icon name="user" color='#060047' size={30} />
      ),

            }} />
            <BottomTab.Screen name="Settings" component={Settings} options={{
                tabBarIcon:  ({ color, size }) => (
        <Icon name="gear" color='#060047' size={30} />
      ),

            }} />
        </BottomTab.Navigator>

    )
}

export default TabRoutes