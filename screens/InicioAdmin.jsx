
  import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity} from 'react-native';
import miED from "../assets/logoMI2.png";
import fondoPag from "../assets/fondoInicio.jpg"
import { useNavigation } from '@react-navigation/native';
import Boton from "../components/Boton";

const InicioAdmin =({navigation})=>{
  
  return (
    
    
    <View>
      <ImageBackground source={fondoPag} style={styles.image}>
      <Image style={styles.logo} source={miED}></Image>
      

      <Text style={styles.titulo}>BIENVENIDO VARIABLE</Text>

     
   
      </ImageBackground>
    </View>
    
  );
}




export default InicioAdmin


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
},
titulo: {
  justifyContent: 'center',
   textAlign: 'center',
  color: 'blue',
}

});
