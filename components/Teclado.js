import React from "react";
import fondoPag from "../assets/fondoInicio.jpg"
import { StyleSheet, ImageBackground } from 'react-native';

import { KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

const Teclado = ({children}) => {
    return(
        <KeyboardAvoidingView>
                <ScrollView>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {children}
                    </TouchableWithoutFeedback>
                </ScrollView>
        </KeyboardAvoidingView>
    );
}
export default Teclado;
