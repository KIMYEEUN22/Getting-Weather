import { StatusBar } from 'expo-status-bar';
import { Alert } from 'react-native';
import React from 'react';
import axios from 'axios';
import Loading from './Loading';
import Weather from './Weather';
import * as Location from 'expo-location';

//axios가 데이터라고 부르는 무언가를 우리에게 전달해준다.
//URL데이터를 앱 안에서 fetch하기 위해 axios 설치 후 새로운 함수를 만들었다.

const API_KEY = "12fc4a57dc08d5e892e57d9e4ec7a924";
//openweathermap.org 사이트에 로그인 후 부여받은 api 키이다.

export default class App extends React.Component {
  state = {
    isLoading: true
  }
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({ 
      isLoading: false, 
      condition: weather[0].main, //콘솔로 데이터를 확인해보면 오브젝트 형태로 값이 들어있기 때문에 그 안에서 필요한 데이터를 가져왔다. "Clear"와 같은
      temp      //가져온 오브젝트의 main 안에 temp 라는 값을 가져온다. 내가 필요한건 온도값이니까
                //윗줄에서 temp : data.main.temp 라는 표현 대신 es6를 통해 저 위에 선언할때 data : {main:{temp}} 로 표현하였다.
    });
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      //Asks the user to grant permissions for location.
      //permission 이 승인됐을 때 resolve된 promise를 리턴한다. 거절 됐을 경우 rejects를 리턴한다.
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      //es6를 통해 coords 오브젝트안의 값들을 가져왔다.
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };
  //Location.getCurrentPositionAsync() 라는 현재 위치를 가져올 수 있는 엑스포 라이브러리를 가져와서 비동기 함수로 만들어 사용 
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}
