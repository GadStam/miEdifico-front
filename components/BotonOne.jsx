import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const BotonOne = (props) => {

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

export default BotonOne


const style = StyleSheet.create({

    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Kanit-Medium',
        fontSize: 18
    },
    button: {
        backgroundColor: '#5207f2',
        borderWidth:2,
        borderColor: 'lightblue',
        borderRadius: 15,
        padding: 15,
        marginTop:'9%',
        marginBottom:'30%',
        width: '80%'
    },

});





