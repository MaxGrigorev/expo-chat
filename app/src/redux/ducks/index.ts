import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as modalReducer } from "redux-modal";

import { dating } from "./dating";

const rootReducer = combineReducers({
  form: formReducer,
  modal: modalReducer,
  dating,
});

export { rootReducer };

export type AppState = ReturnType<typeof rootReducer>;
