//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'


// create a component
const ActionBarIcon = () => {

    const onPress = ()=>{
        console.log('working');

 

        
    }
    return (
        <View style={styles.container}>
        
       <TouchableOpacity onPress={onPress}>
       <Icon.Button style={{marginRight:-6}}  name="envelope" color='white' backgroundColor="transparent" >
           
           </Icon.Button>
       </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
    },
});

//make this component available to the app
export default ActionBarIcon;
