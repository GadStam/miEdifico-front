import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, TextInput, Alert } from 'react-native';
import miED from "../../assets/logoMI.png";
import fondoPag from "../../assets/fondoInicio.jpg"
import chec from "../../assets/fondoInicio.jpg"
import { useNavigation } from '@react-navigation/native';
import BotonOne from "../../components/BotonOne";
import Teclado from '../../components/Teclado';
import BotonRadio from '../../components/BotonRadio';
import BotonRadio1 from '../../components/BotonRadio1';
import { AntDesign } from '@expo/vector-icons';
import SelectList from 'react-native-dropdown-select-list'
import { crearDepartamentos } from '../../servicios/createDepartamentos'
import {
  useFonts,
  Kanit_200ExtraLight,
} from '@expo-google-fonts/kanit';

let kanitLoaded

const CreateAutomatic = ({ navigation }) => {
  kanitLoaded = useFonts({
    Kanit_200ExtraLight,
  });

  const [userState, setUserState] = useState({

    cant_pisos: null,
    departamentosXpiso: null,
    letra: 'true',
    correlativa: 'true',
    automatico: 'true'

  });

  const onCreatePress = async (e) => {
    if (!userState.cant_pisos || !userState.departamentosXpiso) {
      Alert.alert("Por favor ingresar todos los datos")
    }
    else {
      await crearDepartamentos(userState).then(() => {
        navigation.navigate('Expensasadmin')
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
              navigation.navigate('selectAutoManual')
            }}>
            Volver atrás
          </Text>
          <Image style={styles.logo} source={miED}></Image>
          <Text style={styles.titulo}>Crear edificio automaticamente</Text>

          <TextInput
            style={styles.textInput}
            placeholder="Ingrese la cantidad de pisos"
            name="cant_pisos"
            value={userState.cant_pisos}
            onChangeText={number => setUserState({ ...userState, cant_pisos: number })}
            keyboardType="numeric"
          />

          <TextInput
            style={styles.textInput}
            placeholder="Ingrese la cantidad de departamentos por piso"
            name="departamentosXpiso"
            value={userState.departamentosXpiso}
            onChangeText={number => setUserState({ ...userState, departamentosXpiso: number })}
            keyboardType="numeric"
          />
          <Text style={styles.text}>Elija el tipo de numeración de los departamentos: </Text>
          <BotonRadio
            seleccion={userState.letra}
            changeSeleccion={(value) => { setUserState({ ...userState, letra: value }) }}
          />
          <Text style={styles.text}>La numeración de los departamentos: </Text>
          <BotonRadio1
            seleccion={userState.correlativa}
            changeSeleccion={(value) => { setUserState({ ...userState, correlativa: value }) }}
          />
          <BotonOne
            text="Siguiente"
            onPress={onCreatePress}
          />

        </View>
      </Teclado>
    </ImageBackground>
  );
}

export default CreateAutomatic

const styles = StyleSheet.create({
  logo: {
    width: '40%',
    height: '10%',
    marginTop: 130,
    marginBottom: 15
  },
  vista: {
    height: 900,
    alignItems: 'center',
  },
  titulo: {
    paddingHorizontal: 20,
    textAlign: "center",
    color: 'blue',
    fontSize: 25,
    fontFamily: 'Kanit-Regular',
    marginBottom: 20
  },
  text: {
    width: "75%",
    textAlign: "justify",
    color: 'blue',
    fontSize: 18,
    fontFamily: 'Kanit-Regular',
    marginBottom: 20,
    marginTop: 20
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
    top: 63,
    left: '15%',
    color: 'blue',
    textDecorationLine: 'underline'
  },
  flecha: {
    position: 'absolute',
    top: 65.7,
    left: '10%',
    color: "blue"
  },
});
