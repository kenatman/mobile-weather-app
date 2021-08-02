import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Loading = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>I`m loading weather data... plz wait...</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "salmon",
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
  },
  text: { fontSize: 30, color: "white" },
});

export default Loading;
