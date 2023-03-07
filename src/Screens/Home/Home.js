//import liraries
import React, { Component,useState } from 'react';
import { View, Text, StyleSheet,Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import actions from '../../redux/actions';
import ButtonWithLoader from '../../components/ButtonWithLoader';

// create a component
const Home = ({navigation}) => {

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

    const onLogout = ()=>{
        actions.logout()
    }


    return (
        <View style={styles.container}>
         
          <TouchableOpacity onPress={onLogout}><Text>LOGOUT</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}><Text>GO TO PROFILE</Text></TouchableOpacity>
          {/* <ButtonWithLoader
                isLoading={isLoading}
                text="Logout"
                onPress={onLogoutAlert}
            /> */}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Home;
