import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Agenda, DateData, AgendaEntry, AgendaSchedule } from 'react-native-calendars';
import { Avatar, Card } from 'react-native-paper';
import Boton from '../../components/BotonDoble';
import { traerEventos } from '../../servicios/miEdificioService';
import { useNavigation } from '@react-navigation/native';

import {
  useFonts,
  Kanit_200ExtraLight,
} from '@expo-google-fonts/kanit';
import LoggedLayout from '../../components/LoggedLayout';


let kanitLoaded

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};


const Schedule: React.FC = () => {

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

  const [items, setItems] = useState({})
  const navigation = useNavigation()

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);

        if (!items[strTime]) {
          items[strTime] = [];

          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      setItems(newItems)
    }, 1000);
  };
  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}>
        <Card>
          <Card.Content>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text>{item.name}</Text>
              {/* <Text>{item.Fecha}</Text>
              <Text>{item.IdEspacioComun}</Text> */}
              <Avatar.Text label='1' /*poner id edificio*/ />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    )
  }
  return (
    <LoggedLayout>
    <View>
      <View style={styles.agenda}>
        <Agenda
          items={items}
          loadItemsForMonth={loadItems}
          selected={'2017-05-16'}
          renderItem={renderItem}
        />
      </View>
      <View style={{ alignItems: 'center', marginTop: '-15%' }}>

      <Boton
      text="Agregar nuevo evento"
      onPress={() => {
        navigation.navigate('Reservas')
      }}
      />
      <Boton
      text="Ver mis reservas" 
      onPress={ () =>{
        navigation.navigate('MisReservas')
      }}
      />
      </View>
    </View>
    </LoggedLayout>
  )


};
export default Schedule

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
    height: 80,
    alignItems: 'center',
    paddingHorizontal: '5%'
  },
  agenda:{
    height: 540 
  }
});