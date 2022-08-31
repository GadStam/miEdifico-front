import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';
import BotonOne from './BotonOne';

export default function EventosListItem() {

    const navigation = useNavigation()
    return (

        <View >
            <TouchableOpacity style={{height:170}}>
                <Card>
                    <Card.Content style={{ alignItems:'center'}}>
                            <Text>Aca se deberían mostrar las reservas del depto y poder eliminarlas</Text>
                        <BotonOne 
                            text="Eliminar reseva"
                            onPress={() => {
                              navigation.navigate('')
                            }}/>
                    </Card.Content>
                </Card>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    lista: {
        color: 'white',
        justifyContent: 'center',
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