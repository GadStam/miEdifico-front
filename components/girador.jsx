import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

const girador = () => {


    return (
    
        <View style={[styles.container, styles.horizontal]}>
             <ActivityIndicator size="large" />
                </View>
       
    )
}

export default girador


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    }
  });

