//import liraries
import React, { Component,useState,useEffect} from 'react';
import { View, Text, StyleSheet,FlatList, RefreshControl, } from 'react-native';
import { useSelector } from 'react-redux';
import ListItem from './ListItem';
import actions from '../../redux/actions';
import { showError } from '../../utils/helperFunction';
import { updateFullTransactionState } from '../../redux/actions/transactionorder';
import { FETCH_ALL_TRANSACTION } from '../../config/urls';

// create a component
const History = () => {
    const {user} = useSelector((state)=> state.auth.userData)
    let sender_email;
  if(user){
    sender_email = user.email
  }
    
    
    const [refreshing, setRefreshing] = useState(false)

    const transactionList = useSelector((state)=> state.transaction.transaction)
    console.log(transactionList);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        Refresh()
        
          setRefreshing(false);
        
      }, []);


      const Refresh = async()=>{
        
      const result = await actions.getAllOrder({sender_email})
        
        
        
        if(result[0]==='fetch-all-order-success'){
            
        updateFullTransactionState(result[1])
         
       
                
         }else{
            showError(result[0])
         }  
        
 
     }
 
     useEffect(()=>{
 
         Refresh()
       },[]) 
   
 
    return (
        <View style={styles.container}>
            <FlatList  refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
            
            
            
        data={transactionList}
        renderItem={({item}) => <ListItem item={item}/>}
      />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
       flex:1,
       
        backgroundColor: 'white',
        padding:10,
        
    },
   
    
});

//make this component available to the app
export default History;
