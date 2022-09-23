import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity } from 'react-native';
import Card from '../../components/Card';
import LoggedLayout from '../../components/LoggedLayout';
import {
  useFonts,
  Kanit_200ExtraLight,
} from '@expo-google-fonts/kanit';

let kanitLoaded

const Firstscreendepto = ({ navigation, route }) => {
  kanitLoaded = useFonts({
    Kanit_200ExtraLight,
  });
  
  return (
    <LoggedLayout>
      <View>
        <Card
          title='Notificaciones'
          detalle='Arreglos en el piso 4 durante el día'
          detalle2='Próxima asamblea 12/4'
        />
        <Card
          title='Próxima expensa'
          detalle='xx/xx/xx'
          detalle2='$...'
        />

      </View>
    </LoggedLayout>
  );
}

export default Firstscreendepto

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
  }
});