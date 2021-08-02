import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Loading from "./loading";

export default function App() {
  return <Loading />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  yellowBox: { flex: 1, backgroundColor: "yellow" },
  blueBox: { flex: 1, backgroundColor: "blue" },
});
