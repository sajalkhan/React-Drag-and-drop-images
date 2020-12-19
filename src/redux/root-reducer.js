import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import LoadleftColumnImageState from "./column_1/left_column_reducer";
import LoadrightColumnImageState from "./column_2/right_column_reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["LoadrightColumnImageState"], // we can add more state to our local storage
};

const rootReducer = combineReducers({
  LoadleftColumnImageState,
  LoadrightColumnImageState,
});

export default persistReducer(persistConfig, rootReducer);
