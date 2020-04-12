import "./polyfills";

import React, { ComponentType } from "react";
import { AppRegistry, NativeModules } from "react-native";
import { Provider } from "react-redux";
import styled, { ThemeProvider } from "styled-components/native";

import { store } from "@redux/store";
import { theme } from "@configs";
import { AppNavigator } from "@navigation";
import { setTopLevelNavigator } from "@services/navigation";
import { expo } from "./app.json";
import { useFontsLoader } from "@hooks";
import { isAndroid,navToDating } from "@utils/common";
import { database } from "@services"

// import openSocket from 'socket.io-client';
// const socket = openSocket('http://192.168.0.3:3000');
import {socket} from "@services"

import {joinRoom, reseiveMessage, addToQuare} from "@redux/ducks/dating"
const {dispatch}=store

socket.on('msg2room', msg => {
  console.log("msg2room",msg)
  dispatch(reseiveMessage(msg))
});

socket.on('connectRoom', msg => {
  console.log("connectRoom msg", msg)
  dispatch(joinRoom(msg))
  navToDating({partner:msg.partner})
});

socket.on('addToQuare', msg => {
  console.log("addToQuare msg", msg)
  dispatch(addToQuare(true))
});

const AppContainer = styled.View`
  flex: 1;
`;

const { UIManager } = NativeModules;

const App = () => {
  let { fontsLoaded } = useFontsLoader();
  if (isAndroid()) {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  // database.ref('menu/').set({
  //   highscore: 0
  // });

  return (
    fontsLoaded && (
      <AppContainer>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <>
              <AppNavigator
                ref={navigatorRef => {
                  setTopLevelNavigator(navigatorRef);
                }}
              />
            </>
          </ThemeProvider>
        </Provider>
      </AppContainer>
    )
  );
};

AppRegistry.registerComponent(expo.name, (): ComponentType => App);

export default App;