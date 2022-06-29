import React, {useState, useEffect, useContext} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, FlatList, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import miED from "../../assets/logoMI2.png";
import fondoPag from "../../assets/fondoInicio.jpg"
import { useNavigation } from '@react-navigation/native';
import BotonOne from "../../components/BotonOne";
import axios from 'axios';
import Teclado from '../../components/Teclado';
import { AntDesign } from '@expo/vector-icons';
import { AuthContext } from '../../context/AuthContext';
import { registerAsset } from 'react-native-web/dist/cjs/modules/AssetRegistry';
import Spinner from 'react-native-loading-spinner-overlay/lib';

import {register, login} from '../servicios/auth.js';



const RegistroAdmin =(props)=>{
  const {navigation, register, value, user} = props

  const [userState, setUser] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
  });

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
  
        <Text style={styles.titulo}>Registro</Text>
        
        <TextInput
            style={styles.textInput}
            placeholder="Nombre"
            name="Nombre"
            value={nombre}
            onChangeText={text => setUser({...userState, nombre: text}) }
          />   
          <TextInput
            style={styles.textInput}
            placeholder="Apellido"
            name="Apellido"
            value={apellido}
            onChangeText={text => setUser({...userState, apellido: text}) }
          /> 

        <TextInput
            style={styles.textInput}
            
            placeholder="Usuario"
            name="usuario"
            value={email}
            onChangeText={text => setUser({...userState, email: text}) }
          
          />
          
          <TextInput
            style={styles.textInput}
            placeholder="Contraseña"
            name="contrasena"
            value={password}
            secureTextEntry={true}
            onChangeText={text => setUser({...userState, password: text}) }
          />   
          
          <BotonOne
            text="Registrarse" 
            title="register"
            onPress={async (e) => await register(userState, setUserState)}
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
