import React,{ useState, useEffect, useCallback } from 'react';

import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import miED from "../../assets/logoMI.png";
import fondoPag from "../../assets/fondoInicio.jpg"
import Girador from '../../components/girador'
import Card from '../../components/Card';
import Home from '../Home'
import {traerPiso} from '../../servicios/miEdificioService'
import Inquilino from '../InicioInquilino'
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  useFonts,
  Kanit_200ExtraLight,
} from '@expo-google-fonts/kanit';
import BottomTab from '../../navigation/BottomTab';

let kanitLoaded

const Firstscreendepto = ({navigation, route }) => {
  kanitLoaded = useFonts({
    Kanit_200ExtraLight,
  });
  

  
  const [direccionInquilino, setDirec] = useState("");
  const [Piso, setPiso] = useState("");
  const [loaded, setLoaded] = useState(true)



  const getDireccion = async (e) => {
    setLoaded(true)
    await traerDirec().then((response) => {
      setLoaded(true)
      setDirec(response);
      console.log("la respuesta es", response)
    }).catch(() => {
      console.log("no hay direc")

    });
  }

  const getPiso = async (e) => {
    setLoaded(true)
    console.log(route.params.cod)
    console.log(route.params.cod)
    console.log(route.params.cod)
    console.log("este es", {codigo: route.params.cod})

    await traerPiso(route.params.cod).then((response) => {
      setLoaded(true)
      setPiso(response);
      console.log("la respuesta es", response)
    }).catch(() => {
      console.log("no hay direc")

    });
  }

  useEffect(() => {
    (async () => {
      await getPiso()
      await getDireccion()
    })()
  }, [])


  return (

    <View>
      <View source={fondoPag} style={styles.top} >

        <Text style={styles.titulo}>Dirección:</Text>
        <Text style={styles.titulo}>Depto: {Piso}</Text>

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