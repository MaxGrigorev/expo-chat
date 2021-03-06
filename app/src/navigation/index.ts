import { Animated, Easing } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

import { routeNames } from "@constants";
import {
  MainScreen,
  DatingScreen,
} from "@screens";

import { drawerNavigatorConfig } from "@configs";

const MainNavigator = createStackNavigator({
  [routeNames.main.index]: MainScreen,
  [routeNames.main.dating]: DatingScreen,
});

const AppNavigator = createAppContainer(MainNavigator);

export { AppNavigator };
