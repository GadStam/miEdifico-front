import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, SafeAreaView, TextInput, Alert } from 'react-native';
import fondoPag from "../../assets/fondoInicio.jpg"
import BotonOne from '../../components/BotonOne';
import { AntDesign } from '@expo/vector-icons';
import Teclado from '../../components/Teclado';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import BotonFecha from '../../components/BotonFecha';

import BouncyCheckbox from "react-native-bouncy-checkbox";
import { crearEvento } from '../../servicios/eventoService';
import { RadioButton } from 'react-native-paper';
import {
    useFonts,
    Kanit_200ExtraLight,
} from '@expo-google-fonts/kanit';
import LoggedLayout from '../../components/LoggedLayout';

let kanitLoaded

const Reservas = ({ navigation, route }) => {
    kanitLoaded = useFonts({
        Kanit_200ExtraLight,
    });
    const [pileta, setPileta] = useState(false);
    const [terraza, setTerraza] = useState(false);
    const [cochera, setCochera] = useState(false);


    const [fechaSeleccionada, setFechaSeleccionada] = useState({
        cant_invitados: null,
        horas: null,
        fecha:'',
        hora_inicio:'',
        id_espaciocc: null
    });
   
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        if(!pileta&&!cochera&&!terraza){
            Alert.alert("Seleccione un espacio común para reservar")
        }else{
            setDatePickerVisibility(true);
        }
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        const fechar = new Date(date);
        const fechaAModificar=fechaSeleccionada
        
        if((fechar.getMonth()+1) < 10 && fechar.getDate()< 10){
            fechaAModificar.fecha=`${fechar.getFullYear()}-0${fechar.getMonth()+1}-0${fechar.getDate()}`
        }
        else if((fechar.getMonth()+1) < 10){
            fechaAModificar.fecha=`${fechar.getFullYear()}-0${fechar.getMonth()+1}-${fechar.getDate()}`
        }
        else if (fechar.getDate()< 10){
            fechaAModificar.fecha=`${fechar.getFullYear()}-${fechar.getMonth()+1}-0${fechar.getDate()}`
        }
        else{
            fechaAModificar.fecha=`${fechar.getFullYear()}-${fechar.getMonth()}-${fechar.getDate()}`
        }
        if((fechar.getHours()) < 10 && fechar.getMinutes()< 10){
            fechaAModificar.hora_inicio=`0${fechar.getHours()}.0${fechar.getMinutes()}`
        }
        else if((fechar.getHours()) < 10){
            fechaAModificar.hora_inicio=`0${fechar.getHours()}.${fechar.getMinutes()}`
        }
        else if(fechar.getMinutes()< 10){
            fechaAModificar.hora_inicio=`${fechar.getHours()}.0${fechar.getMinutes()}`
        }
        else{
            fechaAModificar.hora_inicio=`${fechar.getHours()}.${fechar.getMinutes()}`
        }
        hideDatePicker();
        console.log(fechaAModificar)
        setFechaSeleccionada(fechaAModificar)
    };
    const horasValidas =(number)=>{
        if(number<=5){
            setFechaSeleccionada({ ...fechaSeleccionada, horas: Number(number) })
        }
        else{
            Alert.alert("El evento no puede durar más de 5 horas")
            setFechaSeleccionada({ ...fechaSeleccionada, horas: '' })
        }
    }



    const onCreateEvento = async (e) => {
        if(fechaSeleccionada.cant_invitados===null || fechaSeleccionada.horas===null || fechaSeleccionada.fecha==='' || fechaSeleccionada.hora_inicio===''){
            Alert.alert("Por favor ingresar todos los datos")
            console.log(fechaSeleccionada)
        }
        else {
          
          
        
          await crearEvento({...fechaSeleccionada, id_espaciocc: pileta?1:terraza?2:cochera?3:null}).then(() => {
            navigation.navigate('Schedule')
          })
            .catch(() => {
    
              Alert.alert("Datos repetidos")
            });
        }
      }

    return (
        <LoggedLayout>
        <Teclado>
            <View >
                <View style={styles.vista}>
                    <AntDesign style={styles.flecha} name="left" size={15} />
                    <Text style={styles.atras}
                        onPress={() => {
                            navigation.navigate('Schedule')
                        }}>
                        Volver atrás
                    </Text>
                    <Text style={styles.text}>Reservar espacio</Text>
                    <Text style={styles.texto}>Seleccione que espacio comun desea reservar:</Text>
                    <View style={styles.boxes}>
                       <BouncyCheckbox
                size={23}
                fillColor="blue"
                unfillColor="white"
                text="Pileta"
                iconStyle={{ borderColor: "red" }}
                iconInnerStyle={{ borderWidth: 2 }}
                textStyle={{ color:'white', fontFamily: 'Kanit-Regular' }}
                value={pileta}
                onPress={()=>setPileta(!pileta)}
                style={{marginTop:'5%'}}
          />

            <BouncyCheckbox
                size={23}
                fillColor="blue"
                unfillColor="white"
                text="Terraza"
                iconInnerStyle={{ borderWidth: 2 }}
                textStyle={{ color:'white', fontFamily: 'Kanit-Regular' }}
                value={terraza}
                onPress={()=>setTerraza(!terraza)}
                style={{marginTop:'2%'}}    
                
          />

            <BouncyCheckbox
                size={23}
                fillColor="blue"
                unfillColor="white"
                text="Cochera"
                iconStyle={{ borderColor: "red" }}
                iconInnerStyle={{ borderWidth: 2 }}
                textStyle={{ color:'white', fontFamily: 'Kanit-Regular' }}
                value={cochera}
                onPress={()=>setCochera(!cochera)}    
                style={{marginTop:'2%'}}      
          />
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
                    <TextInput
                        style={styles.textInput}
                        placeholder="¿Cuantas horas va a durar el evento?"
                        name="horas"
                        value={fechaSeleccionada.horas}
                        onChangeText={number => horasValidas(number) }
                        keyboardType="numeric"
                    />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <BotonOne
                        text="Guardar evento"
                        onPress={onCreateEvento}
                    />
                </View>

            </View>
        </Teclado>
        </LoggedLayout>

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