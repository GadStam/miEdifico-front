import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Boton = (props) => {

    const { onPress, text } = props

    return (
    
        <TouchableOpacity

            style={style.button}
            onPress={onPress}
        >
            <Text style={style.buttonText}>
                {text}
            </Text>
        
        </TouchableOpacity>
       
    )
}

export default Boton


const style = StyleSheet.create({

    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Kanit-Medium',
        fontSize: 15
    },
    button: {
        backgroundColor: '#5207f2',
        borderWidth:2,
        borderColor: 'lightblue',
        borderRadius: 15,
        padding: 20,
        marginTop:'20%',
        marginBottom:'-15%',
        width: '80%'
    },

});





