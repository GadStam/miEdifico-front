import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, SafeAreaView } from 'react-native';
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

let kanitLoaded

const Contacto = ({ navigation }) => {
  kanitLoaded = useFonts({
    Kanit_200ExtraLight,
  });

  return (

    <View>
      <View style={styles.top} >

        <Text style={styles.titulo}>Edificio:</Text>

      </View>

      <View style={{ alignItems: 'center' }}>
        <Text style={styles.text}>Subir detalle expensas</Text>

        <BotonOne

          text="Cambiar de edificio"
          onPress={() => {
            navigation.navigate('InicioAdmin')
          }}
        />
      </View>
    </View>

  );
}

export default Contacto

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
  },
  text: {
    fontSize: 25,
    marginTop: '10%',
    alignContent: 'flex-end',
    fontFamily: 'Kanit-Regular'
  }
});