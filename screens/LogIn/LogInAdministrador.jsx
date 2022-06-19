import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, FlatList, TextInput, TouchableOpacity} from 'react-native';
import miED from "../../assets/logoMI2.png";
import fondoPag from "../../assets/fondoInicio.jpg"
import { useNavigation } from '@react-navigation/native';
import BotonOne from "../../components/BotonOne";
import axios from 'axios';






const LogInAdministrador =({navigation})=>{
  
  constructor(props){
    super(props);
    this.state={
      username='',
      password=''
    };
   }
   
 

  return (
    
    <View>
      <ImageBackground source={fondoPag} style={styles.image}>
      <Image style={styles.logo} source={miED}></Image>

      

      <TextInput
          style={styles.textInput}
          placeholder="usuario"
          name="usuario"
         onChangeText={(text)=>{
            this.setState({email:text});
         }
        }
        />
        <TextInput
          style={styles.textInput}
          placeholder="contraseña"
          name="contrasena"
          secureTextEntry={true}
          onChangeText={(text)=>{
            this.setState({password:text});
         }
        }
        />       
        <TouchableOpacity
            text="Crear edificio" 
            onPress={()=>{
              axios.post('localhost:5000/login/user', {
                username: this.state.email,
                password: this.state.password
              }).then(response=>{
                  console.log(response.data);
              }).catch(error=>{
                console.log(error);
            })
            }}
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
