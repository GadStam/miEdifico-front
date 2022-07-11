import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, TextInput} from 'react-native';
import miED from "../assets/logoMI.png";
import fondoPag from "../assets/fondoInicio.jpg"
import { useNavigation } from '@react-navigation/native';
import BotonOne from "../components/BotonOne";
import Teclado from '../components/Teclado';
import { AntDesign } from '@expo/vector-icons';
import SelectList from 'react-native-dropdown-select-list'
import {
  useFonts,
  Kanit_200ExtraLight,
} from '@expo-google-fonts/kanit';
 
let kanitLoaded

const CrearEdificio =({navigation})=>{
 kanitLoaded = useFonts({
    Kanit_200ExtraLight,
  });

  
  const [userState, setUserState] = useState({
    direccion: undefined,
    añoConstruccion: undefined,
    cuit: undefined,
    claveSuterh: undefined,
  });



  const [selected, setSelected] = React.useState("");
  const prueba = [
    {key:'1',value:'Jammu & Kashmir'},
    {key:'2',value:'Himachal Pradesh'},
    {key:'3',value:'West Bengal'},
    ];
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
      <Text style={styles.titulo}>Nuevo Edificio</Text>
      
      <TextInput
          style={styles.textInput}
          placeholder="Ingrese la direccion"
          name="direccion"
          value={userState.direccion}
          onChangeText={text => setUserState({...userState, direccion: text}) }
        />


        <TextInput
          style={styles.textInput}
          placeholder="Ingrese año de construccion"
          name="añoConstruccion"
          value={userState.añoConstruccion}
          onChangeText={text => setUserState({...userState, añoConstruccion: number}) }
          keyboardType= "numeric"
        />

        <TextInput
          style={styles.textInput}
          placeholder="Ingrese el CUIT"
          name="cuit"
          value={userState.cuit}
          onChangeText={text => setUserState({...userState, cuit: number}) }
          keyboardType= "numeric"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Ingrese la clave Suterh"
          name="claveSuterh"
          value={userState.claveSuterh}
          onChangeText={text => setUserState({...userState, claveSuterh: number}) }
          keyboardType= "numeric"
        />
          <View style={{width:"80%"}}>
          <SelectList
            data={prueba}
            setSelected={setSelected} 
            placeholder="¿Qué espacios comúnes tiene el edificio?"
            boxStyles={{
              borderWidth: 1,
              borderColor: "black",
              padding: 15,
              borderRadius: 8,
              backgroundColor: "white",
              marginTop: 10,
              alignItems:"center"
            }}
            
            inputStyles={{
              marginTop:5,
              marginBottom:5
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

          </View>

        <BotonOne
        text="Crear edificio" 
        onPress={registrar}
        />

      </ImageBackground>
      
    </View>
    </Teclado>
  );
}

export default CrearEdificio

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
