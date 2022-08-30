import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import BottomTab from '../navigation/BottomTab';
import React, { useState, useEffect, useCallback } from 'react';
import { traerPiso } from '../servicios/miEdificioService';
import fondoPag from "../assets/fondoInicio.jpg"

const Header = () => {
    

    return (
        <View source={fondoPag} style={styles.top} >

          <Text style={styles.titulo}>Dirección:</Text>
          <Text style={styles.titulo}>Depto: </Text>

        </View>
    )
}

export default Header

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

