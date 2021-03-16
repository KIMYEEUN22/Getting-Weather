import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Loading(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Getting The Nice Weather</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: '#fff0b3',
        justifyContent : 'flex-end',
        paddingHorizontal : 30,
        paddingVertical : 100
    },
    text : {
        color : '#80807a',
        fontSize : 30
    }
})