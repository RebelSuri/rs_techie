import React from 'react';
import {  Text, View,Button,StyleSheet, StatusBar } from 'react-native';
import CarList from './Components/CarsList';
import Header from './Components/Header';



export default function App() {
  return (        
      <View style={styles.app}>
        <Header/>
      <CarList/> 
      <StatusBar style="auto"/>
       </View>
        
)};
const styles=StyleSheet.create({
  app:{
    flex:1,
    backgroundColor:"#fff",
    alignItems:'center',
    justifyContent:'center'
  }
});