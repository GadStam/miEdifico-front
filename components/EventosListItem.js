import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';
import BotonOne from './BotonOne';
import {EliminarDepto} from '../servicios/eventoService'
export default function EventosListItem({evento}) {

    const navigation = useNavigation()

    const eliminarEvento = async(e) => {
        await EliminarDepto().then((response) => {
           
            Alert.alert("se borro correctamente")
            console.log("se borro correctamente")
          }).catch(() => {
            console.log("error borrando")
      
          });
        }
    
    return (

        <View >
            <TouchableOpacity style={{height:170}}>
                <Card>
                    <Card.Content style={{ alignItems:'center'}}>
                            <Text>Aca se deberían mostrar las reservas del depto y poder eliminarlas</Text>
                            <Text>
                        {evento.nombre_evento}
                    </Text>
                    <Text>
                        {evento.fecha}
                    </Text>
                        <BotonOne 
                            text="Eliminar reseva"
                            onPress={eliminarEvento}/>
                    </Card.Content>
                </Card>
                </TouchableOpacity>
        </View>
    )
}


