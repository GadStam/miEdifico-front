import React,{ useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import miED from "../../assets/logoMI.png";
import fondoPag from "../../assets/fondoInicio.jpg"
import Girador from '../../components/girador'
import Card from '../../components/Card';
import BotonOne from '../../components/BotonOne';
import Home from '../Home'
import Inquilino from '../InicioInquilino'
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Calendar, LocaleConfig, Agenda } from 'react-native-calendars';
import { traerEventos } from '../../servicios/miEdificioService';
import {
  useFonts,
  Kanit_200ExtraLight,
} from '@expo-google-fonts/kanit';
import LoggedLayout from '../../components/LoggedLayout';


let kanitLoaded


LocaleConfig.locales['tr'] = {
  monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
  monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
  dayNames: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
  dayNamesShort: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"]
}
LocaleConfig.defaultLocale = 'tr'

const Calendario = ({ navigation }) => {

const [eventos, setEventos] = useState();
const [loaded, setLoaded] = useState(true)
  
const getEventos = async () => {
  setLoaded(true)
  traerEventos().then((response) => {
    console.log("aca trae eventos")
    setLoaded(true)
    setEventos(response);
  }).catch((error) => {
    console.log("no hay eventos")
    console.log(error)
  });
}

useEffect(() => {
  (async () => {
    await getEventos()
  })()
}, [])

  kanitLoaded = useFonts({
    Kanit_200ExtraLight,
  });

  return (
    <LoggedLayout>
    <View>

      {/*<Calendar
        minDate={'2022-08-01'}

      />*/}
      <Schedule />

      <View style={{ alignItems: 'center' }}>
        <BotonOne

          text="Agregar nuevo evento"
          onPress={() => {
            navigation.navigate('Reservas')
          }}
        />
      </View>
      <FlatList
        data={eventos}
        renderItem={({ item }) => <EventosListItem key={item.eventos} eventos={item} />}
        keyExtractor={item => item.eventos}
      />

    </View >
    </LoggedLayout>
  );
}

export default Calendario

const styles = StyleSheet.create({
  titulo: {
    top: 18,
    color: 'blue',
    fontSize: 18,
    fontFamily: 'Kanit-Regular',
  },
  top: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    alignItems: 'center',
    paddingHorizontal: '5%'
  }
});