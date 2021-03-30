import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    "Rain" : {
        iconName: "rainy",
        gradient: ["#bdc3c7","#2c3e50"],
        title : "Rainny Day",
        subtitle : "집에서 넷플릭스나 보시길"
    },
    "Clear" : {
        iconName: "sunny",
        gradient:['#36D1DC', '#5B86E5'],
        title : "Sunny Day!",
        subtitle : "오늘 날씨 넘 좋다 놀러나가자☀️"
    },
    "Thunderstorm" : {
        iconName: "ios-thunderstorm",
        gradient:['#232526', '#414345'],
        title : "태풍주의보",
        subtitle : "밖에 나가지 말고 집에 계세요"
    },
    "Snow": {
        iconName: "snow",
        gradient:['#74ebd5', '#ACB6E5'],
        title : "Make Snowman!!",
        subtitle : "Do you wanna build a Snowman??⛄️"
    },
    "Clouds": {
        iconName: "cloud-sharp",
        gradient:['#304352', '#d7d2cc'],
        title : "Cloudy Day",
        subtitle : "오늘 날씨는 흐려서 사진빨 안받습니당"
    }
}

export default function Weather({ temp, condition }) {
    return (
            <LinearGradient 
                colors={weatherOptions[condition].gradient} 
                style={styles.container}> 
                <StatusBar barStyle='dark-content' /> 
                <View style={styles.harfcontainer}>
                    <Ionicons name={weatherOptions[condition].iconName} size={96} color="white" />
                    <Text style={styles.temp}> {temp}°</Text>
                </View>
                <View style={{...styles.harfcontainer, ...styles.textContainer}} 
                            //es6에서 두개의 오브젝트를 함께 사용할 수 있는 방법 
                >
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                    <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
                </View>
            </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Rain", 
        "Snow", 
        "Clear", 
        "Clouds"
    ]).isRequired
}
//oneOf는 열거형(enum)으로 처리하여 prop가 특정 값들로 제한되도록 할 수 있다.
// `isRequired`와 연결하여 prop가 제공되지 않았을 때 경고가 보이도록 할 수 있다.

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    harfcontainer : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    temp : {
        fontSize : 42,
        color : 'white'
    },
    title:{
        color : 'white',
        fontSize : 44,
        fontWeight : '300',
        marginBottom : 10
    },
    subtitle: {
        color : 'white',
        fontWeight : '600',
        fontSize : 24
    },
    textContainer:{
        paddingHorizontal : 20,
        alignItems : 'flex-start'
    }
})