import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, SafeAreaView, TextInput, Alert } from 'react-native';
import fondoPag from "../../assets/fondoInicio.jpg"
import { AntDesign } from '@expo/vector-icons';
import Teclado from '../../components/Teclado';
import { Avatar, Card } from 'react-native-paper';
import {
    useFonts,
    Kanit_200ExtraLight,
} from '@expo-google-fonts/kanit';
import Boton from '../../components/BotonDoble';
import LoggedLayout from '../../components/LoggedLayout';

let kanitLoaded

const MisReservas = ({ navigation, route }) => {
    kanitLoaded = useFonts({
        Kanit_200ExtraLight,
    });

    return (
        <LoggedLayout>
        <Teclado>
            <View >
                <View style={styles.top} />

                <View style={styles.vista}>
                    <AntDesign style={styles.flecha} name="left" size={15} />
                    <Text style={styles.atras}
                        onPress={() => {
                            navigation.navigate('Schedule')
                        }}>
                        Volver atrás
                    </Text>
                    <Text style={styles.text}>Mis Reservas</Text>
                    <TouchableOpacity>
                        <Card>
                            <Card.Content>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text>Aca se deberían mostrar las reservas del depto y poder eliminarlas</Text>
                                    
                                </View>
                            </Card.Content>
                        </Card>
                    </TouchableOpacity>

                </View>
            </View>
        </Teclado>
        </LoggedLayout>

    );
}

export default MisReservas

const styles = StyleSheet.create({
    vista: {
        alignItems: 'center',

    },
    text: {
        textAlign: 'center',
        marginBottom: 20,
        color: 'blue',
        fontSize: 25,
        fontFamily: 'Kanit-Regular',
        marginTop: '20%'
    },
    texto: {
        color: 'black',
        width: "80%",
        textAlign: "justify",
        fontFamily: 'Kanit-Regular',
        marginBottom: '5%'
    },
    textInput: {
        borderWidth: 1,
        padding: 15,
        width: "80%",
        borderRadius: 8,
        backgroundColor: "white",
        marginTop: 10
    },
    titulo: {
        top: 18,
        color: 'blue',
        fontSize: 18,
        fontFamily: 'Kanit-Regular',
    },
    top: {
        height: 40,
        paddingHorizontal: '5%'
    },
    atras: {
        position: 'absolute',
        top: 33,
        left: '15%',
        color: 'blue',
        textDecorationLine: 'underline'
    },
    flecha: {
        position: 'absolute',
        top: 35.7,
        left: '10%',
        color: "blue"
    },
    boxes: {
        width: '80%',
        textAlign: "left",
        fontFamily: 'Kanit-Regular',
        marginBottom: '3%',
    },
});