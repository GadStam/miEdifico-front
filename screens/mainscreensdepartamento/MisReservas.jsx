import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, SafeAreaView, TextInput, Alert, FlatList } from 'react-native';
import fondoPag from "../../assets/fondoInicio.jpg"
import { AntDesign } from '@expo/vector-icons';
import Teclado from '../../components/Teclado';
import { Avatar, Card } from 'react-native-paper';
import {
    useFonts,
    Kanit_200ExtraLight,
} from '@expo-google-fonts/kanit';
import Boton from '../../components/BotonDoble';
import LoggedLayout from '../../components/LoggedLayout';
import { traerEventosPorDepto } from '../../servicios/eventoService';
import EventosListItem from '../../components/EventosListItem';


let kanitLoaded

const MisReservas = ({ navigation, route }) => {
    kanitLoaded = useFonts({
        Kanit_200ExtraLight,
    });
    const [loaded, setLoaded] = useState(true)
    const [Eventos, setEventos] = useState("");
    

    const getEventosPorDepto = async (e) => {
        setLoaded(true)
        
        await traerEventosPorDepto().then((response) => {
          setLoaded(true)
          setEventos(response);
          console.log("la can de eventos es:", Eventos.length)
          console.log("Los eventos son", response)
        }).catch(() => {
          console.log("este error es el de traer eventos")
          
    
        });
      }
    
      useEffect(() => {
        (async () => {
          await getEventosPorDepto()
        })()
      }, [])

    return (
        <LoggedLayout>
            <View >
                <View style={styles.vista}>
                    <AntDesign style={styles.flecha} name="left" size={15} />
                    <Text style={styles.atras}
                        onPress={() => {
                            navigation.navigate('Schedule')
                        }}>
                        Volver atrás
                    </Text>
                    <Text style={styles.text}>Mis Reservas</Text>
                    {
                        Eventos.length > 1
                    ? 
                    <FlatList
                    data={Eventos}
                    renderItem={({ item }) => <EventosListItem key={item.nombre_evento} Eventos={item} />}
                    keyExtractor={item => item.nombre_evento}
                    />
                    :

                <Card style={styles.noEvento}>
                    <Card.Content style={{ alignItems:'center'}}>
                    <Text >Aún no hay eventos</Text>
                       
                    </Card.Content>
                </Card>

                    
                    }
                    
                    

                </View>
            </View>
        </LoggedLayout>

    );
}

export default MisReservas

const styles = StyleSheet.create({
    vista: {
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        marginBottom: 20,
        color: 'blue',
        fontSize: 25,
        fontFamily: 'Kanit-Regular',
        marginTop: '20%'
    },
    texto: {
        color: 'black',
        width: "80%",
        textAlign: "justify",
        fontFamily: 'Kanit-Regular',
        marginBottom: '5%'
    },
    textInput: {
        borderWidth: 1,
        padding: 15,
        width: "80%",
        borderRadius: 8,
        backgroundColor: "white",
        marginTop: 10
    },
    titulo: {
        top: 18,
        color: 'blue',
        fontSize: 18,
        fontFamily: 'Kanit-Regular',
    },
    atras: {
        position: 'absolute',
        top: 33,
        left: '15%',
        color: 'blue',
        textDecorationLine: 'underline'
    },
    flecha: {
        position: 'absolute',
        top: 35.7,
        left: '10%',
        color: "blue"
    },
    boxes: {
        width: '80%',
        textAlign: "left",
        fontFamily: 'Kanit-Regular',
        marginBottom: '3%',
    },
    noEvento:{
        height: '30%',
        marginTop: '5%',
        width: '80%',
        paddingVertical: '3%'
    }
});