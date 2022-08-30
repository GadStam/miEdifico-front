import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import BottomTab from '../navigation/BottomTab';
import React, { useState, useEffect, useCallback } from 'react';
import { traerPiso } from '../servicios/miEdificioService';
import fondoPag from "../assets/fondoInicio.jpg"
import { useNavigation } from '@react-navigation/native';


const Header = () => {
  const navigation = useNavigation();
  const [direccionInquilino, setDirec] = useState("");
  const [Piso, setPiso] = useState("");
  const [loaded, setLoaded] = useState(true)

  const getDireccion = async (e) => {
    setLoaded(true)
    await traerDirec().then((response) => {
      setLoaded(true)
      setDirec(response);
      console.log("la respuesta es", response)
    }).catch(() => {
      console.log("no hay direc")

    });
  }

  const getPiso = async (e) => {
    setLoaded(true)
    console.log(route.params.cod)
    console.log("este es", { codigo: route.params.cod })

    await traerPiso(route.params.cod).then((response) => {
      setLoaded(true)
      setPiso(response);
      console.log("la respuesta es", response)
    }).catch(() => {
      console.log("no hay direc")

    });
  }

  useEffect(() => {
    (async () => {
      await getPiso()
      await getDireccion()
    })()
  }, [])


    return (
        <View source={fondoPag} style={styles.top} >

          <Text style={styles.titulo}>Dirección: {direccionInquilino}</Text>
          <Text style={styles.titulo}>Depto: {Piso}</Text>

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

