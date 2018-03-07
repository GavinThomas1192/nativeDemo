import { StackNavigator } from "react-navigation";

import HomeScreen from "../Screens/HomeScreen";
import LandingScreen from "../Screens/LandingScreen";
const Nav = StackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen
    },
    LandingScreen: {
      screen: LandingScreen
    }
  },
  {
    initialRouteName: "LandingScreen",
    headerMode: "none"
  }
);

export default Nav;
