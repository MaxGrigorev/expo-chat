import React, { ReactElement, useState,FunctionComponent } from "react";
import { Text,KeyboardAvoidingView } from "react-native"
import styled from "styled-components/native";


import { BaseTemplate } from "@templates";
import { theme } from "@configs";
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from "react-navigation";

import { i18n } from "@i18n";
import { socket } from "@services";

import { TextInput, Button } from "@atoms";

const TextInputStyled = styled(TextInput)``;

interface Props {
}

const InputChat: FunctionComponent<Props> = (): ReactElement => {

  const [inputValue, setInputValue] = useState("")

  return (<>
      <TextInputStyled
        // onChangeText={text => setInputValue(text)}
        value={inputValue}
        onChange={({ nativeEvent: { text } }) => {
          setInputValue(text);
        }}
        // editable
      // maxLength={40}
      multiline={true}
      />

      <Button
        locKey="send"
        onPress={() => {
          socket.emit('msg', inputValue);
        }}
      />
      </>
  );
};

export { InputChat };
