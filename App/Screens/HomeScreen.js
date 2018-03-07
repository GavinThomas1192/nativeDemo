import React, { Component } from "react";
import DataFetch from "../components/DataFetch";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar
} from "react-native";
import Header from "../components/Header";
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.disableYellowBox = true;
    console.ignoredYellowBox = ["Remote debugger"];
    return (
      <ScrollView>
        <View>
          <Header title={"Welcome!"} />
          <View style={styles.container}>
            <Text style={styles.welcome}>Wanna hear a joke?</Text>
            <DataFetch />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  border: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "black"
  }
});
