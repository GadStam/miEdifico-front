import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, FlatList } from 'react-native';
import miED from "../assets/logoMI.png";
import fondoPag from "../assets/fondoInicio.jpg"
import { useNavigation } from '@react-navigation/native';
import BotonOne from "../components/BotonOne";
import EdificiosListItem from "../components/EdificiosListItem"
import axios from 'axios';
import { AntDesign } from '@expo/vector-icons';
import { traerNombre, traerEdficios } from '../servicios/misDepartamentosService.js';
import Girador from '../components/girador'
import AxiosClient from '../servicios/miEdificioClient'

const InicioAdmin = ({ navigation }) => {

  const [edificio, setEdificio] = useState();
  const [nombreAdmin, setNombreAdmin] = useState("");
  const [loaded, setLoaded] = useState(true)

  const getNombreAdmin = async (e) => {
    setLoaded(true)
    await traerNombre().then((response) => {
      setLoaded(true)
      setNombreAdmin(response);
      console.log("la respuesta es", response)
    }).catch(() => {
      console.log("no hay nombre")

    });
  }

  const getEdificioAdmin = async () => {
    setLoaded(true)
    await traerEdficios().then((response) => {
      console.log("aca trae edificios")
      setLoaded(true)
      setEdificio(response);
    }).catch((error) => {
      console.log("no hay edificios")
      console.log(error)
    });
  }

  useEffect(() => {
    (async () => {
      await getEdificioAdmin()
      await getNombreAdmin()
    })()
  }, [])

  return (
    <>
      {!loaded ? <Girador /> :
        <View>
          <ImageBackground source={fondoPag} style={styles.image}>
            <AntDesign style={styles.flecha} name="left" size={15} />
            <Text style={styles.atras}
              onPress={() => {
                navigation.navigate('Home')
              }}>
              Volver atrás
            </Text>
            <Image style={styles.logo} source={miED}></Image>

            <Text style={styles.titulo}>{nombreAdmin && `Bienvenido ${nombreAdmin}`}</Text>
            <Text style={styles.texto}>Entrar a un edificio existente:</Text>

            <FlatList
              data={edificio}
              renderItem={({ item }) => <EdificiosListItem key={item.direccion} edificio={item} />}
              keyExtractor={item => item.direccion}
            />

            <BotonOne
              text="Crear nuevo edificio"
              onPress={() => {
                navigation.navigate('CrearEdificio')
              }}
            />
          </ImageBackground>
        </View>
      }
    </>

  );
}

export default InicioAdmin

const styles = StyleSheet.create({
  logo: {
    width: '70%',
    height: '22%',
    marginTop: 200
  },
  image: {
    alignItems: 'center',
    resizeMode: "cover",
    height: '100%'
  },
  titulo: {
    textAlign: 'center',
    marginBottom: 15,
    color: 'blue',
    fontSize: 25,
    fontFamily: 'Kanit-Regular'
  },
  texto: {
    fontSize: 25,
    color: 'blue',
    marginBottom: 15,
    alignContent: 'flex-end',
    fontFamily: 'Kanit-Regular'
  },
  atras: {
    position: 'absolute',
    top: '7%',
    left: '15%',
    color: 'blue',
    textDecorationLine: 'underline'
  },
  flecha: {
    position: 'absolute',
    top: '7.3%',
    left: '10%',
    color: "blue"
  }
});
