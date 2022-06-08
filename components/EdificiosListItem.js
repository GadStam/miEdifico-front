import React from 'react';
import { Text, View} from 'react-native';


export default function EdificiosListItem ({edificio}){
    console.log(edificio)
    return(
<View>
<Text >
    Edificio:{edificio.name}

</Text>

</View>
)
}






