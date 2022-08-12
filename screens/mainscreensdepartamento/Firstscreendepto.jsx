import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity} from 'react-native';
import miED from "../../assets/logoMI.png";
import fondoPag from "../../assets/fondoInicio.jpg"
import Girador from '../../components/girador'
import Home from '../Home'
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

      <View source={fondoPag} style={styles.top} >
      
      <Text style={styles.titulo}>Mi Edificio</Text>
      <Text style={styles.titulo}>Depto:</Text>
      
      </View>
           

    
  );
}

export default Firstscreendepto

const styles = StyleSheet.create({
  titulo: {
    top: '15%',
    color: 'blue',
    fontSize: 20,
    fontFamily: 'Kanit-Regular',
  },
  top:{
    backgroundColor:'white',
    flexDirection:'row',
    justifyContent:'space-between',
    height: '12%',
    paddingHorizontal: '5%'
  }
});