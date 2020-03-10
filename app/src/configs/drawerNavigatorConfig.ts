import { NavigationDrawerConfig } from "react-navigation-drawer";
import { Dimensions } from "react-native";

import { theme } from "./theme";

export const drawerNavigatorConfig: NavigationDrawerConfig = {
  drawerType: "slide",
  drawerWidth: Dimensions.get("window").width - 64,
  contentComponent: null,
  overlayColor: theme.palette.black60[0],
};
