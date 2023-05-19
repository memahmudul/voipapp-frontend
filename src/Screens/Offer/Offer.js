//import liraries
import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet,Image,Pressable,Button} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import actions from '../../redux/actions';
import { ScrollView } from 'react-native-gesture-handler';


// create a component
const Offer = ({navigation}) => {


    const [selectedItem, setSelectedItem] = useState(null)
    const selectedData = [
        {value:'grameenphone',imageLink: require('../../assets/gp.png')},
        {value:'banglalink',imageLink: require('../../assets/banglalink.png')},
        {value:'robi',imageLink: require('../../assets/robi.png')},
        {value:'airtel',imageLink: require('../../assets/airtel.png')},
        {value:'teletalk',imageLink: require('../../assets/teletalk.png')},
    ]

    const [state, setState] = useState({
        isLoading: false,
        type:''
        
    })


    const [result, setResult] = useState([])
    const updateState = (data) => setState(() => ({ ...state, ...data }))

    const typeData = [
        {
          label: 'internet'
         },
         {
          label: 'voice/minute'
         },
         {
            label: 'bundle'
           }
        ];


        const updateTypeState = (data)=>{
            const type = data.label
           
            updateState({type})
    
        }

        const { isLoading,type} = state

        useEffect(() => {
            onSend()
          }, [selectedItem,type])


        const onSend = async()=>{
            updateState({ isLoading: true })
            try {
             
               
                
               if(selectedItem && type){
                const data = await actions.getAllOfferPackages({operator:selectedItem,offer_type:type})
                if(data)[
                    setResult(data)
                ]
               }
                

                updateState({ isLoading: false })
               
                
            } catch (error) {
                console.log(error)
                showError(error)
                updateState({ isLoading: false })
                
            }
        }

        // const navigateToActivateOffer = (x)=>{
           
        //     setSelectedOffer(x)
            
        //     // navigation.navigate('BuyOffer', {
        //     //     itemId: 86,
        //     //     otherParam: 'anything you want here',
        //     //   })

        // }
    
    return (
        <View style={styles.container}>
        
          

            <View style={styles.radioImageRow}>
            {
                selectedData.map(item=>{
                    return <Pressable key={item.value} onPress={()=>setSelectedItem(item.value)}>
                    {item.value===selectedItem?   <Image source={item.imageLink} style={styles.imageStyleSelected}   /> :   <Image source={item.imageLink} style={styles.imageStyle}   />  }
              
                    </Pressable>
                })
            }

            </View>

        
           <RadioButtonRN
  data={typeData}
  box={true}

  selectedBtn={(type) => updateTypeState(type)}
/>

  <ScrollView style={{paddingTop:20}}>
  {

result.map((item,index)=>{
    return <View style={styles.item} key={index}>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
         <View>
         <Text style={{color:'black',fontWeight:'bold'}}>{item.name}</Text>
         <Text style={{color:'black',fontWeight:'bold'}}>{item.validity}</Text>
         </View>
          <Text style={{color:'black',fontWeight:'bold'}}>Tk.{item.price}</Text>
          <Button
  onPress={()=>{  navigation.navigate('BuyOffer', item);}}
  title="Activate"
  color="#841584"
/>

          </View>
          </View>

})

}
  </ScrollView>



        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        backgroundColor: 'gray'
        
    },
    radioImageRow:{
        display:'flex',
        flexDirection:'row',
        
        justifyContent:'space-between'
        
    },
    imageStyle:{
        width:50,
        height:50,
        backgroundColor:'white',
        borderRadius:5,
      
       
    },
    imageStyleSelected:{
        width:50,
        height:50,
        backgroundColor:'white',
        borderRadius:5,
       borderColor: 'green',
       borderWidth:2
       
    },
    item: {
        
        padding: 10,
        marginBottom:5,
       
        
        backgroundColor: 'rgba(1, 156, 49, 0.2)',
        borderRadius:10,
        borderBottomWidth: 2
      },
});

//make this component available to the app
export default Offer;
