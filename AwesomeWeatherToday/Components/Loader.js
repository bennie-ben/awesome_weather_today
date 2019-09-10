import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Loader() {
  return (
    <View style={styles.container}>
      <View style={styles.default}/>
      <View style={styles.layout}>
        <Text style={styles.loading}>Getting The Awesome Weather Of Today</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor : "#e4f2f0"
  },
  default : {
    flex : 7
  },
  layout:{
    flex:1,
    padding : 20,
    paddingHorizontal : 30,
    paddingVertical : 100
  },
  loading:{
    color:"#6c7b95",
    fontSize : 22
  },

});