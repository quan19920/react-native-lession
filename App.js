import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Constants from 'expo-constants'
import Login from './components/login'
import Chatscreen from './screens/chatscreens'


export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login /> */}
      <Chatscreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: Constants.statusBarHeight,
  },
  
});
