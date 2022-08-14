import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Card = (props) => {


    return (

        <View style={styles.carta}>
            <Text style={styles.header}> {props.title}</Text>
            <Text style={styles.content}> {props.detalle}</Text>
            <Text style={styles.content}> {props.detalle2}</Text>
            <Text style={styles.content}> {props.detalle3}</Text>
        </View>

    )
}

export default Card

const styles = StyleSheet.create({
    carta: {
        backgroundColor: 'white',
        justifyContent: 'center',
        width: '80%',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: '8%',
        borderWidth: 1,
        borderColor: '#a1a1a1',
    },
    header: {
        backgroundColor: '#a1a1a1',
        padding: 10,
        marginBottom: '5%',
        width: '100%'
    },
    content: {
        width: '90%',
        padding: 10,
        marginBottom: '5%',
        backgroundColor: '#c4c4c4',
        textAlign: 'left'
    }
});