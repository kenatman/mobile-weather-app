import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Clouds: {
    iconName: "cloud",
    gradient: ["#203A43", "#f7797d"],
    title: `It is Cloudy day`,
    subtitle: `Your mood could be little bit of depressed...`,
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#2193b0", "#6dd5ed"],
    title: `It is Sunny day`,
    subtitle: `Cool!! Refresh your mind~~!`,
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#654ea3", "#eaafc8"],
    title: `It is Rainy day`,
    subtitle: `Dont forget to bring umbrella!!!`,
  },
  Snow: {
    iconName: "snowman",
    gradient: ["#D3CCE3", "#E9E4F0"],
    title: `It is Snowy day`,
    subtitle: `See the beauty of snow`,
  },
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
      <View style={{ ...styles.halfContainer, ...styles.titleContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
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
  titleContainer: { alignItems: "flex-start", paddingHorizontal: 20 },
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "800",
    marginTop: 150,
    marginBottom: 20,
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 20,
  },
});
