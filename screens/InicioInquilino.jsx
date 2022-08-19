import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, Alert} from 'react-native';
import miED from "../assets/logoMI.png";
import fondoPag from "../assets/fondoInicio.jpg"
import { useNavigation } from '@react-navigation/native';
import BotonOne from "../components/BotonOne";
import { AntDesign } from '@expo/vector-icons';
import Teclado from '../components/Teclado';
import {departamentologin} from '../servicios/miEdificioService'


const InicioInquilino =({navigation})=>{
  



  const [userState, setUserState] = useState({
  
    codigo: '',
   
  });
  
  
  const onEnterPress = async (e) => {
    if (!userState.codigo) {
      Alert.alert("Por favor ingresar todos los datos")
    }
    else {
      console.log(userState)
      await departamentologin (userState).then(() => {
        console.log(userState)
        navigation.navigate('Firstscreendepto', {cod: userState.codigo})
      })
        .catch(() => {
  
          Alert.alert("Su departamento no existe")
        });
    }
  }
  


  return (
    <Teclado>
    <View style={{height:900}}>
      <ImageBackground source={fondoPag} style={styles.image}>
      <AntDesign style={styles.flecha} name="left" size={15}/>
      <Text style={styles.atras}
          onPress={ () =>{
            navigation.navigate('Home')
          }}> 
          Volver atrás
      </Text>
      <Image style={styles.logo} source={miED}></Image>

      <Text style={styles.titulo}>Bienvenido Usuario</Text>
      <TextInput
            style={styles.textInput}
            placeholder="Ingrese el código de un departamento"
            name="codigo"
            
            value={userState.codigo}
            onChangeText={text => setUserState({ ...userState, codigo: text })}
          />
          
      <BotonOne
        text="Ingresar" 
        onPress={onEnterPress}
      />
      </ImageBackground>
    </View>
    </Teclado>
    
  );
}

export default InicioInquilino

const styles = StyleSheet.create({
  logo: {
    width: '70%',
    height: '22%',
    marginTop:200
  },
  image: {
    alignItems: 'center',
    resizeMode:"cover",
    height:'100%'
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
    backgroundColor: "#fff",
    marginTop: 15,
    marginBottom: -5
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
  }
});
