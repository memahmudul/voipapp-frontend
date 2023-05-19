//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import actions from '../../redux/actions';
import Icon from 'react-native-vector-icons/Fontisto'
import Iconx from 'react-native-vector-icons/MaterialIcons'
import Iconf from 'react-native-vector-icons/FontAwesome'
import { Linking } from "react-native";

// create a component
const Settings = () => {
    const onLogout = ()=>{
        actions.logout()
    }

    const url = "http://www.probashtelecom.com"


    const loadInBrowser = () => {
        Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
      };

    return (
        <View style={styles.container}>
          
           

          <View style={styles.item}>
           <TouchableOpacity onPress={()=>{}} style={{ display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
         
          <View style={{ display:'flex',flexDirection:'row',alignItems:'center',}}>
          <Icon.Button name="headphone"  backgroundColor="transparent" color="black"></Icon.Button>
          <Text style={{color:'black',fontWeight:'medium',fontSize:18}}>Contact Us</Text>

          </View>
          <Iconf.Button name="arrow-right"  backgroundColor="transparent" color="black"></Iconf.Button>
          </TouchableOpacity>

          
          </View>

          <View style={styles.item}>
           <TouchableOpacity onPress={()=>{}} style={{ display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
         
           <View style={{ display:'flex',flexDirection:'row',alignItems:'center',}}>
          <Icon.Button name="persons"  backgroundColor="transparent" color="black"></Icon.Button>
          <Text style={{color:'black',fontWeight:'medium',fontSize:18}}>Invite Friends</Text>

          </View>
          <Iconf.Button name="arrow-right"  backgroundColor="transparent" color="black"></Iconf.Button>
          </TouchableOpacity>

          
          </View>

          <View style={styles.item}>
           <TouchableOpacity onPress={()=>{}} style={{ display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
         
           <View style={{ display:'flex',flexDirection:'row',alignItems:'center',}}>
          <Icon.Button name="facebook"  backgroundColor="transparent" color="black"></Icon.Button>
          <Text style={{color:'black',fontWeight:'medium',fontSize:18}}>Facebook Page</Text>

          </View>
          <Iconf.Button name="arrow-right"  backgroundColor="transparent" color="black"></Iconf.Button>
          </TouchableOpacity>

          
          </View>

          <View style={styles.item}>
           <TouchableOpacity onPress={loadInBrowser} style={{ display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
         
           <View style={{ display:'flex',flexDirection:'row',alignItems:'center',}}>
          <Icon.Button name="world"  backgroundColor="transparent" color="black"></Icon.Button>
          <Text style={{color:'black',fontWeight:'medium',fontSize:18}}>Website</Text>

          </View>
          <Iconf.Button name="arrow-right"  backgroundColor="transparent" color="black"></Iconf.Button>
          </TouchableOpacity>

          
          </View>
          <View style={styles.item}>
           <TouchableOpacity onPress={onLogout} style={{ display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
         
           <View style={{ display:'flex',flexDirection:'row',alignItems:'center',}}>
          <Iconx.Button name="logout"  backgroundColor="transparent" color="black"></Iconx.Button>
          <Text style={{color:'black',fontWeight:'medium',fontSize:18}}>Sign Out</Text>

          </View>
          <Iconf.Button name="arrow-right"  backgroundColor="transparent" color="black"></Iconf.Button>
          </TouchableOpacity>

          
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
        gap:10,
        color:"#3b5998",
    },

    item: {
       
       
        
        
       
        
        
       
        borderBottomWidth :.3,
        borderBottomColor: '#808080',
      },
});

//make this component available to the app
export default Settings;
