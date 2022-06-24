import React, {useState, useEffect, useContext} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, FlatList, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import miED from "../../assets/logoMI2.png";
import fondoPag from "../../assets/fondoInicio.jpg"
import { useNavigation } from '@react-navigation/native';
import BotonOne from "../../components/BotonOne";
import axios from 'axios';
import Teclado from '../../components/Teclado';
import { AntDesign } from '@expo/vector-icons';
import { AuthContext } from '../../context/AuthContext';
import { registerAsset } from 'react-native-web/dist/cjs/modules/AssetRegistry';
import Spinner from 'react-native-loading-spinner-overlay/lib';



const RegistroAdmin =({navigation})=>{
  const [nombre, setNombre] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const {isLoading, register}= useContext(AuthContext);




  return (
    <Teclado>
    <View style={{height:900}}>
    <Spinner visible= {isLoading}/>
        <ImageBackground source={fondoPag} style={styles.image}>
        <AntDesign style={styles.flecha} name="left" size={15}/>
        <Text style={styles.atras}
          onPress={ () =>{
            navigation.navigate('Home')
          }}> 
          Volver atrás
        </Text>
        
        <Image style={styles.logo} source={miED}></Image>
        
  
        <Text style={styles.titulo}>Inicio de sesión</Text>
        
        <Text>{val} </Text>


        <TextInput
            style={styles.textInput}
            placeholder="Nombre"
            name="Nombre"
            value={nombre}
            secureTextEntry={true}
            onChangeText={text => setNombre(text) }
          />   

        <TextInput
            style={styles.textInput}
            
            placeholder="Usuario"
            name="usuario"
            value={email}
            onChangeText={text => setEmail(text) }
          
          />
          
          <TextInput
            style={styles.textInput}
            placeholder="Contraseña"
            name="contrasena"
            value={password}
            secureTextEntry={true}
            onChangeText={text => setPassword(text) }
          />   
          
          <BotonOne
            text="Registrarse" 
            title="register"
            onPress={ () =>{register(nombre, email, password)}}
            />
            
            
            
            </ImageBackground>
           
        </View>
        </Teclado>
  );
}

export default RegistroAdmin

const styles = StyleSheet.create({
  logo: {
    width: '70%',
    height: '22%',
    marginTop: 200
  },
  image: {
    alignItems: 'center',
    resizeMode:"cover",
    height:'100%',
  },
  titulo: {
    textAlign: 'center',
    marginBottom: 20,
    color: 'blue',
    fontSize:25,
    fontFamily: 'Kanit-Regular'
  },
  texto:{
    marginTop:'-25%',
    color: 'white'
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
