import { SIGN_OUT_USER } from "./authConstants";
import { SubmissionError } from "redux-form";
import { history } from "../../index";

export const login = (creds) => {
  return async (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(creds.email, creds.password);
      history.push("/events");
    } catch (error) {
      console.log(error);
      throw new SubmissionError({
        _error: error.message,
      });
    }
  };
};

export const logout = () => {
  return {
    type: SIGN_OUT_USER,
  };
};
