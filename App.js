import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SignUpScreen from './src/screens/SignUpScreen';
import EmailVerificationScreen from './src/screens/EmailVerficationScreen';
import OTPScreen from './src/screens/OTPScreen';
import ResetPasswordSuccessScreen from './src/screens/ResetPasswordSuccessScreen';

import SignUpUserDetailsScreen from './src/screens/SignUpUserDetailsScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown : false}}>
           <Stack.Screen name="signupScreen" component={SignUpScreen}/>
          <Stack.Screen name="verifyEmailScreen" component={EmailVerificationScreen}/>
          <Stack.Screen name="otpScreen" component={OTPScreen}/>
          <Stack.Screen name="resetpasswordsuccess" component={ResetPasswordSuccessScreen}/> 
          <Stack.Screen name="SignUpUserDetails" component={SignUpUserDetailsScreen}/> 

        </Stack.Navigator> 
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop:Constants.statusBarHeight
  },
});
