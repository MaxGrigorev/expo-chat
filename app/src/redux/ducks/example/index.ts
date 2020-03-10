import { Reducer } from "redux";

import { State } from "./types";

// Actions
const SET_EXAMPLE = "userStatus/SET_EXAMPLE";
const SET_INITIAL_EXAMPLE = "userStatus/SET_INITIAL_EXAMPLE";

interface AbstractAction {
  type: string;
}

interface ExampleAction_Payload {
  example: number;
}

interface ExampleAction extends AbstractAction {
  payload: ExampleAction_Payload;
}

type Action = ExampleAction;

const initialState: State = {
  example: 0,
};

// Reducer
const reducer: Reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_EXAMPLE:
      return {
        ...state,
        ...action.payload
      };
    case SET_INITIAL_EXAMPLE:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

// Action Creators
export const setExample = (example: ExampleAction_Payload): ExampleAction => {
  return {
    type: SET_EXAMPLE,
    payload: example
  };
};

export const setInitialUserStatus = (): AbstractAction => {
  return {
    type: SET_INITIAL_EXAMPLE
  };
};

export { reducer as example };
