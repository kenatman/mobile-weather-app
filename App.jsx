import React, { Component } from "react";
import { Alert } from "react-native";
import Loading from "./components/loading";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = `01e2e9d8ce06e4275e9a0fd770444029`;

class App extends Component {
  state = { isLoading: true };

  async getWeather(lat, lon) {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      { params: { lat, lon, appid: API_KEY } }
    );
    console.log(data);
  }

  async getLocation() {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});
      //send  coords to API..
      this.getWeather(latitude, longitude);
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
