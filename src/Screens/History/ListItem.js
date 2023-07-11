//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const ListItem = (item) => {
    const time = new Date(item.item.updatedAt);
    const commissionRate = parseFloat(item.item.commission)
    let finalCommission = 0;

    if(item.item.amount){
      const amount = parseFloat(item.item.amount)
      finalCommission = parseInt(amount*(commissionRate/100))

    }
    if(item.item.price){
      const price = parseFloat(item.item.price)
      finalCommission = parseInt(price*(commissionRate/100))
    }
    

   
    return (
        <View style={styles.item}>
        
            {
                (() => {
        if (item.item.transaction==='mobile-recharge') {
          return (
            <View><Text style={{fontSize:20,fontFamily:'Li Sirajee Sanjar Unicode',color:'black',}} >মোবাইল রিচার্জ</Text>
           <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <View>
            <Text style={{fontSize:16,fontWeight:'medium',color:'black'}}>{item.item.recipient}</Text>

            
            
            {item.item.status==='pending'? <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:6}}>
            <Text style={{fontSize:16,fontFamily:'Li Sirajee Sanjar Unicode',color:'black'}}>স্ট্যাটাস:</Text>
            <View style={{backgroundColor:'blue',padding:5,borderRadius:5}}>
            <Text style={{color:'white',textTransform:'capitalize'}}>{item.item.status}</Text>
            </View>
            </View> : ''}
            {item.item.status==='failed'? <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:6}}>
            <Text style={{fontSize:16,fontFamily:'Li Sirajee Sanjar Unicode',color:'black'}}>স্ট্যাটাস:</Text>
            <View style={{backgroundColor:'red',padding:5,borderRadius:5}}>
            <Text style={{color:'white',textTransform:'capitalize'}}>{item.item.status}</Text>
            </View>
            </View> : ''}
            {item.item.status==='success'? <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:6}}>
            <Text style={{fontSize:16,fontFamily:'Li Sirajee Sanjar Unicode',color:'black'}}>স্ট্যাটাস:</Text>
            <View style={{backgroundColor:'green',padding:5,borderRadius:5}}>
            <Text style={{color:'white',textTransform:'capitalize'}}>{item.item.status}</Text>
            </View>
            </View> : ''}
            <Text style={{fontSize:14,color:'black'}}>{time.toLocaleString()}</Text>
            </View>
            <View>
            <Text style={{fontSize:26,fontWeight:'bold',color:'#060047'}}>{`৳${item.item.amount || item.item.price}`}</Text>
            <Text style={{fontSize:18,color:'green',fontFamily:'Li Sirajee Sanjar Unicode'}}>কমিশন: <Text>{finalCommission} টাকা</Text></Text>
          

            </View>
           </View>
           </View>
          )
        } else if (item.item.transaction==='mobile-banking') {
          return (
            <View>
            <View style={{display:'flex',flexDirection:'row',gap:10,alignItems:'center'}}>
            <Text style={{fontSize:20,fontFamily:'Li Sirajee Sanjar Unicode',color:'black',}} >মোবাইল ব্যাংকিং</Text>
            <Text style={{fontSize:20,color:'black',fontWeight:'bold',textTransform:'capitalize'}} >{`[${item.item.banking_method}]`}</Text>
            <Text style={{fontSize:12,color:'black',fontWeight:'bold',textTransform:'uppercase',marginLeft:'auto'}} >{`${item.item.type}`}</Text>
            </View>
           <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <View>
            <Text style={{fontSize:16,fontWeight:'medium',color:'black'}}>{item.item.receiver}</Text>

            
            
            {item.item.status==='pending'? <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:6}}>
            <Text style={{fontSize:16,fontFamily:'Li Sirajee Sanjar Unicode',color:'black'}}>স্ট্যাটাস:</Text>
            <View style={{backgroundColor:'blue',padding:5,borderRadius:5}}>
            <Text style={{color:'white',textTransform:'capitalize'}}>{item.item.status}</Text>
            </View>
            </View> : ''}
            {item.item.status==='failed'? <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:6}}>
            <Text style={{fontSize:16,fontFamily:'Li Sirajee Sanjar Unicode',color:'black'}}>স্ট্যাটাস:</Text>
            <View style={{backgroundColor:'red',padding:5,borderRadius:5}}>
            <Text style={{color:'white',textTransform:'capitalize'}}>{item.item.status}</Text>
            </View>
            </View> : ''}
            {item.item.status==='success'? <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:6}}>
            <Text style={{fontSize:16,fontFamily:'Li Sirajee Sanjar Unicode',color:'black'}}>স্ট্যাটাস:</Text>
            <View style={{backgroundColor:'green',padding:5,borderRadius:5}}>
            <Text style={{color:'white',textTransform:'capitalize'}}>{item.item.status}</Text>
            </View>
            </View> : ''}
            <Text style={{fontSize:14,color:'black'}}>{time.toLocaleString()}</Text>
            </View>
            <View>
            <Text style={{fontSize:26,fontWeight:'bold',color:'#060047'}}>{`৳${item.item.amount || item.item.price}`}</Text>
            <Text style={{fontSize:18,color:'green',fontFamily:'Li Sirajee Sanjar Unicode'}}>কমিশন: <Text>{finalCommission} টাকা</Text></Text>
          

            </View>
           </View>
           </View>
          )
        } else if (item.item.transaction==='bank-transfer') {
          return (
            <View>
            <View style={{display:'flex',flexDirection:'row',gap:10,alignItems:'center',}}>
            <Text style={{fontSize:20,fontFamily:'Li Sirajee Sanjar Unicode',color:'black',}} >ব্যাংক ট্রান্সফার</Text>
            <Text style={{fontSize:20,color:'black',fontWeight:'bold',textTransform:'capitalize'}} >{`[${item.item.bank}]`}</Text>
            <Text style={{fontSize:12,color:'black',fontWeight:'bold',textTransform:'uppercase',marginLeft:'auto'}} >{`${item.item.type}`}</Text>
            </View>
           <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <View>
            <View style={{display:'flex',flexDirection:'row',gap:10,alignItems:'center',}}>
            <Text style={{fontSize:16,color:'black',fontFamily:'Li Sirajee Sanjar Unicode'}}>একাউন্ট নং:</Text>
            <Text style={{fontSize:16,fontWeight:'medium',color:'black'}}>{item.item.account_no}</Text>
            </View>


            
            
            {item.item.status==='pending'? <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:6}}>
            <Text style={{fontSize:16,fontFamily:'Li Sirajee Sanjar Unicode',color:'black'}}>স্ট্যাটাস:</Text>
            <View style={{backgroundColor:'blue',padding:5,borderRadius:5}}>
            <Text style={{color:'white',textTransform:'capitalize'}}>{item.item.status}</Text>
            </View>
            </View> : ''}
            {item.item.status==='failed'? <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:6}}>
            <Text style={{fontSize:16,fontFamily:'Li Sirajee Sanjar Unicode',color:'black'}}>স্ট্যাটাস:</Text>
            <View style={{backgroundColor:'red',padding:5,borderRadius:5}}>
            <Text style={{color:'white',textTransform:'capitalize'}}>{item.item.status}</Text>
            </View>
            </View> : ''}
            {item.item.status==='success'? <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:6}}>
            <Text style={{fontSize:16,fontFamily:'Li Sirajee Sanjar Unicode',color:'black'}}>স্ট্যাটাস:</Text>
            <View style={{backgroundColor:'green',padding:5,borderRadius:5}}>
            <Text style={{color:'white',textTransform:'capitalize'}}>{item.item.status}</Text>
            </View>
            </View> : ''}
            <Text style={{fontSize:14,color:'black'}}>{time.toLocaleString()}</Text>
            </View>
            <View>
            <Text style={{fontSize:26,fontWeight:'bold',color:'#060047'}}>{`৳${item.item.amount || item.item.price}`}</Text>
            <Text style={{fontSize:18,color:'green',fontFamily:'Li Sirajee Sanjar Unicode'}}>কমিশন: <Text>{finalCommission} টাকা</Text></Text>
          

            </View>
           </View>
           </View>
          )
        }else if (item.item.offer_name) {
          return (
            <View>
            <View style={{display:'flex',flexDirection:'row',gap:10,alignItems:'center',}}>
            <Text style={{fontSize:20,fontFamily:'Li Sirajee Sanjar Unicode',color:'black',}} >অফার প্যাকেজ</Text>
            <Text style={{fontSize:20,color:'black',fontWeight:'bold',textTransform:'capitalize'}} >{`[${item.item.operators}]`}</Text>
           
            </View>
           <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <View>
            <View style={{display:'flex',flexDirection:'row',gap:10,alignItems:'center',}}>
            <Text style={{fontSize:16,color:'black',fontFamily:'Li Sirajee Sanjar Unicode'}}>অফার:</Text>
            <Text style={{fontSize:16,fontWeight:'medium',color:'black'}}>{item.item.offer_name}</Text>
            </View>
            <View style={{display:'flex',flexDirection:'row',gap:10,alignItems:'center',}}>
            <Text style={{fontSize:16,color:'black',fontFamily:'Li Sirajee Sanjar Unicode'}}>রিসিভার নং:</Text>
            <Text style={{fontSize:16,fontWeight:'medium',color:'black'}}>{item.item.recipient}</Text>
            </View>


            
            
            {item.item.status==='pending'? <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:6}}>
            <Text style={{fontSize:16,fontFamily:'Li Sirajee Sanjar Unicode',color:'black'}}>স্ট্যাটাস:</Text>
            <View style={{backgroundColor:'blue',padding:5,borderRadius:5}}>
            <Text style={{color:'white',textTransform:'capitalize'}}>{item.item.status}</Text>
            </View>
            </View> : ''}
            {item.item.status==='failed'? <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:6}}>
            <Text style={{fontSize:16,fontFamily:'Li Sirajee Sanjar Unicode',color:'black'}}>স্ট্যাটাস:</Text>
            <View style={{backgroundColor:'red',padding:5,borderRadius:5}}>
            <Text style={{color:'white',textTransform:'capitalize'}}>{item.item.status}</Text>
            </View>
            </View> : ''}
            {item.item.status==='success'? <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:6}}>
            <Text style={{fontSize:16,fontFamily:'Li Sirajee Sanjar Unicode',color:'black'}}>স্ট্যাটাস:</Text>
            <View style={{backgroundColor:'green',padding:5,borderRadius:5}}>
            <Text style={{color:'white',textTransform:'capitalize'}}>{item.item.status}</Text>
            </View>
            </View> : ''}
            <Text style={{fontSize:14,color:'black'}}>{time.toLocaleString()}</Text>
            </View>
            <View>
            <Text style={{fontSize:26,fontWeight:'bold',color:'#060047'}}>{`৳${item.item.amount || item.item.price}`}</Text>
            <Text style={{fontSize:18,color:'green',fontFamily:'Li Sirajee Sanjar Unicode'}}>কমিশন: <Text>{finalCommission} টাকা</Text></Text>
          

            </View>
           </View>
           </View>
          )
        }else if (item.item.transaction==='bill-pay'){
            return (
                <View>
            <View style={{display:'flex',flexDirection:'row',gap:10,alignItems:'center',}}>
            <Text style={{fontSize:20,fontFamily:'Li Sirajee Sanjar Unicode',color:'black',}} >বিল পে</Text>
         
           
            </View>
           <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <View>
            <View style={{display:'flex',flexDirection:'row',gap:10,alignItems:'center',}}>
            <Text style={{fontSize:16,color:'black',fontFamily:'Li Sirajee Sanjar Unicode'}}>বিল সার্ভিস:</Text>
            <Text style={{fontSize:16,fontWeight:'medium',color:'black'}}>{item.item.bill_service}</Text>
            </View>
            <View style={{display:'flex',flexDirection:'row',gap:10,alignItems:'center',}}>
            <Text style={{fontSize:16,color:'black',fontFamily:'Li Sirajee Sanjar Unicode'}}>বিলারের নাম:</Text>
            <Text style={{fontSize:16,fontWeight:'medium',color:'black'}}>{item.item.biller_name}</Text>
            </View>


            
            
            {item.item.status==='pending'? <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:6}}>
            <Text style={{fontSize:16,fontFamily:'Li Sirajee Sanjar Unicode',color:'black'}}>স্ট্যাটাস:</Text>
            <View style={{backgroundColor:'blue',padding:5,borderRadius:5}}>
            <Text style={{color:'white',textTransform:'capitalize'}}>{item.item.status}</Text>
            </View>
            </View> : ''}
            {item.item.status==='failed'? <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:6}}>
            <Text style={{fontSize:16,fontFamily:'Li Sirajee Sanjar Unicode',color:'black'}}>স্ট্যাটাস:</Text>
            <View style={{backgroundColor:'red',padding:5,borderRadius:5}}>
            <Text style={{color:'white',textTransform:'capitalize'}}>{item.item.status}</Text>
            </View>
            </View> : ''}
            {item.item.status==='success'? <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:6}}>
            <Text style={{fontSize:16,fontFamily:'Li Sirajee Sanjar Unicode',color:'black'}}>স্ট্যাটাস:</Text>
            <View style={{backgroundColor:'green',padding:5,borderRadius:5}}>
            <Text style={{color:'white',textTransform:'capitalize'}}>{item.item.status}</Text>
            </View>
            </View> : ''}
            <Text style={{fontSize:14,color:'black'}}>{time.toLocaleString()}</Text>
            </View>
            <View>
            <Text style={{fontSize:26,fontWeight:'bold',color:'#060047'}}>{`৳${item.item.amount || item.item.price}`}</Text>
            <Text style={{fontSize:18,color:'green',fontFamily:'Li Sirajee Sanjar Unicode'}}>কমিশন: <Text>{finalCommission} টাকা</Text></Text>
          

            </View>
           </View>
           </View>
            );
        }
      })()
            }
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
export default ListItem;
