import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
export default function App() {
  useEffect(()=>{
console.log(Constants.statusBarHeight)
  },[])
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start workin on your app!</Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop:Constants.statusBarHeight
  },
});
