import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity} from 'react-native';
import miED from "../assets/logoMI2";
import fondoPag from "../assets/blue"
import Boton from "./components/Boton";



const Home =()=>{
  return (
    
    <View style={styles.container}>
      <ImageBackground source={fondoPag} resizeMode="cover" style={styles.backgroundImage}>
      
      <Image style={styles.logo} source={miED}></Image>
      

      <Boton 
      text="iniciar como administrador" 
      onPress={()=>{alert('boooom')}}
      />
      <Boton 
      text="iniciar como inquilino" 
      onPress={()=>{alert('ratata')}}
      />
    
   
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
    height: 200,
    marginTop: 40,
},
    
    backgroundImage: {
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'cover',        
  }
  

  
   
});
