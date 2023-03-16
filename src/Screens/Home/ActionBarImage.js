//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { useSelector } from 'react-redux';

// create a component
const ActionBarImage = () => {
    const userData = useSelector((state)=> state.auth.userData)
    const user = userData.user;
    return (
        <View style={styles.container}>
        <Image source={require("../../assets/avatar.jpg")} style={{width: 40, height: 40,borderRadius:40,backgroundColor:'red'}}/>
            <View>
            <Text style={{color:'white',fontWeight:'bold'}}>{user? user.name:'John Doe'}</Text>
            <Text style={{color:'white',fontWeight:'bold'}}>{user? user.phone:'017*******'}</Text>
            </View>
        </View>
        
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
        gap:8,
        paddingLeft:13
        // backgroundColor: 'red',
    },
});

//make this component available to the app
export default ActionBarImage;
