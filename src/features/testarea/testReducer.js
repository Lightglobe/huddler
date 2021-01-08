import { DECREAMENT_COUNTER, INCREAMENT_COUNTER } from "./testConstants";
import { createReducer } from "../../app/common/util/reducerUtils";

const initialState = {
  data: 42,
};

const increamentCounter = (state) => {
  return { ...state, data: state.data + 1 };
};

const decreamentCounter = (state) => {
  return { ...state, data: state.data - 1 };
};

export default createReducer(initialState, {
  [INCREAMENT_COUNTER]: increamentCounter,
  [DECREAMENT_COUNTER]: decreamentCounter,
});
