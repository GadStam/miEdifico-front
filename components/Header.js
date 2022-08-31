import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import BottomTab from '../navigation/BottomTab';
import React, { useState, useEffect, useCallback } from 'react';
import { traerPiso } from '../servicios/miEdificioService';
import fondoPag from "../assets/fondoInicio.jpg"
import { useRoute, useNavigation } from '@react-navigation/native';
import { actionTypes, useContextState } from '../contextState.js';


const Header = () => {
  const navigation = useNavigation();
  const route = useRoute();
  
  const { contextState, setContextState } = useContextState();
  const [direccionInquilino, setDirec] = useState("");
  const [loaded, setLoaded] = useState(true)

  const getDireccion = async (e) => {
    setLoaded(true)
    console.log("Direccion:", contextState.direccion)
    await traerDirec(contextState.direccion).then((response) => {
      setLoaded(true)
      setDirec(response);
      console.log("La direccion es", response)
    }).catch(() => {
      console.log("no hay direc")

    });
  }

  const getPiso = async (e) => {
    setLoaded(true)
    console.log("Codigo:", contextState.codigo)

    await traerPiso(contextState.codigo).then((response) => {
      setLoaded(true)
      setContextState({
        type: actionTypes.SetPiso,
        value: response
      })
      console.log("El piso es", response)
    }).catch(() => {
      console.log("no hay piso")

    });
  }

  useEffect(() => {
    (async () => {
      await getPiso()
      await getDireccion()
    })()
  }, [])


    return (
        <View style={styles.top} >

          <Text style={styles.titulo}>Dirección: {direccionInquilino}</Text>
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

