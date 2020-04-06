import React, { ReactElement, useState, FunctionComponent } from "react";
import { KeyboardAvoidingView, View } from "react-native"
import styled from "styled-components/native";
import { connect, shallowEqual, useSelector, useDispatch } from "react-redux";
import { BaseTemplate } from "@templates";
import { theme } from "@configs";
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from "react-navigation";
import { Container, Header, Content, Button, Text, H1, H2, H3, } from 'native-base';
import { Item, Input, Icon } from 'native-base';

import { i18n } from "@i18n";
import { socket } from "@services";
import { AppState } from "@redux/ducks"

// import { TextInput, Button } from "@atoms";

// const TextInputStyled = styled(TextInput)`
//   flex: 1;
//   height: 36;
//   align-self: stretch
// `;

const ButtonStyled = styled(Button)`
  width:50;
`;

interface Props {
}

const InputChat: FunctionComponent<Props> = (): ReactElement => {
  const datingState = useSelector((state: AppState) => state.dating);

  const { room } = { ...datingState }
  const [inputValue, setInputValue] = useState("")

  return (<Item rounded style={{ alignItems: "flex-end", padding: 4 }}>
    <Input
      style={{ alignSelf: "center", maxHeight: 100 }}
      value={inputValue}
      onChange={({ nativeEvent: { text } }) => {
        setInputValue(text);
      }}
      multiline={true}
      placeholder='Enter message'
    />
    <Button
      onPress={() => {
        if (inputValue!==""){
        socket.emit('msg2room', { room: room, msg: inputValue });
        setInputValue("");
        }
      }}
      transparent
    >
      <Icon type="FontAwesome" style={{ alignSelf: "flex-start" }} name='paper-plane' />
    </Button>
  </Item>)
};

export { InputChat };
