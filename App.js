import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';

export default class App extends React.Component {
  getLocation = async () => {
    const location = await Location.getCurrentPositionAsync();
    console.log(location);
  }; //Location.getCurrentPositionAsync() 라는 현재 위치를 가져올 수 있는 엑스포 라이브러리를 가져와서 비동기 함수로 만들어 사용 
  componentDidMount(){
    this.getLocation();
  }
  render(){
    return (
      <Loading />
    );
  }
}