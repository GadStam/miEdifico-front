import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, TextInput} from 'react-native';
import miED from "../assets/logoMI2.png";
import fondoPag from "../assets/fondoInicio.jpg"
import { useNavigation } from '@react-navigation/native';
import BotonOne from "../components/BotonOne";
import {
  useFonts,
  Kanit_200ExtraLight,
} from '@expo-google-fonts/kanit';
 
let kanitLoaded

const Home =({navigation})=>{
 kanitLoaded = useFonts({
    Kanit_200ExtraLight,
  });

  const [data, setData] = useState({ 
    direccion: undefined,
    añoConstruccion: undefined,
    cuit: undefined,
    claveSuterh: undefined,
  });

  const onChangeInput = (e, name) => {
    setData({
      ...data,
      [name]: e.nativeEvent.text,
    });
  };

  const registrar = () => {
    console.log(data);
  };


  return (
    
    <View>
      <ImageBackground source={fondoPag} style={styles.image}>
      <Image style={styles.logo} source={miED}></Image>
      <Text style={styles.titulo}>MI EDIFICIO</Text>
      
      <TextInput
          style={styles.textInput}
          placeholder="Ingrese la direccion"
          name="direccion"
          onChange={(e) => onChangeInput(e, "direccion")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Ingrese año de construccion"
          name="añoConstruccion"
          onChange={(e) => onChangeInput(e, "añoConstruccion")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="ingrese el CUIT"
          name="cuit"
          onChange={(e) => onChangeInput(e, "cuit")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="ingrese la clave Suterh"
          name="claveSuterh"
          onChange={(e) => onChangeInput(e, "claveSuterh")}
        />


     
        <BotonOne
        text="Crear edificio" 
        onPress={registrar}
      />
      

      </ImageBackground>
    </View>
    
  );
}

export default Home

const styles = StyleSheet.create({
  logo: {
    width: '70%',
    height: '25%',
    marginTop:100
  },
  image: {
    alignItems: 'center',
    resizeMode:"cover",
    height:'100%'
  },
  titulo: {
    textAlign: 'center',
    marginBottom: 20,
    color: 'blue',
    fontSize:25,
    fontFamily: 'Kanit-Regular'
  },
  textInput: {
    borderWidth: 1,
    padding: 15,
    width: "80%",
    borderRadius: 8,
    backgroundColor: "#fff",
    marginTop: 8,
  
  },
});
