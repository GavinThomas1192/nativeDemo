import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar
} from "react-native";
import Navigation from "./App/utils/Navigation";
export default class App extends Component {
  render() {
    console.disableYellowBox = true;
    console.ignoredYellowBox = ["Remote debugger"];
    return <Navigation />;
  }
}
