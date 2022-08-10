import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, TextInput, Alert, FlatList } from 'react-native';
import miED from "../assets/logoMI.png";
import Laseleccion from '../components/multiselectespa'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'
import fondoPag from "../assets/fondoInicio.jpg"
import { useNavigation } from '@react-navigation/native';
import BotonOne from "../components/BotonOne";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Teclado from '../components/Teclado';
import { AntDesign } from '@expo/vector-icons';
import SelectList from 'react-native-dropdown-select-list'
import { crearEdficiosAdmin, traerEspacios } from '../servicios/crearEdificioService'
import MultiSelect from 'react-native-multiple-select';
import EspaciosListItem from "../components/EspaciosListItem"
import InicioAdmin from './InicioAdmin';
import {
  useFonts,
  Kanit_200ExtraLight,
} from '@expo-google-fonts/kanit';

let kanitLoaded

const CrearEdificio = ({ navigation }) => {
  kanitLoaded = useFonts({
    Kanit_200ExtraLight,
  });

  const [pileta, setPileta] = useState(false);
  const [terraza, setTerraza] = useState(false);
  const [cochera, setCochera] = useState(false);

  
  const [userState, setUserState] = useState({
    direccion: '',
    año_construccion: null,
    cuit: null,
    clave_suterh: null,
    nro_encargado: null,
    nro_emergencia: null,
    id_espaciocc: []
  });

  
/*const click = () =>{
  if (pileta === true){
    userState.id_espaciocc.push(1)
  }
  if (terraza === true){
    userState.id_espaciocc.push(2)
  }
  if (cochera === true){
    userState.id_espaciocc.push(3)
  }
  Alert.alert("seleccionados" + userState.id_espaciocc)
}*/
  
  /*useEffect(() => {
    console.log('Opciones', Opciones.lista);
  }, [Opciones])*/



 

  /*useEffect(() => {
    (async () => {
      await getEspaciosComunes()
    })()
  }, [])*/

  /*const getEspaciosComunes = async (e) => {
    await traerEspacios().then((response) => {
      console.log(response)
      setOpciones({lista: response.map(esp => esp.tipo_espacio)});
    }).catch(() => {
      console.log("error en espacios comunes")
    });
  }*/

  const onCreatePress = async (e) => {
    if (!userState.direccion || !userState.año_construccion || !userState.cuit || !userState.clave_suterh) {
      Alert.alert("Por favor ingresar todos los datos")
    }
    else {
      console.log(userState)
      
      if (pileta === true){
        userState.id_espaciocc.push(1)
      }
      if (terraza === true){
        userState.id_espaciocc.push(2)
      }
      if (cochera === true){
        userState.id_espaciocc.push(3)
      }
      
    
      await crearEdficiosAdmin(userState).then(() => {
        navigation.navigate('Firstscreendepto')
      })
        .catch(() => {

          Alert.alert("Datos repetidos")
        });
    }
  }

  return (
    <ImageBackground source={fondoPag}>
      <Teclado>
        <View style={styles.vista}>
          <AntDesign style={styles.flecha} name="left" size={15} />
          <Text style={styles.atras}
          onPress={() => {
            navigation.navigate('InicioAdmin')
          }}>
          Volver atrás
        </Text>
          <Image style={styles.logo} source={miED}></Image>
          <Text style={styles.titulo}>Nuevo Edificio</Text>

          

          <TextInput
            style={styles.textInput}
            placeholder="Ingrese la direccion"
            name="direccion"
            value={userState.direccion}
            onChangeText={text => setUserState({ ...userState, direccion: text })}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Ingrese año de construccion"
            name="año_construccion"
            value={userState.año_construccion}
            onChangeText={number => setUserState({ ...userState, año_construccion:  Number(number) })}
            keyboardType="numeric"
          />

          <TextInput
            style={styles.textInput}
            placeholder="Ingrese el CUIT"
            name="cuit"
            value={userState.cuit}
            onChangeText={number => setUserState({ ...userState, cuit: Number(number) })}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Ingrese la clave Suterh"
            name="clave_suterh"
            value={userState.clave_suterh}
            onChangeText={number => setUserState({ ...userState, clave_suterh:  Number(number) })}
            keyboardType="numeric"
          />

          <TextInput
            style={styles.textInput}
            placeholder="Ingrese el numero de encargado"
            name="nro_encargado"
            value={userState.nro_encargado}
            onChangeText={number => setUserState({ ...userState, nro_encargado:  Number(number) })}
            keyboardType="numeric"
          />

          <TextInput
            style={styles.textInput}
            placeholder="Ingrese el numero de emergencia"
            name="nro_emergencia"
            value={userState.nro_emergencia}
            onChangeText={number => setUserState({ ...userState, nro_emergencia:  Number(number) })}
            keyboardType="numeric"
          />

        

    
            <BouncyCheckbox
                size={25}
                fillColor="blue"
                unfillColor="white"
                text="PILETA"
                iconStyle={{ borderColor: "red" }}
                iconInnerStyle={{ borderWidth: 2 }}
                textStyle={{ color:'white' }}
                value={pileta}
                onPress={()=>setPileta(!pileta)}
                
          />

            <BouncyCheckbox
                size={25}
                fillColor="blue"
                unfillColor="white"
                text="TERRAZA"
                iconStyle={{ borderColor: "red" }}
                iconInnerStyle={{ borderWidth: 2 }}
                textStyle={{ color:'white' }}
                value={terraza}
                onPress={()=>setTerraza(!terraza)}
                
          />

            <BouncyCheckbox
                size={25}
                fillColor="blue"
                unfillColor="white"
                text="COCHERA"
                iconStyle={{ borderColor: "red" }}
                iconInnerStyle={{ borderWidth: 2 }}
                textStyle={{ color:'white' }}
                value={cochera}
                onPress={()=>setCochera(!cochera)}
                
          />

          <BotonOne
            text="Crear edificio"
            onPress={onCreatePress}
            
          />
        </View>
      </Teclado>
    </ImageBackground>
  );

  
  
}

export default CrearEdificio

const styles = StyleSheet.create({
  logo: {
    width: '70%',
    height: '22%',
    marginTop: 115
  },
  vista: {
    height: 1000,
    alignItems: 'center',
  },
  titulo: {
    textAlign: 'center',
    marginBottom: 20,
    color: 'blue',
    fontSize: 25,
    fontFamily: 'Kanit-Regular'
  },
  textInput: {
    borderWidth: 1,
    padding: 15,
    width: "80%",
    borderRadius: 8,
    backgroundColor: "white",
    marginTop: 10
  },
  atras: {
    position: 'absolute',
    top: '7%',
    left: '15%',
    color: 'blue',
    textDecorationLine: 'underline'
  },
  flecha: {
    position: 'absolute',
    top: '7.3%',
    left: '10%',
    color: "blue"
  },
});
