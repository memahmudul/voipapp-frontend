//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'

// create a component
const BottomCard = ({ icon_name,
    text,
    onPress}) => {
      
    return (
       
         <View style={{padding:5, width:'25%'}}>
          
          <View style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:5}}>
          <TouchableOpacity onPress={onPress}>

         <View style={{height:60,width:60,borderRadius:50,backgroundColor:'rgba(1,156,49,0.2)',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <Icon.Button style={{marginLeft:10}}  name={icon_name} color='green' backgroundColor="transparent">
           
           </Icon.Button>
           
           
         </View>
         
         </TouchableOpacity>

         <Text style={{fontWeight:'bold',textAlign:'center'}}>{text}</Text>
          
        </View>
       
         
         </View>
    );
};
const styles = StyleSheet.create({
    cardShadow: {
       
        borderRadius: 100,
        backgroundColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
       },
       cardContainer: {
        backgroundColor: 'rgba(1, 156, 49, 0.2)',
        borderRadius: 100,
        overflow: 'hidden',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        // padding:10,
        
        
        
       },
})

export default BottomCard;
