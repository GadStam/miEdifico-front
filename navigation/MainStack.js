import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/Home'
import InicioAdmin from '../screens/InicioAdmin'
import InicioInquilino from '../screens/InicioInquilino'

const Stack = createNativeStackNavigator()

const MainStack =()=>{
   
return(
<NativagtionContainer>
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

    </Stack.Navigator>
</NativagtionContainer>


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