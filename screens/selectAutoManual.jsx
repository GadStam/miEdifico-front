import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity} from 'react-native';
import miED from "../assets/logoMI.png";
import fondoPag from "../assets/fondoInicio.jpg"
import Boton from "../components/BotonDoble";
import { useNavigation } from '@react-navigation/native';
import {
  useFonts,
  Kanit_200ExtraLight,
} from '@expo-google-fonts/kanit';
 
let kanitLoaded

const SelectAutoManual =({navigation})=>{
 kanitLoaded = useFonts({
    Kanit_200ExtraLight,
  });
  return (
    
    <View>
      
      <ImageBackground source={fondoPag} style={styles.image}>
      <Image style={styles.logo} source={miED}></Image>
      <Text style={styles.titulo}>CREAR EDIFICIO DE FORMA:</Text>
      
      <Boton
      text="MANUAL" 
      onPress={ () =>{
        navigation.navigate('LogInAdministrador')
      }}
      />
     <Boton 
      text="AUTOMATICO" 
      onPress={ () =>{
        navigation.navigate('InicioInquilino')
      }}
      />
   
      </ImageBackground>
    </View>
    
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
    fontSize: 30,
    fontFamily: 'Kanit-Regular'
  },
});
