import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, SafeAreaView} from 'react-native';
import miED from "../../assets/logoMI.png";
import fondoPag from "../../assets/fondoInicio.jpg"
import Girador from '../../components/girador'
import Card from '../../components/Card';
import BotonOne from '../../components/BotonOne';
import Home from '../Home'
import Inquilino from '../InicioInquilino'
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  useFonts,
  Kanit_200ExtraLight,
} from '@expo-google-fonts/kanit';
import LoggedLayout from '../../components/LoggedLayout';
import { actionTypes, useContextState } from '../../contextState.js';
 
let kanitLoaded

const Contacto =({ navigation, route })=>{
 kanitLoaded = useFonts({
    Kanit_200ExtraLight,
  });
  const { contextState, setContextState } = useContextState();

  return (
    <LoggedLayout>
    <View>
      <Card
        title='Contacto'
        detalle='Portero: 1134780914'
        detalle2='Administrador: 111554217503'
        detalle3='Emergencia: 1190497612'
      />
      <View style={{alignItems:'center'}}>
      <BotonOne
      
          text="Cerrar Sesión"
          onPress={() => {
            navigation.navigate('Home')
            setContextState({
              type: actionTypes.SetDireccion,
              value: '',
            })
            setContextState({
              type: actionTypes.SetCodigo,
              value: '',
            })
            setContextState({
              type: actionTypes.SetPiso,
              value: '',
            })
          }}
        />
        </View>
        </View>
</LoggedLayout>
  );
}

export default Contacto

const styles = StyleSheet.create({
    titulo: {
        top:18,
        color: 'blue',
        fontSize: 18,
        fontFamily: 'Kanit-Regular',
      },
      top: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 100,
        alignItems: 'center',
        paddingHorizontal: '5%'
      }
});