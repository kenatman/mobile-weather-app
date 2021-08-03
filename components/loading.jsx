import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Loading = (props) => (
  <View style={styles.container}>
    <View style={styles.halfContainer}>
      <MaterialCommunityIcons name="atom-variant" size={90} color="white" />
    </View>
    <View style={styles.halfContainer}>
      <Text style={styles.text}>I`m loading weather data... plz wait...</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "salmon",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 100,
  },
  halfContainer: { flex: 1, justifyContent: "flex-end", alignItems: "center" },
  text: { fontSize: 30, color: "white", fontWeight: "600" },
});

export default Loading;
