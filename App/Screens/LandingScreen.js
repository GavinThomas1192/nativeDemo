import React from "react";
import { View, Text, Button } from "react-native";

export default class LandingScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Welcome to programmer jokes!</Text>
        <Button
          title="Doorway to Jokes"
          onPress={() => this.props.navigation.navigate("HomeScreen")}
        />
      </View>
    );
  }
}
