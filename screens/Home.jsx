import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity} from 'react-native';
import miED from "../assets/logoMI2.png";
import fondoPag from "../assets/fondoInicio.jpg"
import Boton from "../components/Boton";
import { useNavigation } from '@react-navigation/native';

 
const Home =({navigation})=>{
  
  return (
    
    <View>
      <ImageBackground source={fondoPag} style={styles.image}>
      <Image style={styles.logo} source={miED}></Image>
      <Text style={styles.titulo}>Mi Edificio</Text>
      
      <Boton
      text="Iniciar como administrador" 
      onPress={ () =>{
        navigation.navigate('InicioAdmin')
      }}
      />
     <Boton 
      text="Iniciar como inquilino" 
      onPress={ () =>{
        navigation.navigate('InicioInquilino')
      }}
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
    position: 'absolute',
    top: '20%',
    left:'15%'
},
  image: {
    height:'100%',
    alignItems: 'center',
  },
  titulo: {
    position: 'absolute',
    top: '45%',
    color: 'blue',
    fontSize: 20
  },
});
