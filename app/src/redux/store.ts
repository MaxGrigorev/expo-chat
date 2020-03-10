import { createStore, applyMiddleware, Store, compose } from "redux";
import thunk from "redux-thunk";

import { Reactotron } from "@configs";
import { rootReducer } from "@ducks";
import { RootState } from "./types";

let composeItems = [applyMiddleware(thunk)];

if (__DEV__) {
  composeItems.push(Reactotron.createEnhancer());
}

const store: Store<RootState> = createStore(
  rootReducer,
  compose(...composeItems)

);

export { store };
