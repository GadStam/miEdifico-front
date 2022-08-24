import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, SafeAreaView, TextInput, Alert } from 'react-native';
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
import DatePicker from 'react-native-date-picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import BotonFecha from '../../components/BotonFecha';
import { RadioButton } from 'react-native-paper';
import {
    useFonts,
    Kanit_200ExtraLight,
} from '@expo-google-fonts/kanit';
import Boton from '../../components/BotonDoble';

let kanitLoaded

const Reservas = ({ navigation }) => {
    kanitLoaded = useFonts({
        Kanit_200ExtraLight,
    });
    const [pileta, setPileta] = useState(false);
    const [terraza, setTerraza] = useState(false);
    const [cochera, setCochera] = useState(false);
    const [fechaSeleccionada, setFechaSeleccionada] = useState({
        cant_invitados: null,
        fecha:'',
        hora_inicio:''
    });
    const [checked, setChecked] = React.useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("La fecha elegida es: ", date);
        const fechar = new Date(date);
        if((fechar.getMonth()+1) < 10 && fechar.getDate()< 10){
            setFechaSeleccionada({...fechaSeleccionada,
            fecha:`${fechar.getFullYear()}-0${fechar.getMonth()+1}-0${fechar.getDate()}`})
        }
        else if((fechar.getMonth()+1) < 10){
            setFechaSeleccionada({...fechaSeleccionada,
            fecha:`${fechar.getFullYear()}-0${fechar.getMonth()+1}-${fechar.getDate()}`})
        }
        else if (fechar.getDate()< 10){
            setFechaSeleccionada({...fechaSeleccionada,
            fecha:`${fechar.getFullYear()}-${fechar.getMonth()+1}-0${fechar.getDate()}`})
        }
        else{
            setFechaSeleccionada({...fechaSeleccionada,
            fecha:`${fechar.getFullYear()}-${fechar.getMonth()}-${fechar.getDate()}`})
        }
        if((fechar.getHours()) < 10 && fechar.getMinutes()< 10){
            setFechaSeleccionada({ ...fechaSeleccionada, hora_inicio:`0${fechar.getHours()}:0${fechar.getMinutes()}`})
        }
        else if((fechar.getHours()) < 10){
            setFechaSeleccionada({ ...fechaSeleccionada, hora_inicio:`0${fechar.getHours()}:${fechar.getMinutes()}`})
        }
        else if(fechar.getMinutes()< 10){
            setFechaSeleccionada({ ...fechaSeleccionada, hora_inicio:`${fechar.getHours()}:0${fechar.getMinutes()}`})
        }
        else{
            setFechaSeleccionada({ ...fechaSeleccionada, hora_inicio:`${fechar.getHours()}:${fechar.getMinutes()}`}) 
        }
        hideDatePicker();
    };

    return (
        <Teclado>
            <View >
                <View source={fondoPag} style={styles.top} />

                <View style={styles.vista}>
                    <AntDesign style={styles.flecha} name="left" size={15} />
                    <Text style={styles.atras}
                        onPress={() => {
                            navigation.navigate('Calendario')
                        }}>
                        Volver atrás
                    </Text>
                    <Text style={styles.text}>Reservar espacio</Text>
                    <Text style={styles.texto}>Seleccione que espacio comun desea reservar:</Text>
                    <View style={styles.boxes}>
                        <RadioButton.Group>
                            <RadioButton.Item
                                status={checked === 'pileta' ? 'checked' : 'unchecked'}
                                value='pileta'
                                label="Pileta"
                                onPress={() => {
                                    setPileta(!pileta); setChecked('pileta')
                                }
                                }
                                text="Pileta"
                                color='blue'
                                style={{ flexDirection: 'row-reverse' }}
                            />
                            <RadioButton.Item
                                status={checked === 'terraza' ? 'checked' : 'unchecked'}
                                value={terraza}
                                label="Terraza"
                                onPress={() => {
                                    setTerraza(!terraza); setChecked('terraza')
                                }}
                                color='blue'
                                borderColor='blue'
                                style={{ flexDirection: 'row-reverse' }}
                            />
                            <RadioButton.Item
                                status={checked === 'cochera' ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setCochera(!cochera); setChecked('cochera')
                                }
                                }
                                label="Cochera"
                                color='blue'
                                borderColor='blue'
                                style={{ flexDirection: 'row-reverse' }}

                            />
                        </RadioButton.Group>
                    </View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Ingrese la cantidad de invitados"
                        name="cant_invitados"
                        value={fechaSeleccionada.cant_invitados}
                        onChangeText={number => setFechaSeleccionada({ ...fechaSeleccionada, cant_invitados: Number(number) })}
                        keyboardType="numeric"
                    />

                    <BotonFecha text={fechaSeleccionada.hora_inicio ? (`Día: ${fechaSeleccionada.fecha}, Hora: ${fechaSeleccionada.hora_inicio}`) : 'Ingrese el día y la hora del evento'} onPress={showDatePicker} />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="datetime"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <BotonOne
                        text="Guardar evento"
                        onPress={() => {
                            if(!fechaSeleccionada.cant_invitados || !fechaSeleccionada.fecha || fechaSeleccionada.hora_inicio){
                                Alert.alert("Por favor ingresar todos los datos")
                                console.log(fechaSeleccionada.cant_invitados)
                                console.log(fechaSeleccionada.fecha)
                                console.log(fechaSeleccionada.hora_inicio)
                            }
                            else{
                                navigation.navigate('Calendario')
                            }
                            
                        }}
                    />
                </View>

            </View>
        </Teclado>


    );
}

export default Reservas

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
        height: 100,
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