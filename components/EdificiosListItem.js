import React from 'react';
import { Text, View, StyleSheet} from 'react-native';


export default function EdificiosListItem ({edificio}){
    //console.log(edificio.Direccion)
    return (
    
    <View>
        <Text style={styles.lista} >
            Edificio:{edificio.Direccion}
        </Text>
    </View>
        
    )
}

const styles = StyleSheet.create({
    lista: {
        color:'black',
        marginTop: 30,
        justifyContent:'center'

    }
    });