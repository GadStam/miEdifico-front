import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, FlatList, TextInput} from 'react-native';
import miED from "../../assets/logoMI2.png";
import fondoPag from "../../assets/fondoInicio.jpg"
import { useNavigation } from '@react-navigation/native';
import BotonOne from "../../components/BotonOne";
import axios from 'axios';






const LogInAdministrador =({navigation})=>{
  
    const [data, setData] = useState({ 
        usuario: undefined,
        contrasena: undefined,
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
 

  return (
    
    <View>
      <ImageBackground source={fondoPag} style={styles.image}>
      <Image style={styles.logo} source={miED}></Image>

      

      <TextInput
          style={styles.textInput}
          placeholder="usuario"
          name="usuario"
          onChange={(e) => onChangeInput(e, "usuario")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="contraseña"
          name="contrasena"
          onChange={(e) => onChangeInput(e, "contrasena")}
        />







       
<BotonOne
        text="Crear edificio" 
        onPress={registrar}
      />

      </ImageBackground>
    </View>
    
  );
}

export default LogInAdministrador

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
    marginTop: 30,
  
  },
});
