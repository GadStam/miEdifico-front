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

const Home =({navigation})=>{
 kanitLoaded = useFonts({
    Kanit_200ExtraLight,
  });

  const [data, setData] = useState({ 
    direccion: undefined,
    añoConstruccion: undefined,
    cuit: undefined,
    claveSuterh: undefined,
  });

  const onChangeInput = (e, name) => {
    setData({
      ...data,
      [name]: e.nativeEvent.text,
    });
  };

  const registrar = () => {
    console.log(data);
  };

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
          onChange={(e) => onChangeInput(e, "direccion")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Ingrese año de construccion"
          name="añoConstruccion"
          onChange={(e) => onChangeInput(e, "añoConstruccion")}
          keyboardType= "numeric"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Ingrese el CUIT"
          name="cuit"
          onChange={(e) => onChangeInput(e, "cuit")}
          keyboardType= "numeric"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Ingrese la clave Suterh"
          name="claveSuterh"
          onChange={(e) => onChangeInput(e, "claveSuterh")}
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

export default Home

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
