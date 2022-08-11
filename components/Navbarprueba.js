import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Prueba1 from '../screens/mainscreensdepartamento/Prueba1'
import Prueba2 from '../screens/mainscreensdepartamento/Prueba2'


const Navbar = () =>{
    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator>
            <Tab.Screen name="Prueba1" component={Prueba1} />
            <Tab.Screen name="Prueba2" component={Prueba2} />
        </Tab.Navigator>
    )
}

export default Navbar