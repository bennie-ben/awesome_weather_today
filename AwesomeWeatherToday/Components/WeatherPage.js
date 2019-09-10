import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default ({ humidity, temp, weather }) => {

  const temperture = Math.round(temp);
  const isHumidity = (humidity) => {
    if (humidity>82) return "나가면 죽음뿐"
    if (humidity<=82 && humidity>70) return "웬만하면 집에 있자"
    if (humidity<=70 && humidity>60) return "습하다 습해"
    else return "외출가능 😎"
  };

  return (
    <LinearGradient 
      colors={[ '#d9eeec', '#64b2cd', '#3c70a4' ]}
      style={styles.container}>
      <View style = {styles.title}>
        <Feather name="sun" size={100} color="black" />
        <Text style = {styles.isHumid}>
          지금은... {isHumidity(humidity)}
        </Text>
      </View>
      <View style = {styles.container}>
        <Text style = {styles.average}>
          {temperture}°C
        </Text>
        <Text style = {styles.others}>
          습도 : {humidity}%
        </Text>
      </View>
    </LinearGradient>
  )
} 
const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor : 'transparent'
  },
  title:{
    fontSize : 50,
    alignItems : 'center',
    justifyContent : 'center',
    paddingTop : 35
  },
  average:{
    fontSize : 50,
    fontWeight : "100"
  },
  others:{
    fontSize : 27,
    paddingTop : 40,
    fontWeight : "100"
  },
  isHumid:{
    color : "black",
    fontSize : 30,
    paddingTop : 40,
    fontWeight : "100"
  }
});