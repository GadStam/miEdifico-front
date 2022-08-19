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

const Tab = createBottomTabNavigator()

const BottomTab = () => {
    return (
        <Tab.Navigator
            initialRouteName="FirstScreendepto"
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: { height: 60 },
                tabBarInactiveTintColor: 'black',
                tabBarActiveTintColor: 'yellow',

            }}>
            <Tab.Screen name="Inconvenientes" component={Inconvenientes} options={{
                tabBarIcon: () => (
                    <Ionicons name='warning-outline' size={30} />
                )
            }}
            />
            <Tab.Screen name="Expensas" component={Expensas} options={{
                tabBarIcon: () => (
                    <FontAwasome5 name='coins' size={30} />
                )
            }}
            />
            <Tab.Screen name="FirstScreendepto" component={Firstscreendepto} options={{
                tabBarIcon: () => (
                    <Ionicons name='home-outline' size={30} />
                )
            }}
            />
            <Tab.Screen name="Calendario" component={Calendario} options={{
                tabBarIcon: () => (
                    <Ionicons name='calendar-outline' size={30} />
                )
            }}
            />
            <Tab.Screen name="Contacto" component={Contacto} options={{
                tabBarIcon: () => (
                    <Ionicons name='people' size={30} />
                )
            }}
            />
            <Tab.Screen name="Reservas" component={Reservas} 
            />


        </Tab.Navigator>
    )
}
export default BottomTab;