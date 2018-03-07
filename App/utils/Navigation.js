import { StackNavigator } from "react-navigation";

import HomeScreen from "../Screens/HomeScreen";

const Nav = StackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen
    }
  },
  {
    initialRouteName: "HomeScreen",
    headerMode: "none"
  }
);

export default Nav;
