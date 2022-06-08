
  import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, FlatList} from 'react-native';
import miED from "../assets/logoMI2.png";
import fondoPag from "../assets/fondoInicio.jpg"
import { useNavigation } from '@react-navigation/native';
import BotonOne from "../components/BotonOne";
import EdificiosListItem from "../components/EdificiosListItem"






const InicioAdmin =({navigation})=>{
  
  const [edificios, setEdificio] = useState("https://www.breakingbadapi.com/api/characters/")

  useEffect(() => {
    fetchData()
  }, [])
  
  const fetchData = async() => {
    const response = await fetch("https://www.breakingbadapi.com/api/characters/")
    const json= await response.json();
    console.log(json);
    setEdificio(json)
  }

  return (
    
    <View>
      <ImageBackground source={fondoPag} style={styles.image}>
      <Image style={styles.logo} source={miED}></Image>

      <Text style={styles.titulo}>Bienvenido NombreAdmin</Text>
      
      <FlatList 
      data={edificios}
      renderItem={({item}) => <EdificiosListItem edificio={item} />}
      keyExtractor={item => item.id}
      />
      
     
      
      
      <BotonOne
      text="Crear nuevo edificio" 
      onPress={ () =>{
        navigation.navigate('InicioAdmin')
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
    position: 'absolute',
    top: '20%',
    left:'15%',
  },
  image: {
    alignItems: 'center',
    resizeMode:"cover",
    height:'100%'
  },
  titulo: {
    textAlign: 'center',
    position: 'absolute',
    top: '45%',
    left:'15%',
    right: '15%',
    color: 'blue',
    fontSize:20
  },
  texto: {
    textAlign: 'left',
    position: 'absolute',
    fontSize: 20,
    left: '15%',
    top: '50%',
    color: 'blue',
  },
  margen:{
    position: 'absolute',
    top: '57%',
    fontWeight:'bold',
    left: '15%',
  },
  margen2: {
    position: 'absolute',
    top: '62%',
    fontWeight:'bold',
    left: '15%',
  }
});
