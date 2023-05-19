//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// create a component
const TextInputWithLabels = ({label,value,placeHolder,isSecure,onChangeText,...props}) => {
    return (
        <View style={{marginBottom: 16}}>
            <Text style={{
                fontSize: 16,
                marginBottom: 8,
                fontWeight: 'bold'
            }}>{label}</Text>
            <TextInput
                value={value}
                placeholder={placeHolder}
                onChangeText={onChangeText}
                style={styles.inputStyle}
                placeholderTextColor="gray"
                secureTextEntry={isSecure}
                {...props}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    inputStyle: {
        height: 48,
        borderWidth: 1,
        borderColor: 'gray',
        color: 'black',
        paddingHorizontal: 16
        
    }
});

//make this component available to the app
export default TextInputWithLabels;
