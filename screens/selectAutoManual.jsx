import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity} from 'react-native';
import miED from "../assets/logoMI.png";
import fondoPag from "../assets/fondoInicio.jpg"
import Boton from "../components/BotonDoble";
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import {
  useFonts,
  Kanit_200ExtraLight,
} from '@expo-google-fonts/kanit';
 
let kanitLoaded

const SelectAutoManual =({navigation})=>{
 kanitLoaded = useFonts({
    Kanit_200ExtraLight,
  });
  var automatico = 'false';
  return (

      <ImageBackground source={fondoPag} style={styles.image}>
      <AntDesign style={styles.flecha} name="left" size={15}/>
        <Text style={styles.atras}
          onPress={ () =>{
            navigation.navigate('CrearEdificio')
          }}> 
          Volver atrás
        </Text>
      <Image style={styles.logo} source={miED}></Image>
      <Text style={styles.titulo}>Crear los departamentos:</Text>
      
      <Boton
      text="De forma manual" 
      onPress={ () =>{
        navigation.navigate('createManual')
      }}
      />
     <Boton 
      text="De forma automatica" 
      onPress={ () =>{
        navigation.navigate('createAutomatic')
        automatico = 'true'
        console.log(automatico)
      }}
      />
   
      </ImageBackground>
    
  );
}

export default SelectAutoManual

const styles = StyleSheet.create({
  logo: {
    width: '70%',
    height: '22%',
    marginTop:200
},
  image: {
    height:'100%',
    alignItems: 'center',
  },
  titulo: {
    position: 'absolute',
    top: '45%',
    color: 'blue',
    fontSize: 25,
    fontFamily: 'Kanit-Regular',
    textAlign: "center"
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
