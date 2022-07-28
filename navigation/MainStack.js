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
import selectAutoManual from '../screens/selectAutoManual'
import createManual from '../screens/typeCreation/createManual'
import createAutomatic from '../screens/typeCreation/createAutomatic'
import Firstscreendepto from '../screens/mainscreensdepartamento/Firstscreendepto'
import EdificiosListItem from '../components/EdificiosListItem'
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
            name='selectAutoManual'
            component={ selectAutoManual }
        />

        <Stack.Screen
            name='createAutomatic'
            component={ createAutomatic }
        />

        <Stack.Screen
            name='createManual'
            component={ createManual }
        />

        <Stack.Screen
            name='Firstscreendepto'
            component={ Firstscreendepto }
        />

        <Stack.Screen
            name='EdificiosListItem'
            component={ EdificiosListItem }
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