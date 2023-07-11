//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const NotificationItem = (item) => {
    return (
        <View style={styles.item}>
            <View style={{display:'flex',flexDirection:'column',gap:5,}}>
            <Text style={{fontSize:20,color:'black',fontWeight:'bold'}} >{item.item.title}</Text>
            <Text style={{fontSize:20,color:'black'}} >{item.item.message}</Text>
           
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    
    item: {
        
        marginBottom:4,
        padding: 10,
       
        
        backgroundColor:'rgba(227, 10, 3,0.4)',
        borderRadius:5,
        
      },
});

//make this component available to the app
export default NotificationItem;
