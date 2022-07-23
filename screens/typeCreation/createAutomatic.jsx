import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, TextInput} from 'react-native';
import miED from "../../assets/logoMI.png";
import fondoPag from "../../assets/fondoInicio.jpg"
import { useNavigation } from '@react-navigation/native';
import BotonOne from "../../components/BotonOne";
import Teclado from '../../components/Teclado';
import { AntDesign } from '@expo/vector-icons';
import SelectList from 'react-native-dropdown-select-list'
import {crearDepartamentos} from '../../servicios/createDepartamentos'
import {
  useFonts,
  Kanit_200ExtraLight,
} from '@expo-google-fonts/kanit';
 
let kanitLoaded

const CreateAutomatic =({navigation})=>{
 kanitLoaded = useFonts({
    Kanit_200ExtraLight,
  });

  
  const [userState, setUserState] = useState({
   
    cant_pisos: null,
    departamentosXpiso: null,

  });

 

  const onCreatePress = async (e) => {
    if (!userState.cant_pisos || !userState.departamentosXpiso){
      Alert.alert("Por favor ingresar todos los datos")
    } 
    else {
      await crearDepartamentos(userState).then(() => {
        navigation.navigate('selectAutoManual')
      })
      .catch(() => {
      
      Alert.alert("Datos repetidos")
      });
    }
  }




  return (
    <Teclado>
    <View style={{height:1000}}>
   
      <ImageBackground source={fondoPag} style={styles.image}>
      <AntDesign style={styles.flecha} name="left" size={15}/>
      <Text style={styles.atras}
          onPress={ () =>{
            navigation.navigate('InicioAdmin')
          }}> 
          Volver atrás
      </Text>
      <Image style={styles.logo} source={miED}></Image>
      <Text style={styles.titulo}>CREAR EDIFICIO AUTOMATICO</Text>
      

        <TextInput
          style={styles.textInput}
          placeholder="Ingrese la canstidad de pisos"
          name="cant_pisos"
          value={userState.cant_pisos}
          onChangeText={number => setUserState({...userState, cant_pisos: number}) }
          keyboardType= "numeric"
        />

        <TextInput
          style={styles.textInput}
          placeholder="Ingrese la cantidad de departamentos por piso"
          name="departamentosXpiso"
          value={userState.departamentosXpiso}
          onChangeText={number => setUserState({...userState, departamentosXpiso: number}) }
          keyboardType= "numeric"
        />
       



        <BotonOne
        text="Siguiente" 
        onPress={onCreatePress}
        />

      </ImageBackground>
      
    </View>
    </Teclado>
  );
}

export default CreateAutomatic

const styles = StyleSheet.create({
  logo: {
    width: '70%',
    height: '22%',
    marginTop:115
  },
  image: {
    flex:1,
    alignItems: 'center', 
  },
  titulo: {
    textAlign: 'center',
    marginBottom: 20,
    color: 'blue',
    fontSize:25,
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
  atras:{
    position: 'absolute',
    top:'7%',
    left:'15%',
    color: 'blue',
    textDecorationLine:'underline'
  },
  flecha:{
    position: 'absolute',
    top:'7.3%',
    left:'10%',
    color:"blue"
  },
});
