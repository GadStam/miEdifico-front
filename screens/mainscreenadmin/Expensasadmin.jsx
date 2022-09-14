import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, SafeAreaView, Platform, Alert } from 'react-native';
import miED from "../../assets/logoMI.png";
import fondoPag from "../../assets/fondoInicio.jpg"
import Girador from '../../components/girador'
import Card from '../../components/Card';
import BotonOne from '../../components/BotonOne';

import * as ImagePicker from 'expo-image-picker';
import { crearExpensa } from '../../servicios/expensasService';
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

const [codImage, setCodIMage] = useState("");
  
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64:true,
    });

    

    setCodIMage(result.base64)

    

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  

  const subirArchivo = async (e) => {
  
      await crearExpensa(codImage).then(() => {
        Alert.alert("Su Expensa se subio correctamente")
      })
        .catch(() => {

          Alert.alert("ERROR SUBIENDO ARCHIVOS")
        });
    }
  





  
  return (

    <View>
      <View style={styles.top} >

        <Text style={styles.titulo}>Edificio: </Text>

      </View>

      <View>
        
      <Button title="Pick an image from camera roll" onPress={pickImage}/>
      
    </View>
    <Text>{codImage.length}</Text>
    <BotonOne
            text="Crear edificio"
            onPress={subirArchivo}
            
          /> 
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







  