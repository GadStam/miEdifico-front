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
import BottomTab from '../../navigation/BottomTab';
import {
  useFonts,
  Kanit_200ExtraLight,
} from '@expo-google-fonts/kanit';
import LoggedLayout from '../../components/LoggedLayout';
 
let kanitLoaded

const Expensas =({navigation})=>{
 kanitLoaded = useFonts({
    Kanit_200ExtraLight,
  });

  return (
    <LoggedLayout>
    <View>
      <Card
        title='Expensas'
        detalle='Fecha de vencimiento: xx/xx/xx'
        detalle2='Monto a pagar: $...'
      />
      <View style={{alignItems:'center'}}>
      <BotonOne
      
          text="Descargar detalle expensas"
          onPress={() => {
            navigation.navigate('')
          }}
        />
        </View>
      </View>
      </LoggedLayout>
  );
}

export default Expensas

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