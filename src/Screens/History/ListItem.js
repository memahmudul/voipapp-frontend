//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const ListItem = (item) => {
   
    return (
        <View style={styles.item}>
        
            <Text style={{fontSize:20,fontWeight:'bold'}} >{item.item.type}</Text>
           <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View>
            <Text style={{fontSize:16,fontWeight:'medium'}}>{item.item.receiver}</Text>
            
            {item.item.status==='pending'? <Text style={{fontSize:16,fontWeight:'medium'}}>Status: <Text style={{color:'blue'}}>{item.item.status}</Text></Text> : ''}
            {item.item.status==='failed'? <Text style={{fontSize:16,fontWeight:'medium'}}>Status: <Text style={{color:'red'}}>{item.item.status}</Text></Text> : ''}
            {item.item.status==='success'? <Text style={{fontSize:16,fontWeight:'medium'}}>Status: <Text style={{color:'green'}}>{item.item.status}</Text></Text> : ''}
            </View>
            <View>
            <Text style={{fontSize:26,fontWeight:'bold',color:'#060047'}}>{`৳ ${item.item.amount}`}</Text>
            <Text style={{fontSize:14,color:'green'}}>Commission: <Text>{item.item.amount}</Text></Text>
            <Text style={{fontSize:14,color:'green'}}>Time: <Text>{item.item.updatedAt}</Text></Text>

            </View>
           </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    
    item: {
        marginBottom:4,
        padding: 10,
       
        
        backgroundColor: 'rgba(1, 156, 49, 0.2)',
        borderRadius:10,
        borderBottomWidth: 2
      },
});

//make this component available to the app
export default ListItem;
