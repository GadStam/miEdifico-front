import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, FlatList, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import miED from "../../assets/logoMI.png";
import fondoPag from "../../assets/fondoInicio.jpg"
import { useNavigation } from '@react-navigation/native';
import BotonOne from "../../components/BotonOne";
import axios from 'axios';
import Teclado from '../../components/Teclado';
import { AntDesign } from '@expo/vector-icons';

import { registerAsset } from 'react-native-web/dist/cjs/modules/AssetRegistry';
import Spinner from 'react-native-loading-spinner-overlay/lib';

import { register, login } from '../../servicios/miEdificioService.js';

const RegistroAdmin = (props) => {
  const { navigation, value, user } = props
  const [useContraConf, setContraConf] = useState({
    confirmarContraseña: '',
  });
  const [userState, setUserState] = useState({
    nombre: '',
    apellido: '',
    mail: '',
    telefono: null,
    contraseña: '',

  });

  const onRegisterPress = async (e) => {
    if (!userState.nombre || !userState.apellido || !userState.mail || !userState.contraseña || !useContraConf.confirmarContraseña || !userState.telefono) {
      Alert.alert("Por favor ingresar todos los datos")
    } else if (userState.contraseña != useContraConf.confirmarContraseña) {
      Alert.alert("Las contraseñas no coinciden")
    }
    else {
      console.log(userState)
      await register(userState).then(() => {
        navigation.navigate('InicioAdmin')
      })
        .catch(() => {

          Alert.alert("Datos incorrectos")
        }); // Promise<String> Exception

      /*
        Register es una promesa propagada
        Response va a ser del tipo de dato que se retorne en el response propagado
      */
    }
  }

  return (
    <ImageBackground source={fondoPag}>
      <Teclado>
        <View style={styles.vista}>

          <AntDesign style={styles.flecha} name="left" size={15} />
          <Text style={styles.atras}
            onPress={() => {
              navigation.navigate('Home')
            }}>
            Volver atrás
          </Text>

          <Image style={styles.logo} source={miED}></Image>

          <Text style={styles.titulo}>Registro</Text>

          <TextInput
            style={styles.textInput}
            placeholder="Ingrese su nombre"
            name="Nombre"
            value={userState.nombre}
            onChangeText={text => setUserState({ ...userState, nombre: text })}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Ingrese su apellido"
            name="Apellido"
            value={userState.apellido}
            onChangeText={text => setUserState({ ...userState, apellido: text })}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Ingrese su mail"
            name="Mail"
            value={userState.mail}
            onChangeText={text => setUserState({ ...userState, mail: text })}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Ingrese su teléfono"
            name="Telefono"
            value={userState.telefono}
            keyboardType="numeric"
            onChangeText={number => setUserState({ ...userState, telefono: number })}

          />
          <TextInput
            style={styles.textInput}
            placeholder="Ingrese su contraseña"
            name="Contraseña"
            value={userState.contraseña}
            secureTextEntry={true}
            onChangeText={text => setUserState({ ...userState, contraseña: text })}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Ingrese nuevamente la contraseña"
            name="confirmarContrasena"
            value={useContraConf.confirmarContraseña}
            secureTextEntry={true}
            onChangeText={text => setContraConf({ ...useContraConf, confirmarContraseña: text })}
          />

          <BotonOne
            text="Registrarse"
            title="register"
            onPress={onRegisterPress}
          />
          
        </View>
      </Teclado>
    </ImageBackground>
  );
}

export default RegistroAdmin

const styles = StyleSheet.create({
  logo: {
    width: '40%',
    height: '10%',
    marginTop: 130,
    marginBottom: 15
  },
  vista:{
    height:900,
    alignItems: 'center', 
  },
  titulo: {
    textAlign: 'center',
    marginBottom: 20,
    color: 'blue',
    fontSize: 25,
    fontFamily: 'Kanit-Regular'
  },
  texto: {
    marginTop: '-25%',
    color: 'white'
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
  }
});
