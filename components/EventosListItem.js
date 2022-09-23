import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';
import BotonOne from './BotonOne';
import {EliminarDepto} from '../servicios/eventoService'
export default function EventosListItem({Eventos}) {

    const navigation = useNavigation()

    let idMandar=Eventos.id_evento


    const eliminarEvento = async(e) => {
        await EliminarDepto(idMandar).then((response) => {
           
            Alert.alert("El evento se borro correctamente")
            navigation.navigate("Schedule")
          }).catch((e) => {
            console.log("error borrando")
            console.error(e)
      
          });
        }
    
    return (

        <View style={{alignItems: 'center'}}>
                <Card style={styles.card}>
                    <Card.Content style ={{marginTop: '5%',}}>
                            <Text>
                        Nombre del evento: {Eventos.nombre_evento}
                    </Text>
                    <Text>
                        Fecha: {Eventos.fecha}
                    </Text>
                    <Text>
                      Hora de Inicio: {Eventos.hora_inicio}
                    </Text>
                    <Text>
                        Hora Final: {Eventos.hora_final}
                    </Text>
                    <View style={{marginTop:'3%', marginBottom:'-30%', width: 280}}>
                    <BotonOne 
                            text="Eliminar reseva"
                            onPress={eliminarEvento}/>
                    </View>
                        
                    </Card.Content>
                </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        marginBottom: '5%',
        width: '80%',
        paddingHorizontal:'8%'

    },
    
});

