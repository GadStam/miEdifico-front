import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import BottomTab from '../navigation/BottomTab';
import Header from './Header';

const LoggedLayout = (props) => {

    const { children } = props

    return (
        <>
        <Header/>
        <View >
            <>
            {children}
            </>
            
        </View>
        <BottomTab />
        </>
    )
}

export default LoggedLayout

