import React, {useState, useEffect, useContext} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, FlatList, TextInput, TouchableOpacity, ScrollView, Alert} from 'react-native';
import miED from "../../assets/logoMI.png";
import fondoPag from "../../assets/fondoInicio.jpg"
import { useNavigation } from '@react-navigation/native';
import BotonOne from "../../components/BotonOne";
import axios from 'axios';
import Teclado from '../../components/Teclado';
import { AntDesign } from '@expo/vector-icons';

import { registerAsset } from 'react-native-web/dist/cjs/modules/AssetRegistry';
import Spinner from 'react-native-loading-spinner-overlay/lib';

import {register, login} from '../../servicios/miEdificioService.js';

const RegistroAdmin =(props)=>{
  const {navigation, value, user} = props
  const [useContraConf, setContraConf] = useState({
    confirmarContraseña: '',
  });
  const [userState, setUserState] = useState({
    Nombre: '',
    Apellido: '',
    Mail: '',
    //Telefono: null,
    Contraseña: '',
   
  });

  const onRegisterPress = async (e) => {
    if (!userState.Nombre || !userState.Apellido || !userState.Mail|| !userState.Contraseña || !useContraConf.confirmarContraseña /*|| !userState.Telefono*/){
      Alert.alert("Por favor ingresar todos los datos")
    } else if (userState.Contraseña != useContraConf.confirmarContraseña) {
      Alert.alert("Las contraseñas no coinciden")
    }
    else {
      console.log(userState)
      await register(userState)
    }
  }

  return (
    <Teclado>
    <View style={{height:950}}>

        <ImageBackground source={fondoPag} style={styles.image}>
        <AntDesign style={styles.flecha} name="left" size={15}/>
        <Text style={styles.atras}
          onPress={ () =>{
            navigation.navigate('Home')
          }}> 
          Volver atrás
        </Text>
        
        <Image style={styles.logo} source={miED}></Image>
  
        <Text style={styles.titulo}>Registro</Text>
        
        <TextInput
            style={styles.textInput}
            placeholder="Ingrese su Nombre"
            name="Nombre"
            value={userState.Nombre}
            onChangeText={text => setUserState({...userState, Nombre: text}) }
          />   
          <TextInput
            style={styles.textInput}
            placeholder="Ingrese su Apellido"
            name="Apellido"
            value={userState.Apellido}
            onChangeText={text => setUserState({...userState, Apellido: text}) }
          /> 
          <TextInput
            style={styles.textInput}
            placeholder="Ingrese su Mail"
            name="Mail"
            value={userState.Mail}
            onChangeText={text => setUserState({...userState, Mail: text}) }
          />
         
          <TextInput
            style={styles.textInput}
            placeholder="Ingrese su Contraseña"
            name="Contraseña"
            value={userState.Contraseña}
            secureTextEntry={true}
            onChangeText={text => setUserState({...userState, Contraseña: text}) }
          />   
          <TextInput
            style={styles.textInput}
            placeholder="Ingrese nuevamente la contraseña"
            name="confirmarContrasena"
            value={useContraConf.confirmarContraseña}
            secureTextEntry={true}
            onChangeText={text => setContraConf({...useContraConf, confirmarContraseña: text}) }
          />  
          
          <BotonOne
            text="Registrarse" 
            title="register"
            onPress={onRegisterPress}
            />
            </ImageBackground>
           
        </View>
        </Teclado>
  );
}

export default RegistroAdmin

const styles = StyleSheet.create({
  logo: {
    width: '70%',
    height: '22%',
    marginTop: 130
  },
  image: {
    alignItems: 'center',
    resizeMode:"cover",
    height:'100%',
  },
  titulo: {
    textAlign: 'center',
    marginBottom: 20,
    color: 'blue',
    fontSize:25,
    fontFamily: 'Kanit-Regular'
  },
  texto:{
    marginTop:'-25%',
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
  atras:{
    position: 'absolute',
    top:'7%',
    left:'15%',
    color: 'blue',
    textDecorationLine:'underline'
  },
  flecha:{
    position: 'absolute',
    top:'7.3%',
    left:'10%',
    color:"blue"
  }
});
