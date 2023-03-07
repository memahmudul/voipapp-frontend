import React from 'react';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Profile,History,Settings } from '../';


const BottomTab = createBottomTabNavigator();

const TabRoutes = () => {
    return (
        <BottomTab.Navigator initialRouteName="Home"
            
        >
        <BottomTab.Screen name="History" component={History} />
            <BottomTab.Screen name="Home" component={Home} />
            <BottomTab.Screen name="Profile" component={Profile} />
            <BottomTab.Screen name="Settings" component={Settings} />
        </BottomTab.Navigator>

    )
}

export default TabRoutes