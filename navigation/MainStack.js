import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import Home from '../screens/Home'
import { NavigationContainer } from '@react-navigation/native';

import InicioAdmin from '../screens/InicioAdmin'
import InicioInquilino from '../screens/InicioInquilino'
import CrearEdificio from '../screens/CrearEdificio'
import LogInAdministrador from '../screens/LogIn/LogInAdministrador'
import RegistroAdmin from '../screens/LogIn/RegistroAdmin';
import SelectAutoManual from '../screens/SelectAutoManual'
import CreateManual from '../screens/typeCreation/CreateManual'
import CreateAutomatic from '../screens/typeCreation/CreateAutomatic'
const Stack = createNativeStackNavigator()

const MainStack =()=>{
  
return(
<NavigationContainer>
    <Stack.Navigator
    screenOptions={{
        headerShown:false
    }
    }>
        <Stack.Screen
            name='Home'
            component={ Home }
        />
         <Stack.Screen
            name='InicioAdmin'
            component={ InicioAdmin }
        />
         <Stack.Screen
            name='InicioInquilino'
            component={ InicioInquilino }
        />
         <Stack.Screen
            name='CrearEdificio'
            component={ CrearEdificio }
        />
        <Stack.Screen
            name='LogInAdministrador'
            component={ LogInAdministrador }
        />
        <Stack.Screen
            name='RegistroAdmin'
            component={ RegistroAdmin }
        />
        <Stack.Screen
            name='SelectAutoManual'
            component={ SelectAutoManual }
        />

        <Stack.Screen
            name='CreateAutomatic'
            component={ CreateAutomatic }
        />

        <Stack.Screen
            name='CreateManual'
            component={ CreateManual }
        />
    </Stack.Navigator>
</NavigationContainer>

)}

export default MainStack

const style = StyleSheet.create({
    buttonContainer:{
        backgroundColor: 'green',
        marginBottom: 10,
        paddingHorizontal:20,
        paddingHorizontal:10
    },
    buttonText:{
    color:'white'
    }
})