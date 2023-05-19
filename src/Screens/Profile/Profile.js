//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import actions from '../../redux/actions';
import { useSelector } from 'react-redux';

// create a component
const Profile = () => {
    const userData = useSelector((state)=> state.auth.userData)
    const balance = useSelector((state)=> state.balance.balance)
    
    const user = userData.user;
 


    const onLogout = ()=>{
        actions.logout()
    }

    return (
        <View style={styles.container}>
        <View style={styles.item}>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <Text style={{color:'black',fontWeight:'bold'}}>Balance</Text>
          <Text style={{color:'black',fontWeight:'bold'}}>{balance? balance:'-'}</Text>

          </View>
          </View>
          <View style={styles.item}>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <Text style={{color:'black',fontWeight:'bold'}}>Name</Text>
          <Text style={{color:'black',fontWeight:'bold'}}>{user? user.name:'017*******'}</Text>

          </View>
          </View>

          

          <View style={styles.item}>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <Text style={{color:'black',fontWeight:'bold'}}>Phone</Text>
          <Text style={{color:'black',fontWeight:'bold'}}>{user? user.phone:'017*******'}</Text>

          </View>
          </View>

          <View style={styles.item}>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <Text style={{color:'black',fontWeight:'bold'}}>Account Type</Text>
          <Text style={{color:'black',fontWeight:'bold'}}>User/Reseller</Text>

          </View>
          </View>


        
       
            
       
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
        gap:3,
    },

    item: {
        
        padding: 10,
       
        
        backgroundColor: 'rgba(1, 156, 49, 0.2)',
        borderRadius:10,
        borderBottomWidth: 2
      },
});

//make this component available to the app
export default Profile;
