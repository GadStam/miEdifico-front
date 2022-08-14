import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity } from 'react-native';
import miED from "../../assets/logoMI.png";
import fondoPag from "../../assets/fondoInicio.jpg"
import Girador from '../../components/girador'
import Card from '../../components/Card';
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

const Firstscreendepto = ({ navigation }) => {
  kanitLoaded = useFonts({
    Kanit_200ExtraLight,
  });

  return (

    <View>
      <View source={fondoPag} style={styles.top} >

        <Text style={styles.titulo}>Dirección:</Text>
        <Text style={styles.titulo}>Depto:</Text>

      </View>
      <Card
        title='Notificaciones'
        detalle='Arreglos en el piso 4 durante el día'
        detalle2='Próxima asamblea 12/4'
      />
      <Card
        title='Próxima expensa'
        detalle='xx/xx/xx'
        detalle2='$...'
      />
    </View>

  );
}

export default Firstscreendepto

const styles = StyleSheet.create({
  titulo: {
    top: 18,
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