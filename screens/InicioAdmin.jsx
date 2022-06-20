import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, FlatList} from 'react-native';
import miED from "../assets/logoMI2.png";
import fondoPag from "../assets/fondoInicio.jpg"
import { useNavigation } from '@react-navigation/native';
import BotonOne from "../components/BotonOne";
import EdificiosListItem from "../components/EdificiosListItem"
import axios from 'axios';
import { AntDesign } from '@expo/vector-icons';

const InicioAdmin =({navigation})=>{
  
  const [edificio, setEdificio] = useState();
  const [text, setText] = useState("")

    //axios.post('/asdasd', {headers: {Authorization: 'Bearer <TOKEN>'}})

    useEffect(() => {
      console.log('text', text)
    },[text])

    useEffect(() => {
      axios
          .get("http://localhost:5000/edificios/?mail=VFiszer&contrase%C3%B1a=Eitan123")
          .then((response) => {
            console.log(response.data)
              setEdificio(response.data);
          });
    }, [])

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

      <Text style={styles.titulo}>Bienvenido NombreAdmin</Text>
      <Text style={styles.texto}>Entrar a un edificio existente:</Text>
      {
        edificio &&
        edificio.map(edi => {
          return <Text key={edi.Id_Edificio}>{edi.Direccion}</Text>
        })
      }     
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
    marginBottom: 20,
    color: 'blue',
    fontSize:25,
    fontFamily: 'Kanit-Regular'
  },
  texto: {
    fontSize:15,
    color:'black',
    marginBottom: 15,
    alignContent:'flex-end'
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
