import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

export default function EspaciosListItem ({useOpciones}){
    //console.log(edificio.Direccion)
    return (
    
    <View>
        <Text >
            {useOpciones.tipo_espacio}
        </Text>
    </View>
        
    )
}
