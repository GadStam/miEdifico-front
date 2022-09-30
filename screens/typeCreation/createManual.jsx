import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, TextInput, Alert} from 'react-native';
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
    departamentosXpiso: [],
    cant_pisos: 0,
    letra: 'true',
    correlativa:'true',
    automatico:'false',
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
          alert("Datos repetidos")
        });
    }
  }

  useEffect(() => {
    console.log(userState)
  })

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
          <Text style={styles.titulo}>Crear departamentos de forma manual</Text>

          <TextInput
            style={styles.textInput}
            placeholder="Ingrese la cantidad de pisos"
            name="cant_pisos"
            value={userState.cant_pisos}
            onChangeText={number => {
              setUserState({ ...userState, cant_pisos: number ? parseInt(number) : 0, departamentosXpiso:(new Array(userState.cant_pisos).fill(0)) })
            }}
            keyboardType="numeric"
          />
          {new Array(userState.cant_pisos).fill(0).map((elemento, i) => <TextInput
            style={styles.textInput}
            placeholder={`Ingrese la cantidad de departamentos del piso ${i + 1}`}
            name="departamentosXpiso"
            value={elemento}
            required
            onChangeText={(number) => {
              const copy = [];
              for (let index = 0; index < userState.departamentosXpiso.length; index++) {
                copy.push(userState.departamentosXpiso[index]);
              }
              copy[i] = number ? parseInt(number) : 0;
              setUserState({ ...userState, departamentosXpiso: copy })
            }}
            keyboardType="numeric"
          />)}
         

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
    height: '100%',
    minHeight:900,
    alignItems: 'center',
  },
  titulo: {
    paddingHorizontal: 20,
    textAlign: "center",
    color: 'blue',
    fontSize: 25,
    fontFamily: 'Kanit-Regular',
    marginBottom: 20,
    width: '80%'
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
