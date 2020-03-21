import { Reducer } from "redux";

import { State } from "./types";

// Actions
const SET_EXAMPLE = "dating/SET_EXAMPLE";
const SET_INITIAL_STATE = "dating/SET_INITIAL_EXAMPLE";
const RESEIVE_MESSAGE = "dating/RESEIVE_MESSAGE";
const JOIN_ROOM = "dating/JOIN_ROOM"

interface AbstractAction {
  type: string;
}

interface ResriveMessageAction {
  message: any;
}

interface JoinRoomAction {
  room: string|null;
}

interface Action_Payload extends AbstractAction {
  payload: ResriveMessageAction|JoinRoomAction;
}

type Action = Action_Payload;

const initialState: State = {
  messages: [],
  room: null,
};

// Reducer
const reducer: Reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_EXAMPLE:
      return {
        ...state,
        ...action.payload
      };
    case JOIN_ROOM:
      return {
        ...state,
        ...action.payload
      };
    case RESEIVE_MESSAGE:
      return {
        ...state,
        messages: [...state.messages,action.payload.message]
      };
    case SET_INITIAL_STATE:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

// Action Creators
export const reseiveMessage = (message: any): Action_Payload => {
  return {
    type: RESEIVE_MESSAGE,
    payload: { message }
  };
};

export const joinRoom = (room: JoinRoomAction): Action_Payload => {
  return {
    type: JOIN_ROOM,
    payload: room
  };
};

export const setInitialUserStatus = (): AbstractAction => {
  return {
    type: SET_INITIAL_STATE
  };
};

export { reducer as dating };
