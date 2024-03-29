import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity } from 'react-native';
import Girador from "./components/girador.js"
import MainStack from './navigation/MainStack';
import * as Font from 'expo-font';
import { ContextProvider } from './contextState'

export default function App() {

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Kanit-Regular': require('./assets/fonts/Kanit-Regular.ttf'),
      });
      await Font.loadAsync({
        'Kanit-Medium': require('./assets/fonts/Kanit-Medium.ttf'),
      });
      setLoaded(true);
    };
    loadFonts()
  }, [])


  return (

    <ContextProvider>
      {!loaded ? <Girador /> : <MainStack />}
    </ContextProvider>
  );

}











