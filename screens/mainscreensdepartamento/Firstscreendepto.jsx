import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity} from 'react-native';
import miED from "../../assets/logoMI.png";
import fondoPag from "../../assets/fondoInicio.jpg"
import Girador from '../../components/girador'
import Home from '../Home'
import Navbarprueba from '../../components/Navbarprueba'
import Inquilino from '../InicioInquilino'
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  useFonts,
  Kanit_200ExtraLight,
} from '@expo-google-fonts/kanit';
 
let kanitLoaded

const Firstscreendepto =({navigation})=>{
 kanitLoaded = useFonts({
    Kanit_200ExtraLight,
  });

  

  return (

      <View source={fondoPag}>
      
      <Text style={styles.titulo}>MI EDIFICIO</Text>
      
     <Girador/>

     <Navbarprueba style={styles.navegador}/>


     
     
   
      </View>

    
  );
}

export default Firstscreendepto

const styles = StyleSheet.create({
  titulo: {
    
    top: '45%',
    color: 'blue',
    fontSize: 30,
    fontFamily: 'Kanit-Regular',
    
  },
  fondo:{
    backgroundColor: 'white',
    flex:1
  },
  navegador:{
    width: '100%',
    height: 50,
    backgroundColor: '#EE5407',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
    paddingTop:100
  }
});