//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import actions from '../../redux/actions';

// create a component
const Profile = () => {

    const onLogout = ()=>{
        actions.logout()
    }

    return (
        <View style={styles.container}>
       
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:10,
        backgroundColor: 'white',
        flexDirection: 'column',
        gap:10,
    },
});

//make this component available to the app
export default Profile;
