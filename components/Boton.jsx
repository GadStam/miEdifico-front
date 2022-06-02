import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { Alert } from 'react-native-web';

const Boton =(props)=>{
   
 const { onPress,text } = props




return(
<TouchableOpacity 
style={style.buttonContainer}
onPress={onPress}
>
<Text style={style.buttonText}>
    { text }
</Text>

</TouchableOpacity>


)

}

export default Boton

const style = StyleSheet.create({
    buttonContainer:{
        backgroundColor: 'green',
        marginBottom: 10,
        paddingHorizontal:20,
        paddingHorizontal:10,

    },
    buttonText:{
    color:'white'
    }



    })




