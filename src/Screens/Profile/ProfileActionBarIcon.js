//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

// create a component
const ProfileActionBarIcon = () => {
    return (
        <View style={styles.container}>
        
        <Icon.Button style={{marginRight:-6}}  name="edit" color='white' backgroundColor="transparent">
           
           </Icon.Button>
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
export default ProfileActionBarIcon;
