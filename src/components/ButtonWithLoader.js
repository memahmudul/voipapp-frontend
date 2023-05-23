//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,ActivityIndicator } from 'react-native';

// create a component
const ButtonWithLoader = ({ isLoading,
    text,
    onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.btnStyle}>
        {!!isLoading ? <ActivityIndicator size="large" color="white" />
                : <Text style={styles.textStyle}>{text}</Text>
            }

        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    btnStyle: {
        height: 48,
        backgroundColor: '#E31D25',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        paddingHorizontal: 30,
        marginTop: 20,
        
        
    },
    textStyle: {
        fontSize: 20,
        textTransform: 'uppercase',
        
        color: 'white',
        fontFamily:'Li Sirajee Sanjar Unicode',
    }
});

//make this component available to the app
export default ButtonWithLoader;
