import React, {useState, useEffect, useContext} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, FlatList, TextInput, TouchableOpacity, ScrollView, Alert} from 'react-native';
import miED from "../../assets/logoMI.png";
import fondoPag from "../../assets/fondoInicio.jpg"
import { useNavigation } from '@react-navigation/native';
import BotonOne from "../../components/BotonOne";
import axios from 'axios';
import Teclado from '../../components/Teclado';
import { AntDesign } from '@expo/vector-icons';

import {register, login} from '../../servicios/miEdificioService.js';

const LogInAdministrador =({navigation})=>{
  
  const [userState, setUserState] = useState({
    Mail: '',
    Contraseña: '',
  });

  const onLogInPress = async (e) => {
    
    if (!userState.Mail|| !userState.Contraseña){
      console.log("hhh")
      Alert.alert("Por favor ingresar todos los datos")
    } else {
      await login(userState).then(() => {
        console.log("entro")
        navigation.navigate('InicioAdmin')
      })
      .catch(() => {
        console.log("no entro")
      Alert.alert("Datos incorrectos")
      });
    }
  }

  return (
    <Teclado>
    <View style={{height:900}}>
  
        <ImageBackground source={fondoPag} style={styles.image}>
        <AntDesign style={styles.flecha} name="left" size={15}/>
        <Text style={styles.atras}
          onPress={ () =>{
            navigation.navigate('Home')
          }}> 
          Volver atrás
        </Text>
        
        <Image style={styles.logo} source={miED}></Image>
        
        <Text style={styles.titulo}>Inicio de sesión</Text>
        
        <TextInput
            style={styles.textInput}
            
            placeholder="Ingrese su usuario"
            name="usuario"
            value={userState.Mail}
            onChangeText={text => setUserState({...userState, Mail: text}) }
          
          />
          
          <TextInput
            style={styles.textInput}
            placeholder="Ingrese su Contraseña"
            name="contrasena"
            value={userState.Contraseña}
            secureTextEntry={true}
            onChangeText={text => setUserState({...userState, Contraseña: text})}
          />   
          
          <BotonOne
            text="Iniciar Sesion"
            title="Iniciar Sesion"
            onPress={onLogInPress}
            />
            
            <Text style={styles.texto}
            onPress={ () =>{
              navigation.navigate('RegistroAdmin')
            }}
            >No tenes una cuenta? Registrate</Text>
            
            </ImageBackground>
           
        </View>
        </Teclado>
  );
}

export default LogInAdministrador

const styles = StyleSheet.create({
  logo: {
    width: '70%',
    height: '22%',
    marginTop: 200
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
