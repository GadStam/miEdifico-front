import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Firstscreendepto from '../screens/mainscreensdepartamento/Firstscreendepto';
import Home from '../screens/Home';
import Expensas from '../screens/mainscreensdepartamento/Expensas';
import Calendario from '../screens/mainscreensdepartamento/Calendario';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwasome5 from 'react-native-vector-icons/FontAwesome5'

const Tab = createBottomTabNavigator()

const BottomTab = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            headerShown:false,
            tabBarStyle:{height:60},
            tabBarInactiveTintColor: 'black',
            tabBarActiveTintColor: 'yellow'
        }}>
            <Tab.Screen name="Inconvenientes" component={Firstscreendepto} options={{
                tabBarIcon: () =>(
                    <Ionicons name='warning-outline' size ={30} />
                )}}        
            />
            <Tab.Screen name="Expensas" component={Expensas} options={{
                tabBarIcon: () =>(
                    <FontAwasome5 name='coins' size ={30} />
                )}}        
            />
            <Tab.Screen name="Firstscreendepto" component={Firstscreendepto} options={{
                tabBarIcon: () =>(
                    <Ionicons name='home-outline' size ={30} />
                )}}        
            />
            <Tab.Screen name="Calendar" component={Calendario} options={{
                tabBarIcon: () =>(
                    <Ionicons name='calendar-outline' size ={30} />
                )}}        
            />
            <Tab.Screen name="Contacto" component={Firstscreendepto} options={{
                tabBarIcon: () =>(
                    <Ionicons name='people' size ={30} />
                )}}        
            />
            

        </Tab.Navigator>
    )
}
export default BottomTab;