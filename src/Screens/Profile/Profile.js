//import liraries
import React, { Component,useEffect } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import actions from '../../redux/actions';
import { useSelector } from 'react-redux';
import { updateFullTransactionState } from '../../redux/actions/transactionorder';

// create a component
const Profile = () => {

    const getFormatedDate = (d)=>{
        if(d){
            const date = new Date(d)
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate();

    const formatedDate = `${day}-${month}-${year}`
    return formatedDate;
        }else{
            const date = new Date()
            const year = date.getFullYear()
            const month = date.getMonth()
            const day = date.getDate();
        
            const formatedDate = `${day}-${month}-${year}`
            return formatedDate;

        }
        

    }
    
    
    const userData = useSelector((state)=> state.auth.userData)
    const balance = useSelector((state)=> state.balance.balance)
    
    const user = userData.user;
    const transactionList = useSelector((state)=> state.transaction.transaction)
   const newList = transactionList.filter(({ updatedAt }) => {
    
    
   
    
    return getFormatedDate(updatedAt) == getFormatedDate()
   }) //filter transactionlist by only todays date
  

   console.log(newList);


    let total=0;
  
    for(let i=0;i<newList.length;i++){
        console.log(newList[i].status);
       
        if(newList[i].status==='success' && newList[i].amount){
            total+=parseInt(newList[i].amount)

        }else if(newList[i].status==='success' && newList[i].price){
            total+=parseInt(newList[i].price)

        }
        
        
    }


    const Refresh = async()=>{
        
        const result = await actions.getAllOrder({sender_email:user.email})
          
          
          
          if(result[0]==='fetch-all-order-success'){
              
          updateFullTransactionState(result[1])
           
         
                  
           }else{
              showError(result[0])
           }  
          
   
       }
   
       useEffect(()=>{
   
           Refresh()
         },[]) 
  
 


    const onLogout = ()=>{
        actions.logout()
    }

    
    return (
        <View style={styles.container}>
        <View style={styles.item}>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <Text style={{fontFamily:'Li Sirajee Sanjar Unicode',color:'white',fontSize:18}}>রিসেলারের ব্যালেন্স</Text>
          <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>৳{balance? balance:'-'}</Text>

          </View>
          </View>
          <View style={styles.item}>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <Text style={{fontFamily:'Li Sirajee Sanjar Unicode',color:'white',fontSize:18}}>রিসেলারের নাম</Text>
          <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>{user? user.name:'017*******'}</Text>

          </View>
          </View>

          

          <View style={styles.item}>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <Text style={{fontFamily:'Li Sirajee Sanjar Unicode',color:'white',fontSize:18}}>রিসেলারের ফোন</Text>
          <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>{user? user.phone:'017*******'}</Text>

          </View>
          </View>

          <View style={styles.item}>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <Text style={{fontFamily:'Li Sirajee Sanjar Unicode',color:'white',fontSize:18}}>আজকের সর্বমোট সফল লেনদেন</Text>
          <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>৳{total}</Text>

          </View>
          </View>

          <View style={styles.item}>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <Text style={{fontFamily:'Li Sirajee Sanjar Unicode',color:'white',fontSize:18}}>আজকের সর্বমোট প্রাপ্ত কমিশন</Text>
          <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>৳{total}</Text>

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
       
        
        backgroundColor:'rgba(227, 10, 3,0.8)',
        borderRadius:10,
        borderBottomWidth: 2
      },
});

//make this component available to the app
export default Profile;
