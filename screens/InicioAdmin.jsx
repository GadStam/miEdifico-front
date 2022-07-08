import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, FlatList} from 'react-native';
import miED from "../assets/logoMI.png";
import fondoPag from "../assets/fondoInicio.jpg"
import { useNavigation } from '@react-navigation/native';
import BotonOne from "../components/BotonOne";
import EdificiosListItem from "../components/EdificiosListItem"
import axios from 'axios';
import { AntDesign } from '@expo/vector-icons';

import {register, traerEdficios} from '../../servicios/miEdificioService.js';


const InicioAdmin =({navigation})=>{
  
  const [edificio, setEdificio] = useState();
  /*/const [text, setText] = useState("")/*/
  const [nombreAdmin, setNombreAdmin] = useState("");
  const [nombreEdificio, setNombreEdificio] = useState("");

  const getNombreAdmin = async (e) => {
    await traerNombre().then(() => {
      setNombreAdmin(response.data);
}
}


  const getEdificioAdmin = async (e) => {
      await traerEdficios().then(() => {
        setNombreEdificio(response.data);
  }
  }

  return (
    
    <View>
      <ImageBackground source={fondoPag} style={styles.image}>
      <AntDesign style={styles.flecha} name="left" size={15}/>
      <Text style={styles.atras}
          onPress={ () =>{
            navigation.navigate('LogInAdministrador')
          }}> 
          Volver atrás
      </Text>
      <Image style={styles.logo} source={miED}></Image>

      <Text style={styles.titulo}>Bienvenido {nombreAdmin}</Text>
      <Text style={styles.texto}>Entrar a un edificio existente:</Text>
      
      <FlatList
        data={edificio}
        renderItem={({item}) => <EdificiosListItem key={item.Id_Edificio} edificio={item} />}
        keyExtractor={item => item.Direccion}
      />
  
      <BotonOne
        text="Crear nuevo edificio" 
        onPress={ () =>{
          navigation.navigate('CrearEdificio')
        }}
      />
      </ImageBackground>
    </View>
    
  );
}

export default InicioAdmin

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
    marginBottom: 15,
    color: 'blue',
    fontSize:25,
    fontFamily: 'Kanit-Regular'
  },
  texto: {
    fontSize:18,
    color:'blue',
    marginBottom: 15,
    alignContent:'flex-end',
    fontFamily: 'Kanit-Regular'
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
