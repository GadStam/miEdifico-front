import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity} from 'react-native';


export default function App() {
  return (
    
    <View style={styles.container}>
      <ImageBackground source={require('./assets/blue.jpg')} resizeMode="cover" style={styles.backgroundImage}>
      <Image style={styles.logo} source={require('./assets/logoMI2.png')}></Image>
      <Button style={styles.Buttoner} title="Outline"></Button>

      <Button color="orange" title="Outline"></Button>
        </ImageBackground>
    
    </View>
  );
}









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
  },
  Buttoner:{
  marginTop:50

  }
  

  
   
});
