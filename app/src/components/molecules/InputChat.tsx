import React, { ReactElement, useState, FunctionComponent } from "react";
import { Text, KeyboardAvoidingView, View } from "react-native"
import styled from "styled-components/native";
import { connect, shallowEqual, useSelector, useDispatch } from "react-redux";
import { BaseTemplate } from "@templates";
import { theme } from "@configs";
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from "react-navigation";

import { i18n } from "@i18n";
import { socket } from "@services";
import { AppState } from "@redux/ducks"

import { TextInput, Button } from "@atoms";

const TextInputStyled = styled(TextInput)`
  flex: 1;
  height: 36;
  align-self: stretch
`;

const ButtonStyled = styled(Button)`
  width:50;
`;

interface Props {
}

const InputChat: FunctionComponent<Props> = (): ReactElement => {
  const datingState = useSelector((state: AppState) => state.dating);

  const { room } = { ...datingState }
  const [inputValue, setInputValue] = useState("")

  return (<View >
    <View style={{ flexDirection: "row" }}>
      <TextInputStyled
        value={inputValue}
        onChange={({ nativeEvent: { text } }) => {
          setInputValue(text);
        }}
        multiline={true}
      />

      <ButtonStyled
        locKey="common.send"
        onPress={() => {
          socket.emit('msg2room', { room: room, msg: inputValue });
        }}
      />
    </View>
  </View>
  );
};

export { InputChat };
