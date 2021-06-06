import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'react-native';
import { Home } from './src/pages/Home';

export default function App() {
  return (
    <>
      {/* <View style={styles.Container}>
        <Text>Hello Word</Text>
      </View> */}
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
