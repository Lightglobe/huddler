import { combineReducers } from "redux";
import testReducer from "../../features/testarea/testReducer";

export const rootReducer = combineReducers({
  test: testReducer,
});
