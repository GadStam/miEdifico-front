import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity} from 'react-native';
import miED from "../../assets/logoMI.png";
import fondoPag from "../../assets/fondoInicio.jpg"
import MultiSelect from 'react-native-multiple-select';
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

  const Tab = createBottomTabNavigator();

  return (

      <View source={fondoPag}>
      
      <Text style={styles.titulo}>MI EDIFICIO</Text>
      
     <Girador/>

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
                  flexDirection: 'column',
                    alignSelf: 'center',
                    elevation: 2,
                    borderTopStartRadius: 5,
                    borderTopEndRadius: 5,
  }
});