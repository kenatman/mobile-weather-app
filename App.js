import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowBox}></View>
      <View style={styles.blueBox}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  yellowBox: { flex: 1, backgroundColor: "yellow" },
  blueBox: { flex: 1, backgroundColor: "blue" },
});
