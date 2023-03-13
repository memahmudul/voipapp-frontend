//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

// create a component
const ActionBarImage = () => {
    return (
        <View style={styles.container}>
        <Image source={require("../../assets/avatar.jpg")} style={{width: 40, height: 40,borderRadius:40,backgroundColor:'red'}}/>
            <View>
            <Text style={{color:'white',fontWeight:'bold'}}>User</Text>
            <Text style={{color:'white',fontWeight:'bold'}}>01743476214</Text>
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
