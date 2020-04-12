import React, { ReactElement, useState } from "react";
import { KeyboardAvoidingView, View } from "react-native"
import styled from "styled-components/native";
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from "react-navigation";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { connect, shallowEqual, useSelector, useDispatch } from "react-redux";
import { Container, Header, Content, Button, Text, H1, H2, H3, } from 'native-base';
import { Item, Input, Icon } from 'native-base';

import { BaseTemplate } from "@templates";
import { theme } from "@configs";
import { i18n } from "@i18n";

import { InputChat } from "@molecules";
import { PanGestureHandler } from "react-native-gesture-handler";

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
  const { messages,selfId } = { ...datingState }
  return (
    <BaseTemplate>
      <KeyboardAvoidingView
        enabled
        behavior="padding"
        // behavior="position"
        keyboardVerticalOffset={100}
        style={{
          flex: 1
        }}
      >
        <View style={{ flex: 1, padding: 10 }}>
          <ScrollViewStyled>
            {messages.map((msg, index) => {
              return (<Text
                key={index}
                style={{color:`${selfId===msg.id ? "red":"green"}`}}
              >
                {msg.msg}
              </Text>)
            })
            }
          </ScrollViewStyled>
          <InputChat />
        </View>
      </KeyboardAvoidingView>
    </BaseTemplate>
  );
};

DatingScreen.navigationOptions = ({ navigation }) => {
  const partner = navigation.getParam("partner")
  return ({
    title: partner.name,
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
  })
}

export { DatingScreen };
