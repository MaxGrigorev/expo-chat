import React, { ReactElement } from "react";
import { Text } from "react-native"

import { BaseTemplate } from "@templates";
import { theme } from "@configs";
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from "react-navigation";
import { NavigationStackScreenComponent } from "react-navigation-stack";

import { i18n } from "@i18n";

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const MainScreen: NavigationStackScreenComponent<Props> = ({
  navigation,
}): ReactElement => {

  return (
    <BaseTemplate>
      <Text>text</Text>
    </BaseTemplate>
  );
};

MainScreen.navigationOptions = ({ navigation }) => ({
  title: i18n.t("common.title"),
  headerTitleStyle: {
    textAlign: "left",
    flex: 1,
    marginLeft: -10,
    color: theme.palette.blackTwo[0],
    fontFamily: theme.fonts.robotoCondensedRegular,
    fontSize: 18,
    lineHeight: 20,
  },
  headerBackTitle: null,
  headerLeftContainerStyle: {
    paddingHorizontal: 16,
  },
});

export { MainScreen };
