import { StatusBar } from 'expo-status-bar';
import { Alert } from 'react-native';
import React from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';

export default class App extends React.Component {
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const location = await Location.getCurrentPositionAsync();
      console.log(location);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  }; 
  //Location.getCurrentPositionAsync() 라는 현재 위치를 가져올 수 있는 엑스포 라이브러리를 가져와서 비동기 함수로 만들어 사용 
  componentDidMount(){
    this.getLocation();
  }
  render(){
    return (
      <Loading />
    );
  }
}

//Location.requestPermissionAsync()
//permission 이 승인됐을 때 resolve된 promise를 리턴한다. 거절 됐을 경우 rejects를 리턴한다.