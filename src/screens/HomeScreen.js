import React from "react";
import { View, StyleSheet, Image, Button } from "react-native";

function HomeScreen({}) {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.splash_image}
          source={require("../../assets/Images/splash_image.png")}
        />
        <Text style={styles.firstHeading}>Salon App</Text>
      </View>
      <View style={styles.properties}>
        <Text style={styles.Typography}>
          Lorem Ipsum is simply dummy text of the printing
        </Text>
      </View>
      <View>
        <Button style={styles.button}>
          <Text style={styles.textButton}>login</Text>
        </Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  splash_image: {
    position: absolute,
    width: 426,
    height: 618,
    left: -16,
    top: -100,
  },
  firstHeading: {
    fontSize: 26,
    fontWeight: "bold",
  },
  properties: {
    height: 44,
    width: 297,
    left: 54,
    top: 558,
    borderRadius: null,
  },
  Typography: {
    font: "Neue Montreal",
    Weight: 500,
    Size: 20,
    lineHeight: 24,
    Align: "Center",
  },
  button: {
    height: 36,
    width: 76,
    left: 177,
    top: 705,
    borderRadius: null,
  },
  textButton: {
    fontFamily: "Neue Montreal",
    fontSize: 20,
    fontWeight: 500,
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "left",
  },
});

export default HomeScreen;
