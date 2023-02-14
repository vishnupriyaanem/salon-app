import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import HomeScreen from "./src/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
//import { createNavigationStackNavigator } from "@react-navigation/native-Stack";

//const Stack = createNavigationStackNavigator();
export default function App() {
  useEffect(() => {
    console.log(Constants.statusBarHeight);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
  },
});
