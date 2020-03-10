import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as modalReducer } from "redux-modal";

import { example } from "./example";

const rootReducer = combineReducers({
  form: formReducer,
  modal: modalReducer,
  example,
});

export { rootReducer };

export type AppState = ReturnType<typeof rootReducer>;
