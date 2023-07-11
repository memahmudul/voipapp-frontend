//import liraries
import React, { Component,useEffect,useState } from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native';
import actions from '../../redux/actions';
import { showError } from '../../utils/helperFunction';
import { updateNotificationState } from '../../redux/actions/notification';
import { useSelector } from 'react-redux';
import NotificationItem from './NotificationItem';

// create a component
const Notification = () => {


    const [notificationList, setNotificationList] = useState([])

   

    // const notificationList = useSelector((state)=> state.notification.notification)




    const Refresh = async()=>{

        const result = await actions.getNotification()

        if(result){

           setNotificationList(result)
            
        }else{
            showError('Something Went Wrong')
        }

    }

    useEffect(()=>{
 
        Refresh()
      },[]) 


     
    return (
        <View style={styles.container}>

<FlatList  
            
            
            
        data={notificationList}
        renderItem={({item}) => <NotificationItem item={item}/>}
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
export default Notification;
