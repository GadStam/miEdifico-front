import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity} from 'react-native';
import miED from "../assets/logoMI2.png";
import fondoPag from "../assets/fondoInicio.jpg"
import Boton from "../components/Boton";
import { useNavigation } from '@react-navigation/native';
import createEdifico from '../services/createEdificio'
 
const Home =({navigation})=>{
  
  return (
    
    
    <View>
      <ImageBackground source={fondoPag} style={styles.image}>
      <Image style={styles.logo} source={miED}></Image>
      

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
   <createEdifico />
      </ImageBackground>
    </View>
    
  );
}




export default Home


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    height: 200
},
image: {
  justifyContent: "center",
  resizeMode:"cover",
  height:'100%'
}

});
