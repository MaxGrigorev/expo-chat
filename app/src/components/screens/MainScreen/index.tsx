import React, { ReactElement, useState } from "react";
import { KeyboardAvoidingView } from "react-native"
import styled from "styled-components/native";
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from "react-navigation";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { connect, shallowEqual, useSelector, useDispatch } from "react-redux";
import { Container, Header, Content, Button, Text, H1, H2, H3, } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Item, Input, Label, Icon } from 'native-base';

import { BaseTemplate } from "@templates";
import { theme } from "@configs";
import { i18n } from "@i18n";
import { socket } from "@services"

import { InputChat } from "@molecules";
// import { TextInput, Button } from "@atoms";

const ScrollViewStyled = styled.ScrollView`

`

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const MainScreen: NavigationStackScreenComponent<Props> = ({
  navigation,
}): ReactElement => {
  const datingState = useSelector((state) => state.dating);
  const { addToQuare } = { ...datingState }

  const [inputValue, setInputValue] = useState("")
  const [inputError, setInputError] = useState(false)


  return (
    <BaseTemplate>
      <Grid>
        <Row size={3}>
          <Col style={{ justifyContent: "center", alignItems: "center" }}>
            <H3>{"Welcome to"}</H3>
            <H1>{"Chatter"}</H1>
            {!addToQuare && (<Text>
              {"Join to chat with random user"}
            </Text>)
            }
            {addToQuare && (<Text>
              {"add to quare"}
            </Text>)
            }
            <Item stackedLabel error={inputError}>
              <Label>{"Enter your name"}</Label>
              <Input
                value={inputValue}
                onChange={({ nativeEvent: { text } }) => {
                  setInputValue(text);
                  if (text === "") setInputError(true)
                }}
              />
            </Item>
          </Col>
        </Row>
        <Row size={1} >
          <Col>
            <Button
              block
              onPress={() => {
                if (!(inputValue === "")) socket.emit('join', { user: { name: inputValue } });
                if ((inputValue === "")) setInputError(true)
              }}
            >
              <Text>{i18n.t("common.join")}</Text>
            </Button>
          </Col>
        </Row>
      </Grid>
    </BaseTemplate>
  );
};

MainScreen.navigationOptions = ({ navigation }) => ({
  header: null,
});

export { MainScreen };
