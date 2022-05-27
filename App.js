import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native';

export default function App() {
  return (
    
    <View style={styles.container}>
      <ImageBackground source={require('./assets/water.jpg')} resizeMode="cover" style={styles.backgroundImage}>
      <Text>hello !</Text>
      <Image style={styles.logo} source={require('./assets/logoMI2.png')}></Image>
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
},
    
    backgroundImage: {
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'cover',        
  }
   
});
