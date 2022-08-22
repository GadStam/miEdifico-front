import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const BotonFecha = (props) => {

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

export default BotonFecha


const style = StyleSheet.create({

    buttonText: {
        color: 'grey',
    },
    button: {
        borderWidth: 1,
        padding: 15,
        width: "80%",
        borderRadius: 8,
        backgroundColor: "white",
        marginTop: 10
    },

});





