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
import { isAndroid } from "@utils/common";
import { database } from "@services"

import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:3000');

// socket.on('msg', msg => {
//   console.log("msg",msg)
// });
//   socket.emit('msg', "hello");

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