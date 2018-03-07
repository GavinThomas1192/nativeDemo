import React from "react";
import axios from "axios";
import {
  ScrollView,
  KeyboardAvoidingView,
  View,
  TextInput,
  StatusBar,
  Image,
  StyleSheet
} from "react-native";
import { Button, Text } from "native-base";

export default class dataFetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      jokeData: ""
    };
  }

  onButtonPress = () => {
    console.log("inside buttonpress");
    this.setState({ loading: true });
    axios
      .get(
        "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten"
      )
      .then(response => {
        console.log("response!", response);
        this.setState({ jokeData: response }, () => {
          this.setState({ loading: false });
          console.log("successfully updated state!", this.state);
        });
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          We all know Programmers tell the best jokes...
        </Text>
        <Button onPress={this.onButtonPress} full style={styles.button}>
          <Text style={styles.buttonText}>Show me some funny</Text>
        </Button>

        {this.state.loading ? <Text>Loading</Text> : undefined}

        {!this.state.loading && this.state.jokeData.data !== undefined ? (
          <View>
            {this.state.jokeData.data.map((ele, index) => {
              return (
                <View style={styles.jokeContainer}>
                  <Text>
                    {index + 1}: {ele.setup}
                  </Text>
                  <Text>{ele.punchline}</Text>
                </View>
              );
            })}
          </View>
        ) : (
          undefined
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  button: {
    backgroundColor: "yellow",
    margin: 10
  },
  buttonText: {
    color: "black"
  },
  jokeContainer: {
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black"
  }
});
