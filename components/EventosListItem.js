import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function EventosListItem ({edificio}){
    //console.log(edificio.Direccion)
    const navigation = useNavigation()
    return (
    
    <View>
        <Text style={styles.lista} >
            {edificio.eventos}
        </Text>
    </View>
        
    )
}

const styles = StyleSheet.create({
    lista: {
        color:'white',
        justifyContent:'center',
        fontFamily: 'Kanit-Regular',
        borderWidth: 1,
        borderColor: "lightblue",
        padding: 10,
        backgroundColor: "#5207f2",
        marginTop: 15,
        marginBottom: -5,
        width: 250
    }
    });