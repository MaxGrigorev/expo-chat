import React, { ReactElement, useState } from "react";
import { Text,KeyboardAvoidingView } from "react-native"
import styled from "styled-components/native";


import { BaseTemplate } from "@templates";
import { theme } from "@configs";
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from "react-navigation";
import { NavigationStackScreenComponent } from "react-navigation-stack";

import { i18n } from "@i18n";
import { socket } from "@services";

import { TextInput, Button } from "@atoms";

import { InputChat } from "@molecules";



const TextInputStyled = styled(TextInput)``;

const ScrollViewStyled = styled.ScrollView`

`

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const MainScreen: NavigationStackScreenComponent<Props> = ({
  navigation,
}): ReactElement => {

  const [inputValue, setInputValue] = useState("")

  return (
    <BaseTemplate>
    <KeyboardAvoidingView
      enabled
      behavior="padding"
      // behavior="position"
      keyboardVerticalOffset={100}
      style={{
        width: "100%",
      }}
    >
      <ScrollViewStyled>

      </ScrollViewStyled>
      <InputChat/>
      </KeyboardAvoidingView>
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
