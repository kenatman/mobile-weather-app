import React, { Component } from "react";
import { Alert } from "react-native";
import Loading from "./components/loading";
import * as Location from "expo-location";

class App extends Component {
  state = { isLoading: true };
  async getLocation() {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});
      //send  coords to API..
      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("Can not find you`, `Check the permission!!");
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading } = this.state;
    return isLoading && <Loading />;
  }
}

export default App;
