import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, SafeAreaView} from 'react-native';
import miED from "../../assets/logoMI.png";
import fondoPag from "../../assets/fondoInicio.jpg"
import Girador from '../../components/girador'
import Card from '../../components/Card';
import BotonOne from '../../components/BotonOne';
import Home from '../Home'
import Inquilino from '../InicioInquilino'
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  useFonts,
  Kanit_200ExtraLight,
} from '@expo-google-fonts/kanit';
import LoggedLayout from '../../components/LoggedLayout';
import { actionTypes, useContextState } from '../../contextState.js';
import {traerNombre} from "../../servicios/misDepartamentosService"
let kanitLoaded

const Contacto =({ navigation, route })=>{
 kanitLoaded = useFonts({
    Kanit_200ExtraLight,
  });
  const { contextState, setContextState } = useContextState();

  const [nombreAdmin, setNombreAdmin] = useState("");
  const [idAdmin, setidAdmin] = useState("");
  const [telefonoAD, setTelefono] = useState("");
  const getNombreAdmin = async (e) => {
    
    await traerNombre().then((response) => {
      setNombreAdmin(response.nombre);
      setidAdmin(response.id_administrador)
      setTelefono(response.telefono)

      console.log("la respuesta es", response)
    }).catch(() => {
      console.log("no hay nombre")

    });
  }

  useEffect(() => {
    (async () => {
      
      await getNombreAdmin()
    })()
  }, [])

  return (
    <LoggedLayout>
    <View>
      <Card
        title='Contacto'
        detalle={nombreAdmin && `Nombre: ${nombreAdmin}`}
        detalle2={idAdmin && `ID:: ${idAdmin}`}
        detalle3={telefonoAD && `Telefono: ${telefonoAD}`}
      />
      <View style={{alignItems:'center'}}>
      <BotonOne
      
          text="Cerrar sesión"
          onPress={() => {
            navigation.navigate('Home')
            setContextState({
              type: actionTypes.SetDireccion,
              value: '',
            })
            setContextState({
              type: actionTypes.SetCodigo,
              value: '',
            })
            setContextState({
              type: actionTypes.SetPiso,
              value: '',
            })
          }}
        />
        </View>
        </View>
</LoggedLayout>
  );
}

export default Contacto

const styles = StyleSheet.create({
    titulo: {
        top:18,
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