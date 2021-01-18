import { INCREAMENT_COUNTER, DECREAMENT_COUNTER } from "./testConstants";
import { asyncActionFinish } from "../async/asyncActions";
import { ASYNC_ACTION_START } from "../async/asyncConstants";

export const increamentCounter = () => {
  return {
    type: INCREAMENT_COUNTER,
  };
};

export const decreamentCounter = () => {
  return {
    type: DECREAMENT_COUNTER,
  };
};

const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const increamentAsync = (name) => {
  return async (dispatch) => {
    dispatch({ type: ASYNC_ACTION_START, payload: name });
    await delay(1000);
    dispatch({ type: INCREAMENT_COUNTER });
    dispatch(asyncActionFinish());
  };
};

export const decreamentAsync = (name) => {
  return async (dispatch) => {
    dispatch({ type: ASYNC_ACTION_START, payload: name });
    await delay(1000);
    dispatch(decreamentCounter());
    dispatch(asyncActionFinish());
  };
};
