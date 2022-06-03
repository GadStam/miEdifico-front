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
    buttonContainer: {
        backgroundColor: 'violet',
        margin: 20,
        paddingHorizontal: 10
        
    },
    buttonText: {
        color: 'white'
    },
    button: {
        backgroundColor: '#5207f2',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        padding: 15,
        margin:15
    },

});





