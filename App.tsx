import React from 'react';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';
import { Home } from './src/pages/Home';

export default function App() {
  return (
    <>
      <StatusBar 
        backgroundColor="transparent" 
        translucent 
        barStyle="light-content" 
      />
       <Home /> 
    </>
  );
}

const styles = StyleSheet.create({
  Container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'  
  }
  
})
