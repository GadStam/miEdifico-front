import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, TextInput, Checkbox, Alert, FlatList } from 'react-native';
import miED from "../assets/logoMI.png";
import Laseleccion from '../components/multiselectespa'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'
import fondoPag from "../assets/fondoInicio.jpg"
import { useNavigation } from '@react-navigation/native';
import BotonOne from "../components/BotonOne";
import Teclado from '../components/Teclado';
import { AntDesign } from '@expo/vector-icons';
import SelectList from 'react-native-dropdown-select-list'
import { crearEdficiosAdmin, traerEspacios } from '../servicios/crearEdificioService'
import MultiSelect from 'react-native-multiple-select';
import EspaciosListItem from "../components/EspaciosListItem"
import {
  useFonts,
  Kanit_200ExtraLight,
} from '@expo-google-fonts/kanit';

let kanitLoaded

const CrearEdificio = ({ navigation }) => {
  kanitLoaded = useFonts({
    Kanit_200ExtraLight,
  });

  const [selected, setSelected] = React.useState("");

  const prueba = [
    { key: '1', value: 'Jammu & Kashmir' },
    { key: '2', value: 'Himachal Pradesh' },
    { key: '3', value: 'West Bengal' },
  ];


  const [userState, setUserState] = useState({
    direccion: '',
    año_construccion: '',
    cuit: null,
    clave_suterh: null,
    nro_encargado: null,
    nro_emergencia: null,
    id_espaciocc: [1]
  });

  const [Opciones, setOpciones] = useState();


  useEffect(() => {
    (async () => {
      await getEspaciosComunes()
    })()
  }, [])

  const getEspaciosComunes = async (e) => {
    await traerEspacios().then((response) => {
      setOpciones(response);
      
    }).catch(() => {
      console.log("error en espacios comunes")
    });
  }

  const onCreatePress = async (e) => {
    if (!userState.direccion || !userState.año_construccion || !userState.cuit || !userState.clave_suterh) {
      Alert.alert("Por favor ingresar todos los datos")
    }
    else {
      console.log(userState)
      await crearEdficiosAdmin(userState).then(() => {
        navigation.navigate('SelectAutoManual')
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
              navigation.navigate('Home')
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
            onChangeText={number => setUserState({ ...userState, año_construccion: number })}
            keyboardType="numeric"
          />

          <TextInput
            style={styles.textInput}
            placeholder="Ingrese el CUIT"
            name="cuit"
            value={userState.cuit}
            onChangeText={number => setUserState({ ...userState, cuit: number })}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Ingrese la clave Suterh"
            name="clave_suterh"
            value={userState.clave_suterh}
            onChangeText={number => setUserState({ ...userState, clave_suterh: number })}
            keyboardType="numeric"
          />

          <TextInput
            style={styles.textInput}
            placeholder="Ingrese el numero de encargado"
            name="nro_encargado"
            value={userState.nro_encargado}
            onChangeText={number => setUserState({ ...userState, nro_encargado: number })}
            keyboardType="numeric"
          />

          <TextInput
            style={styles.textInput}
            placeholder="Ingrese el numero de emergencia"
            name="nro_emergencia"
            value={userState.nro_emergencia}
            onChangeText={number => setUserState({ ...userState, nro_emergencia: number })}
            keyboardType="numeric"
          />

        <Text>{Opciones && `Bienvenido ${Opciones[1].tipo_espacio}`}</Text>

        
          {/* 
          
      <View style={{ height: 40 }} />
      <Text style={{ fontSize: 20, paddingBottom: 10 }}>MultiSelect Demo</Text>
      <SelectBox
        label="Select multiple"
        options={K_OPTIONS}
        selectedValues={selectedTeams}
        onMultiSelect={onMultiChange()}
        onTapClose={onMultiChange()}
        isMulti
      />
        */}

          <View style={{ width: "80%" }}>
            {/*<SelectList
              data={Opciones}
              //renderItem={({ item }) => <EspaciosListItem key={item.tipo_espacio} useOpciones={item} />}
              keyExtractor={Opciones => Opciones.tipo_espacio}
              setSelected={selected}
              placeholder="¿Qué espacios comúnes tiene el edificio?"
              boxStyles={{
                borderWidth: 1,
                borderColor: "black",
                padding: 15,
                borderRadius: 8,
                backgroundColor: "white",
                marginTop: 10,
                alignItems: "center"
              }}

              inputStyles={{
                marginTop: 5,
                marginBottom: 5
              }}
              dropdownStyles={{
                borderWidth: 1,
                borderRadius: 8,
                backgroundColor: "white",
                marginTop: 10,
                borderColor: "black",
              }}

              maxHeight={150}
            />
            */}
          </View>

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
