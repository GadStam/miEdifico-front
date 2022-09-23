import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, SafeAreaView, Platform, Alert, TextInput } from 'react-native';
import miED from "../../assets/logoMI.png";
import fondoPag from "../../assets/fondoInicio.jpg"
import Girador from '../../components/girador'
import Card from '../../components/Card';
import BotonOne from '../../components/BotonOne';
import { traerNombre } from '../../servicios/misDepartamentosService.js';
import * as ImagePicker from 'expo-image-picker';
import { crearExpensa } from '../../servicios/expensasService';
import Home from '../Home'
import Inquilino from '../InicioInquilino'
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import BotonFecha from '../../components/BotonFecha';

import {
  useFonts,
  Kanit_200ExtraLight,
} from '@expo-google-fonts/kanit';

let kanitLoaded

const Expensasadmin = ({ navigation }) => {
  kanitLoaded = useFonts({
    Kanit_200ExtraLight,
  });

  const [codImage, setCodIMage] = useState("");
  const [image, setImage] = useState(null);
  const [nombreAdmin, setNombreAdmin] = useState("");


  const [userState, setUserState] = useState({
    monto: '',
    fecha: '',
    depto:'',

  });


  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    setCodIMage(result.base64)



    if (!result.cancelled) {
      setImage(result.uri);
    }
  };


  const subirArchivo = async (e) => {
    if (!userState.monto || !userState.fecha || !userState.depto) {
      Alert.alert("Por favor ingresar todos los datos")
    }
    else {
    await crearExpensa(userState).then(() => {
      Alert.alert("Su Expensa se subio correctamente")
    })
      .catch(() => {

        Alert.alert("ERROR SUBIENDO ARCHIVOS")
        
      });
  }
}

  const getNombreAdmin = async (e) => {

    await traerNombre().then((response) => {

      setNombreAdmin(response.nombre);
      console.log("la respuesta es", response)
    }).catch(() => {
      console.log("no hay nombre")

    });
  }

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
      setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const fechar = new Date(date);
    const fechaAModificar = userState;

    if (fechar.getMonth() + 1 < 10 && fechar.getDate() < 10) {
      fechaAModificar.fecha = `${fechar.getFullYear()}-0${
        fechar.getMonth() + 1
      }-0${fechar.getDate()}`;
    } else if (fechar.getMonth() + 1 < 10) {
      fechaAModificar.fecha = `${fechar.getFullYear()}-0${
        fechar.getMonth() + 1
      }-${fechar.getDate()}`;
    } else if (fechar.getDate() < 10) {
      fechaAModificar.fecha = `${fechar.getFullYear()}-${
        fechar.getMonth() + 1
      }-0${fechar.getDate()}`;
    } else {
      fechaAModificar.fecha = `${fechar.getFullYear()}-${fechar.getMonth()}-${fechar.getDate()}`;
    }
    
    hideDatePicker();
    setUserState(fechaAModificar);
  };
  

  useEffect(() => {
    (async () => {
      await getNombreAdmin()
    })()
  }, [])


  return (

    <View>
      <View style={styles.top} >
        <Text style={styles.titulo}>{nombreAdmin && `Usuario: ${nombreAdmin}`}</Text>
        <View style={styles.boton} >
          <Button title="cerrar sesion" onPress={() => { navigation.navigate('Home') }}/>
        </View>
      </View>

      <View style={styles.content}>
      <Text style={styles.titulo}>Ingrese la imagen de la expensa:</Text>
      <View style={styles.archivo}>
        <Button title="Seleccionar archivo" onPress={pickImage} />
        
        </View>
        <Text style={{marginTop:"3%", marginBottom: '4%'}}>NUMERO DE CARACTERES:{codImage.length}</Text>
        

        <TextInput
                style={styles.textInput}
                placeholder="Ingrese el departamento"
                name="depto"
                value={userState.depto}
                onChangeText={text => setUserState({ ...userState, depto: text })}
              />

        <TextInput
                style={styles.textInput}

                placeholder="Ingrese el monto $"
                name="monto"
                value={userState.monto}
                onChangeText={number => setUserState({ ...userState, monto: Number(number) })}
                keyboardType="numeric"

              />

          <BotonFecha
              text={
                userState.fecha
                  ? `Fecha: ${userState.fecha},`
                  : "Ingrese el día del evento"
              }
              onPress={showDatePicker}
            />
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />

      <BotonOne
          text="Subir Expensa"
          onPress={subirArchivo}

        />




      </View>
    </View>

  );
  }

export default Expensasadmin

const styles = StyleSheet.create({
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
  textInput: {
    borderWidth: 1,
    padding: 15,
    width: "80%",
    borderRadius: 8,
    backgroundColor: "#fff",
    marginTop: 15,
    marginBottom: -5
  },
  text: {
    fontSize: 25,
    marginTop: '10%',
    alignContent: 'flex-end',
    fontFamily: 'Kanit-Regular'
  },
  content: {
    alignItems: 'center',
    marginTop: "10%"
  },
  boton: {
    top: 18,
  },
  archivo:{
    marginTop:"10%"
  }

});



