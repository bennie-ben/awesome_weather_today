import React from 'react';
import { Alert } from 'react-native';
import Loader  from "./Components/Loader";
import WeatherPage from "./Components/WeatherPage"
import * as Location from 'expo-location';
import axios from "axios";

const api_key = "7aed832e6285e56439593cee07b9234b";
export default class App extends React.Component{
  state = {
    loading : true,
    location : {
      latitude : 0,
      longitude : 0
    },
     humidity:0, 
     temp:0, 
     weather:[] 
  }

  _getWeather = async()=>{

    const {location:{ latitude, longitude }} = this.state;
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}&units=metric`
    )
    const {
      main : { humidity, temp },
      weather
    } = data;
    this.setState({ 
      humidity, 
      temp, 
      weather 
    })
    console.log(data);
  }
  _getLocation = async() =>{
    try{
      await Location.requestPermissionsAsync();
      const location = await Location.getCurrentPositionAsync();
      const { coords:{ latitude, longitude } } = location;
      this.setState({
        loading : false,
        location:{
          latitude,
          longitude
        }
      })
    }catch(error){
      console.log(error)
      Alert.alert("Sorry We can't find you")
    }
  }

  componentDidMount(){
    this._getLocation();
    this._getWeather();
  }
  render(){
    const { loading, humidity, temp, weather } = this.state;
    return loading ? <Loader/> :<WeatherPage humidity = {humidity} temp={temp} weather={weather}/>;;
  }
}
