import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Clouds: {
    iconName: "cloud",
    gradient: ["#203A43", "#f7797d"],
  },
  Clear: { iconName: "weather-sunny", gradient: ["#2193b0", "#6dd5ed"] },
  Rain: { iconName: "weather-rainy", gradient: ["#654ea3", "#eaafc8"] },
  Snow: { iconName: "snowman", gradient: ["#D3CCE3", "#E9E4F0"] },
};

const Weather = ({ temp, condition }) => {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={90}
          color="white"
        />
        <Text style={styles.text}>{temp}°</Text>
        <Text style={styles.text}>{condition}</Text>
      </View>
      <View style={styles.halfContainer}></View>
    </LinearGradient>
  );
};

export default Weather;

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado",
    "Clear",
    "Clouds",
  ]).isRequired,
};
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  halfContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 35, color: "white" },
});
