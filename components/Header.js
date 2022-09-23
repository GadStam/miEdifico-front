import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { traerPiso, traerDirec } from '../servicios/miEdificioService';
import { useRoute, useNavigation } from '@react-navigation/native';
import { actionTypes, useContextState } from '../contextState.js';

const Header = () => {
  const navigation = useNavigation();
  const route = useRoute();
  
  const { contextState, setContextState } = useContextState();
  const [loaded, setLoaded] = useState(true)

  const getPisoYDirec = async (e) => {
    setLoaded(true)
    console.log("Codigo:", contextState.codigo)

    await traerPiso(contextState.codigo).then((responseDpto) => {
      setLoaded(true)
      setContextState({
        type: actionTypes.SetPiso,
        value: responseDpto.depto,
      })
      traerDirec(responseDpto.id_edificio, responseDpto.token).then((responseEdificio) => {
        setLoaded(true)
        setContextState({
          type: actionTypes.SetDireccion,
          value: responseEdificio[0].direccion,
        })
      }).catch((e) => {
        console.log(e)
  
      });
      console.log("El piso es", response)
    }).catch(() => {
      console.log("no hay piso")

    });
  }

  useEffect(() => {
    (async () => {
      await getPisoYDirec()
    })()
  }, [])


    return (
        <View style={styles.top} >

          <Text style={styles.titulo}>Dirección: {contextState.direccion}</Text>
          <Text style={styles.titulo}>Depto: {contextState.piso}</Text>

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

