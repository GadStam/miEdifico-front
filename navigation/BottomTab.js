import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Firstscreendepto from '../screens/mainscreensdepartamento/Firstscreendepto';
import Home from '../screens/Home';
import Expensas from '../screens/mainscreensdepartamento/Expensas';
import Calendario from '../screens/mainscreensdepartamento/Calendario'
import Inconvenientes from '../screens/mainscreensdepartamento/Inconvenientes';
import Contacto from '../screens/mainscreensdepartamento/Contacto';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwasome5 from 'react-native-vector-icons/FontAwesome5'
import Reservas from '../screens/mainscreensdepartamento/Reservas';
import Schedule from '../screens/mainscreensdepartamento/Agenda';
import { View, StyleSheet } from 'react-native';
import { Link } from '@react-navigation/native';

const Tab = createBottomTabNavigator()

const BottomTab = () => {
    return (
        <View style={styles.mainView}>
            <Link to={"/Inconvenientes"}>
                <Ionicons name='warning-outline' size={30} />
            </Link>
            
            <Link to={"/Expensas"}>

                <FontAwasome5 name='coins' size={30} />
            </Link>

            <Link to={"/Firstscreendepto"}>

                <Ionicons name='home-outline' size={30} />
            </Link>

            <Link to={"/Schedule"}>

                <Ionicons name='calendar-outline' size={30} />
            </Link>

            <Link to={"/Contacto"}>

                <Ionicons name='people' size={30} />
            </Link>
        </View>
    )
}
export default BottomTab;

const styles = StyleSheet.create({
    mainView: {
        color: 'blue',
        fontSize: 18,
        fontFamily: 'Kanit-Regular',
        flexDirection: "row",
        justifyContent:"space-around",
        backgroundColor: "white",
        paddingVertical: "3%",
        position: "absolute",
        bottom: 0,
        width:"100%"
    },
});