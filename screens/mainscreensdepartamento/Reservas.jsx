import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import miED from "../../assets/logoMI.png";
import fondoPag from "../../assets/fondoInicio.jpg"
import Girador from '../../components/girador'
import Card from '../../components/Card';
import BotonOne from '../../components/BotonOne';
import Home from '../Home'
import Inquilino from '../InicioInquilino'
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Teclado from '../../components/Teclado';
import {

    useFonts,
    Kanit_200ExtraLight,
} from '@expo-google-fonts/kanit';

let kanitLoaded

const Expensas = ({ navigation }) => {
    kanitLoaded = useFonts({
        Kanit_200ExtraLight,
    });
    const [pileta, setPileta] = useState(false);
    const [terraza, setTerraza] = useState(false);
    const [cochera, setCochera] = useState(false);
    const [userState, setUserState] = useState({
        cant_invitados:null,
        fecha: null,
        hora_inicio:null,
        hora_final:null
      });

    return (

        <Teclado>
            <View >
            <View source={fondoPag} style={styles.top} >

                <Text style={styles.titulo}>Dirección:</Text>
                <Text style={styles.titulo}>Depto:</Text>

            </View>

            <View style={styles.vista}>
                <AntDesign style={styles.flecha} name="left" size={15} />
                <Text style={styles.atras}
                    onPress={() => {
                        navigation.navigate('Calendario')
                    }}>
                    Volver atrás
                </Text>
                <Text style={styles.text}>Reservar espacio</Text>
                

                <View style={styles.boxes}>
                    <Text style={styles.texto}>Seleccione que espacio comun desea reservar:</Text>
                    <BouncyCheckbox
                        size={23}
                        fillColor="blue"
                        unfillColor="white"
                        text="Pileta"
                        iconStyle={{ borderColor: "red" }}
                        iconInnerStyle={{ borderWidth: 2 }}
                        textStyle={{ color: 'black', fontFamily: 'Kanit-Regular' }}
                        value={pileta}
                        onPress={() => setPileta(!pileta)}
                        style={{ marginTop: '5%' }}
                    />

                    <BouncyCheckbox
                        size={23}
                        fillColor="blue"
                        unfillColor="white"
                        text="Terraza"
                        iconInnerStyle={{ borderWidth: 2 }}
                        textStyle={{ color: 'black', fontFamily: 'Kanit-Regular' }}
                        value={terraza}
                        onPress={() => setTerraza(!terraza)}
                        style={{ marginTop: '2%' }}

                    />

                    <BouncyCheckbox
                        size={23}
                        fillColor="blue"
                        unfillColor="white"
                        text="Cochera"
                        iconStyle={{ borderColor: "red" }}
                        iconInnerStyle={{ borderWidth: 2 }}
                        textStyle={{ color: 'black', fontFamily: 'Kanit-Regular' }}
                        value={cochera}
                        onPress={() => setCochera(!cochera)}
                        style={{ marginTop: '2%' }}
                    />

                </View>
                <TextInput
                    style={styles.textInput}
                    placeholder="Ingrese la cantidad de invitados"
                    name="cant_invitados"
                    value={userState.cant_invitados}
                    onChangeText={number => setUserState({ ...userState, cant_invitados: Number(number) })}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Ingrese la fecha"
                    name="fecha"
                    value={userState.fecha}
                    onChangeText={date => setUserState({ ...userState, fecha: Date(date) })}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Ingrese la hora"
                    name="Hora"
                    value={userState.hora_inicio}
                    onChangeText={number => setUserState({ ...userState, hora_inicio: Number(number) })}
                    keyboardType="numeric"
                />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <BotonOne
                        text="Guardar evento"
                        onPress={() => {
                            navigation.navigate('Calendario')
                        }}
                    />
                </View>

                </View>
            </Teclado>
            

    );
}

export default Expensas

const styles = StyleSheet.create({
    vista:{
        alignItems:'center',

    },
    text: {
        textAlign: 'center',
        marginBottom: 20,
        color: 'blue',
        fontSize: 25,
        fontFamily: 'Kanit-Regular',
        marginTop: '20%'
    },
    texto:{
        color: 'black',
        width: "100%",
        textAlign: "justify",
        fontFamily: 'Kanit-Regular',
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
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 100,
        alignItems: 'center',
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
        marginBottom: 20,
        width: '80%',
        textAlign: "left",
        fontFamily: 'Kanit-Regular',
        marginBottom: '3%',

    },
});