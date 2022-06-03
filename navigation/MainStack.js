import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import Home from '../screens/Home'
import { NavigationContainer } from '@react-navigation/native';

import InicioAdmin from '../screens/InicioAdmin'
import InicioInquilino from '../screens/InicioInquilino'
import NuevoEdificio from '../screens/NuevoEdifico'

const Stack = createNativeStackNavigator()

const MainStack =()=>{
   
return(
<NavigationContainer>
    <Stack.Navigator>

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
            name='NuevoEdificio'
            component={ NuevoEdificio }
        />

    </Stack.Navigator>
</NavigationContainer>


)

}

export default MainStack

const style = StyleSheet.create({
    buttonContainer:{
        backgroundColor: 'green',
        marginBottom: 10,
        paddingHorizontal:20,
        paddingHorizontal:10,

    },
    buttonText:{
    color:'white'
    }



    })