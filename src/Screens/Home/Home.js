//import liraries
import React, { Component,useEffect,useState,useRef,useLayoutEffect } from 'react';
import { View, Text, StyleSheet,Alert, SafeAreaView,Image, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import actions from '../../redux/actions';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import Icon from 'react-native-vector-icons/Fontisto'

import DropShadow from "react-native-drop-shadow";  
import MobileBankingCard from '../../components/MobileBankingCard';
import BottomCard from './BottomCard';
import { useSelector } from 'react-redux';

import { updateBalanceState } from '../../redux/actions/balance';

// create a component
const Home = ({navigation}) => {

    
    const {user} = useSelector((state)=> state.auth.userData)
    const balance = useSelector((state)=> state.balance.balance)
    console.log(balance);
    
    const email = user? user.email : 'demo@gmail.com'

    // useEffect(()=>{

    //     (async()=>{
    //       const balance = await actions.getBalance({email})
    //       console.log(balance);
         
    //       if(balance){
    //         updateBalanceState(balance)
    //       }  
    //     })();
    //   },[])
   
    
   

    const [isLoading, setLoading] = useState(false)
    



    // const onLogoutAlert = () => {
    //     Alert.alert(
    //         'Logout',
    //         'Are you sure, yout want to logout from this device',
    //         [{ text: 'Yes', onPress: logout }, { text: 'No', }],
    //         { cancelable: true }
    //     )
    // }
    // const logout = () => {
    //     setLoading(true)
    //     setTimeout(() => {
    //         actions.logout()
    //         setLoading(false)
    //     }, 2000);

        

    // }

    

    const onRefresh = async()=>{
        
       const data=  await actions.getBalance({email})
       if(data){
        console.log(data);
                updateBalanceState(data)
              }  
       

    }

    useEffect(()=>{

        onRefresh()
      },[]) 

    

  

    return (
        
        <View style={styles.container}>
        
        
        
        
        <View style={styles.balance}>
        <View style={styles.left}>
        <Text style={{color: 'white', fontSize: 10}}>Your Balance</Text>
        <Text style={{color: 'white', fontSize: 20,fontWeight:'bold'}}>৳ {balance? balance:'0'}</Text>

        </View>
        <TouchableOpacity onPress={onRefresh}>
            <View><Text style={{color:'white'}}>Refresh</Text></View>
        </TouchableOpacity>
        <View style={styles.right}>
        <Icon.Button
            name="credit-card"
                backgroundColor="#3b5998"
                onPress={()=>{console.log('icon button working')}}
                
  >
            Add Balance
  </Icon.Button>
        

        </View>
        
       

        </View>
        <View style={styles.mobileBanking}>
        
      <View style={styles.cardShadow}>
        <View style={styles.cardContainer}>
        <View style={styles.mobileBankingInside}>
       <MobileBankingCard icon={require("../../assets/bkash.png")} text="bKash"/>
        <MobileBankingCard icon={require("../../assets/nagad.png")} text="Nagad"/>
        <MobileBankingCard icon={require("../../assets/rocket.png")} text="Rocket"/>
        <MobileBankingCard icon={require("../../assets/surecash.jpg")} text="SureCash"/>
        <MobileBankingCard icon={require("../../assets/mkash.png")} text="mCash"/>
        <MobileBankingCard icon={require("../../assets/ucash.png")} text="uCash"/> 
         <MobileBankingCard icon={require("../../assets/okwallet.jpg")} text="OKBanking"/>
       </View>
        </View>
      </View>

        
 
      
        
        </View>
        <View style={styles.others}>
        <View style={styles.cardShadow}>
            <View style={styles.cardContainer}>
            <View style={styles.mobileBankingInside}>
            <BottomCard text="Bank Transfer" icon_name="bank"/>
            <BottomCard text="Bill Pay" icon_name="credit-card-alt"/>
            <BottomCard text="Recharge" icon_name="mobile-phone"/>
            <BottomCard text="Offer Package" icon_name="gift"/>

            </View>
            

            </View>
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
        gap:10,
       
    },
    balance:{
        flex: 2,
        backgroundColor: '#060047',
        paddingHorizontal:20,
        // paddingVertical:5,
        flexDirection: 'row',
        color:'white',
        justifyContent: 'space-between',
        alignItems:'center',
        borderRadius:20

    },
    mobileBanking:{
        flex: 4.6,
        
        
        
        
        
        
        

    },
    mobileBankingInside:{
        flexDirection:'row',
        flexWrap:'wrap',
        
        display:'flex',

    },
    others:{
        flex: 8,
        

    },
    cardShadow: {
       
        borderRadius: 10,
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
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        padding:10
       },
   
});

//make this component available to the app
export default Home;
