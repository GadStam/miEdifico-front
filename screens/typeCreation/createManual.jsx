import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, TextInput } from 'react-native';
import miED from "../../assets/logoMI.png";
import fondoPag from "../../assets/fondoInicio.jpg"
import { useNavigation } from '@react-navigation/native';
import BotonOne from "../../components/BotonOne";
import Teclado from '../../components/Teclado';
import { AntDesign } from '@expo/vector-icons';
import SelectList from 'react-native-dropdown-select-list'
import { crearEdficiosAdmin, traerEspcios } from '../../servicios/crearEdificioService'
import {
  useFonts,
  Kanit_200ExtraLight,
} from '@expo-google-fonts/kanit';

let kanitLoaded

const CrearManual = ({ navigation }) => {
  kanitLoaded = useFonts({
    Kanit_200ExtraLight,
  });

  const [userState, setUserState] = useState({
    direccion: '',
    año_construccion: '',
    cuit: null,
    clave_suterh: null,
    nro_encargado: null,
    nro_emergencia: null,
    id_espaciocc: 1,
  });

  const [useOpciones, setOpciones] = useState({
    espacios: []
  });

  useEffect(() => {
    (async () => {
      await getEspaciosComunes()
    })()
  }, [])

  const getEspaciosComunes = async (e) => {
    await traerEspcios().then((response) => {
      setOpciones(response);
    }).catch(() => {
      console.log("no hay nombre")
    });
  }


  const onCreatePress = async (e) => {
    if (!userState.direccion || !userState.año_construccion || !userState.cuit || !userState.clave_suterh) {
      Alert.alert("Por favor ingresar todos los datos")
    }
    else {
      await crearEdficiosAdmin(userState).then(() => {
        navigation.navigate('selectAutoManual')
      })
        .catch(() => {

          Alert.alert("Datos repetidos")
        });
    }
  }

  return (
    <ImageBackground source={fondoPag}>
      <Teclado>
        <View style={styles.vista}>

          <AntDesign style={styles.flecha} name="left" size={15} />
          <Text style={styles.atras}
            onPress={() => {
              navigation.navigate('InicioAdmin')
            }}>
            Volver atrás
          </Text>
          <Image style={styles.logo} source={miED}></Image>
          <Text style={styles.titulo}>Nuevo Edificio</Text>

          <TextInput
            style={styles.textInput}
            placeholder="Ingrese la direccion"
            name="direccion"
            value={userState.direccion}
            onChangeText={text => setUserState({ ...userState, direccion: text })}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Ingrese año de construccion"
            name="añoConstruccion"
            value={userState.añoConstruccion}
            onChangeText={number => setUserState({ ...userState, año_construccion: number })}
            keyboardType="numeric"
          />

          <TextInput
            style={styles.textInput}
            placeholder="Ingrese el CUIT"
            name="cuit"
            value={userState.cuit}
            onChangeText={number => setUserState({ ...userState, cuit: number })}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Ingrese la clave Suterh"
            name="claveSuterh"
            value={userState.claveSuterh}
            onChangeText={number => setUserState({ ...userState, clave_suterh: number })}
            keyboardType="numeric"
          />

          <TextInput
            style={styles.textInput}
            placeholder="Ingrese el numero de encargado"
            name="nro_encargado"
            value={userState.nro_encargado}
            onChangeText={number => setUserState({ ...userState, nro_encargado: number })}
            keyboardType="numeric"
          />

          <TextInput
            style={styles.textInput}
            placeholder="Ingrese el numero de emergencia"
            name="nro_emergencia"
            value={userState.nro_emergencia}
            onChangeText={number => setUserState({ ...userState, nro_emergencia: number })}
            keyboardType="numeric"
          />



          <BotonOne
            text="Crear edificio"
            onPress={onCreatePress}
          />
        </View>
      </Teclado>
    </ImageBackground>
  );
}

export default CrearManual

const styles = StyleSheet.create({
  logo: {
    width: '70%',
    height: '22%',
    marginTop: 115
  },
  vista: {
    height: 900,
    alignItems: 'center',
  },
  titulo: {
    marginBottom: 20,
    color: 'blue',
    fontSize: 25,
    fontFamily: 'Kanit-Regular'
  },
  textInput: {
    borderWidth: 1,
    padding: 15,
    width: "80%",
    borderRadius: 8,
    backgroundColor: "white",
    marginTop: 10
  },
  atras: {
    position: 'absolute',
    top: '7%',
    left: '15%',
    color: 'blue',
    textDecorationLine: 'underline'
  },
  flecha: {
    position: 'absolute',
    top: '7.3%',
    left: '10%',
    color: "blue"
  },
});
