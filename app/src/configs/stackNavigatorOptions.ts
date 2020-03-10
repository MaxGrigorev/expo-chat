import { NavigationStackOptions } from "react-navigation-stack";
import { Platform } from "react-native";

import { theme } from "./theme";

export const defaultStackNavigatorOptions: NavigationStackOptions = {
  headerTitleStyle: {
    textAlign: "center",
    flex: 1,
    color: theme.palette.blackTwo[0],
    ...Platform.select({
      ios: {
        fontFamily: theme.fonts.robotoCondensedRegular,
        fontSize: 20,
      },
      android: {
        fontFamily: theme.fonts.robotoCondensedRegular,
        fontSize: 18,
        letterSpacing: 0.3,
      },
    }),
  },
};
