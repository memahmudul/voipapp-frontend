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
        {value:'grameenphone',imageLink: require('../../assets/gp.png'),name:'গ্রামীণফোন'},
        {value:'banglalink',imageLink: require('../../assets/banglalink.png'),name:'বাংলালিংক'},
        {value:'robi',imageLink: require('../../assets/robi.png'),name:'রবি'},
        {value:'airtel',imageLink: require('../../assets/airtel.png'),name:'এয়ারটেল'},
        {value:'teletalk',imageLink: require('../../assets/teletalk.png'),name:'টেলিটক'},
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
                    {item.value===selectedItem?   
                    <View style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <Image source={item.imageLink} style={styles.imageStyleSelected}   />
                    <Text style={{fontSize:18,fontFamily:'Li Sirajee Sanjar Unicode',marginBottom:10,color:'#E31D25'}}>{item.name}</Text>
                    </View> :   
                    <View style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <Image source={item.imageLink} style={styles.imageStyle}   />
                    <Text style={{fontSize:18,fontFamily:'Li Sirajee Sanjar Unicode',marginBottom:10,color:'#E31D25'}}>{item.name}</Text>
                    </View>  }
              
                    </Pressable>
                })
            }

            </View>

        
           <RadioButtonRN
            activeColor='#E31D25'
        textStyle = {{color:'#E31D25',textTransform:'uppercase',fontWeight:'bold'}}
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
         <Text style={{color:'black',fontWeight:'bold'}}>Validity: {item.validity}</Text>
         </View>
          <Text style={{color:'black',fontWeight:'bold'}}>Tk.{item.price}</Text>
          <Button
  onPress={()=>{  navigation.navigate('BuyOffer', item);}}
  title="Activate"
  color="#E31D25"
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
        padding: 20,
        backgroundColor: 'white'
        
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
       borderColor: '#E31D25',
       borderWidth:2
       
    },
    item: {
        
        padding: 10,
        marginBottom:5,
       
        
        backgroundColor:'rgba(227, 10, 3,0.4)',
        borderRadius:10,
        borderBottomWidth: 2
      },
});

//make this component available to the app
export default Offer;
