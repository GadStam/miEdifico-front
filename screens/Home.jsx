import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity} from 'react-native';
import miED from "../assets/logoMI.png";
import fondoPag from "../assets/fondoInicio.jpg"
import MultiSelect from 'react-native-multiple-select';
import Boton from "../components/BotonDoble";
import { useNavigation } from '@react-navigation/native';
import {
  useFonts,
  Kanit_200ExtraLight,
} from '@expo-google-fonts/kanit';
 
let kanitLoaded

const Home =({navigation})=>{
 kanitLoaded = useFonts({
    Kanit_200ExtraLight,
  });
  return (

      <ImageBackground source={fondoPag} style={styles.image}>
      <Image style={styles.logo} source={miED}></Image>
      <Text style={styles.titulo}>MI EDIFICIO</Text>
      
      <Boton
      text="Ingresar como administrador" 
      onPress={ () =>{
        navigation.navigate('SelectAutoManual')
      }}
      />
     <Boton 
      text="Ingresar como inquilino" 
      onPress={ () =>{
        navigation.navigate('InicioInquilino')
      }}
      />
   
      </ImageBackground>

    
  );
}

export default Home

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
