
  import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, FlatList} from 'react-native';
import miED from "../assets/logoMI2.png";
import fondoPag from "../assets/fondoInicio.jpg"
import { useNavigation } from '@react-navigation/native';
import BotonOne from "../components/BotonOne";
import EdificiosListItem from "../components/EdificiosListItem"
import axios from 'axios';






const InicioAdmin =({navigation})=>{
  
  const [edificios, setEdificio] = useState([])

  useEffect(() => {
    fetchData()
  }, [])
  
  const fetchData = async() => {
    const response = await fetch("http://localhost:5000/edificios/?mail=VFiszer&contrase%C3%B1a=Eitan123")
    const json= await response.json();
    console.log(json);
    setEdificio([json])
    //axios.post('/asdasd', {headers: {Authorization: 'Bearer <TOKEN>'}})
  }

  return (
    
    <View>
      <ImageBackground source={fondoPag} style={styles.image}>
      <Image style={styles.logo} source={miED}></Image>

      <Text style={styles.titulo}>Bienvenido NombreAdmin</Text>
      <Text style={styles.texto}>Entrar a un edificio existente:</Text>

      <FlatList
        data={edificios}
        renderItem={({item}) => <EdificiosListItem key={item.Id_Edificio} edificio={item} />}
        keyExtractor={item => item.Id_Edificio}
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
    height: '25%',
    marginTop:100
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
    
  }
});
