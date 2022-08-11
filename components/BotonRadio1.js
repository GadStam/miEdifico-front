import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

const Radio = ({changeSeleccion, seleccion}) => {
    const [checked, setChecked] = useState(0);
    var numeracion = ['Es correlativa (1(1) - 1(2) - 2(3))', 'La numeración es por piso'];
    return (
        <View>
            {numeracion.map((numeracion, key) => {
                return (
                    <View key={numeracion}>
                        {checked == key ? (
                            <TouchableOpacity>
                                <View style={styles.vista}>
                                    <MaterialIcons name="radio-button-checked" style={styles.boton} size={15} color="black" />
                                    <Text style={styles.texto} >{numeracion}</Text>
                                </View>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                            onPress={() => {
                                setChecked(key);
                                if (checked == 1) {
                                    changeSeleccion('true')                                 
                                }
                                else{
                                    changeSeleccion('false')
                                }
                            }}
                            >
                                <View style={styles.vista}>
                                    <MaterialIcons name="radio-button-unchecked" style={styles.boton} size={15} color="black" />
                                    <Text style={styles.texto} >{numeracion}</Text>
                                </View>


                            </TouchableOpacity>
                        )}
                    </View>
                );
            })}

        </View>
    );
};

const styles = StyleSheet.create({
    texto: {
        color: 'white',
        width: "70%",
        textAlign: "justify",
        fontFamily: 'Kanit-Regular',
    },
    boton: {
        color: 'white',
        margin: 5
    },
    vista: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default Radio;