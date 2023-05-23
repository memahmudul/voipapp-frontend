//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
const MobileBankingCard = ({ icon,
    text,
    onPress,method}) => {


    
      
    return (
        <View style={{padding:5, width:'25%'}} onStartShouldSetResponder={()=>onPress(method)
        }>
          <View style={styles.cardShadow}>
  <View style={styles.cardContainer}>
  <Image source={icon} style={{width: '100%', height: 40}}/>
    <Text style={{fontSize:14,color:'#EE2424',fontFamily:'Li Sirajee Sanjar Unicode',}}> {text} </Text>
   
    
  </View>
 </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardShadow: {
       
        borderRadius: 10,
        backgroundColor: 'transparent',
        shadowColor: '#EE2424',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 6,
       },
       cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        padding:10
       },
})

export default MobileBankingCard;
