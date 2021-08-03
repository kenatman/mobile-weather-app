import React, { Component } from "react";
import { Alert } from "react-native";
import Loading from "./components/loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./components/weather";

const API_KEY = `01e2e9d8ce06e4275e9a0fd770444029`;

class App extends Component {
  state = { isLoading: true };

  async getWeather(lat, lon) {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      { params: { lat, lon, appid: API_KEY, units: `metric` } }
    );
    this.setState({ isLoading: false, temp: data.main.temp });
  }

  async getLocation() {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});
      //send  coords to API..
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can not find you`, `Check the permission!!");
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} />;
  }
}

export default App;
