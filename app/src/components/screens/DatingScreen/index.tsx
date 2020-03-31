import React, { ReactElement, useState } from "react";
import { Text, KeyboardAvoidingView, View } from "react-native"
import styled from "styled-components/native";
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from "react-navigation";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { connect, shallowEqual, useSelector, useDispatch } from "react-redux";

import { BaseTemplate } from "@templates";
import { theme } from "@configs";
import { i18n } from "@i18n";

import { InputChat } from "@molecules";

const ScrollViewStyled = styled.ScrollView`
width: 100%;
`

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const DatingScreen: NavigationStackScreenComponent<Props> = ({
  navigation,
}): ReactElement => {
  const datingState = useSelector((state) => state.dating);
  const { messages } = { ...datingState }
  return (
    <BaseTemplate>
    <KeyboardAvoidingView
        enabled
        behavior="padding"
        // behavior="position"
        keyboardVerticalOffset={100}
        style={{
          flex:1
        }}
      >
    <View style={{flex:1}}>
      {/* <KeyboardAvoidingView
        enabled
        // behavior="padding"
        behavior="position"
        keyboardVerticalOffset={100}
        style={{
          width: "100%",
          flex:1,
          justifyContent:"space-between",
          flexDirection:"row",
          flexWrap:"wrap",
        }}
      > */}

          {/* <View style={{ alignItems: 'flex-end',flexGrow:1,flexShrink:0,flexBasis:'auto' }}> */}
          {/* <View> */}
            <ScrollViewStyled>
              {messages.map((msg, index) => {
                return (<Text
                  key={index}
                >
                  {msg.msg}
                </Text>)
              })
              }
            </ScrollViewStyled>
          {/* </View> */}
          {/* <View> */}
          {/* <View style={{ alignSelf: 'flex-end',flexGrow:1,flexShrink:0,flexBasis:'auto' }}> */}
            <InputChat />
          {/* </View> */}
      {/* </KeyboardAvoidingView> */}
      </View>
      </KeyboardAvoidingView>
    </BaseTemplate>
  );
};

DatingScreen.navigationOptions = ({ navigation }) => ({
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

export { DatingScreen };
