//import libraries
import React, { Component,useEffect,useState } from 'react';
import { View, Text, StyleSheet,Alert, SafeAreaView,Image, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import actions from '../../redux/actions';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import Icon from 'react-native-vector-icons/Fontisto'
import Iconf from 'react-native-vector-icons/FontAwesome'

import DropShadow from "react-native-drop-shadow";  
import MobileBankingCard from '../../components/MobileBankingCard';
import BottomCard from './BottomCard';
import { useSelector } from 'react-redux';

import { updateBalanceState } from '../../redux/actions/balance';
import { showError } from '../../utils/helperFunction';
import { SliderBox } from "react-native-image-slider-box";




// create a component
const Home = ({navigation}) => {

    
    const {user} = useSelector((state)=> state.auth.userData)
    const balance = useSelector((state)=> state.balance.balance)
    
 
    
    const email = user? user.email : 'demo@gmail.com'

    const images = [
      "https://source.unsplash.com/1024x768/?nature",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?girl",
      "https://source.unsplash.com/1024x768/?tree",
      require('../../assets/airtel.png'),
      

    ];

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
        
       const result=  await actions.getBalance({email})
      
       
       
       if(result){
        
      
                updateBalanceState(result)
        }else{
           showError('Error Occurred')
        }  
       

    }

    useEffect(()=>{

        onRefresh()
      },[]) 



      const navigateToMobileBanking = (method)=>{
        
        navigation.navigate('MobileBanking', {
            method
          })

      }

      const navigateToBankTransfer = ()=>{
        
        navigation.navigate('BankTransfer')

      }

      const navigateToBillPay = ()=>{
        
        navigation.navigate('BillPay')

      }

      const navigateToRecharge = ()=>{
        navigation.navigate('Recharge')

      }

      const navigateToOffer = ()=>{
        navigation.navigate('Offer')

      }
    
    

      

  

    return (
        
        <View style={styles.container}>
        
        
        
        
        <View style={styles.balance}>
        <View style={styles.left}>
        <Text style={styles.textStyle}>আপনার ব্যালেন্স</Text>
        <Text style={{color: 'white', fontSize: 24,fontWeight:'bold'}}>৳ {balance? balance:'0'}</Text>

        </View>
        <TouchableOpacity onPress={onRefresh}>
        <Iconf.Button name="refresh"  backgroundColor="transparent" color="white"></Iconf.Button>
            
        </TouchableOpacity>
        <View style={styles.right}>
        <Iconf.Button
        
            name="money"
                backgroundColor="#F58220"
                onPress={()=>{console.log('icon button working')}}
                
  >
            <Text style={{  fontFamily:'Li Sirajee Sanjar Unicode',color:'white',fontSize:16}}>ব্যালেন্স যুক্ত করুন</Text>
  </Iconf.Button>
        

        </View>
        
       

        </View>
        
        <View style={styles.mobileBanking}>
        
        
      <View style={styles.cardShadow}>
      
        <View style={styles.cardContainer}>
        <Text style={{fontFamily:'Li Sirajee Sanjar Unicode',fontSize:18,color:'#EE2424'}}>মোবাইল ব্যাংকিং</Text>
        <View style={styles.mobileBankingInside}>
       
       <MobileBankingCard icon={require("../../assets/bkash.png")} text="বিকাশ" onPress={navigateToMobileBanking} method="bkash"/>
        <MobileBankingCard icon={require("../../assets/nagad.png")} text="নগদ" onPress={navigateToMobileBanking} method="nagad"/>
        <MobileBankingCard icon={require("../../assets/rocket.png")} text="রকেট" onPress={navigateToMobileBanking} method="rocket"/>
        <MobileBankingCard icon={require("../../assets/surecash.jpg")} text="শিওরক্যাশ" onPress={navigateToMobileBanking} method="surecash"/>
        <MobileBankingCard icon={require("../../assets/mkash.png")} text="এমক্যাশ" onPress={navigateToMobileBanking} method="mcash"/>
        <MobileBankingCard icon={require("../../assets/ucash.png")} text="uCash" onPress={navigateToMobileBanking} method="ucash"/> 
         <MobileBankingCard icon={require("../../assets/okwallet.jpg")} text="OKBank" onPress={navigateToMobileBanking} method="okbanking"/>
       </View>
        </View>
      </View>

        
 
      
        
        </View>
        <View style={styles.others}>
        <View style={styles.cardShadow}>
            <View style={styles.cardContainer}>
            <Text style={{fontFamily:'Li Sirajee Sanjar Unicode',fontSize:18,color:'#EE2424'}}>অন্যান্য সার্ভিস</Text>
            <View style={styles.mobileBankingInside}>
            <BottomCard text="ব্যাংক ট্রান্সফার" icon_name="bank" onPress={navigateToBankTransfer}/>
            <BottomCard text="বিল পে" icon_name="usd" onPress={navigateToBillPay}/>
            <BottomCard text="ফ্লেক্সিলোড" icon_name="phone-square" onPress={navigateToRecharge}/>
            <BottomCard text="ড্রাইভ অফার" icon_name="gift" onPress={navigateToOffer}/>

            </View>
            

            </View>
        </View>

        </View>
        <View style={{height:105,overflow:'hidden',borderRadius:10}}>
        <SliderBox images={images}  dotColor="#DC0905"  autoplay
  circleLoop />
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
        flex: 1,
        backgroundColor: '#DC0905',
        paddingHorizontal:20,
        // paddingVertical:5,
        flexDirection: 'row',
        color:'white',
        justifyContent: 'space-between',
        alignItems:'center',
        borderRadius:20

    },
    mobileBanking:{
        flex: 2,
        
        
        
        
        
        
        

    },
    mobileBankingInside:{
        flexDirection:'row',
        flexWrap:'wrap',
        
        display:'flex',
        

    },
    others:{
        flex:1.4,
        marginTop:10
        

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
       textStyle:{
        fontFamily:'Li Sirajee Sanjar Unicode',
        fontSize:16,
        color:'white'
       }
   
});

//make this component available to the app
export default Home;
