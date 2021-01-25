import { SubmissionError, reset } from "redux-form";
import { history } from "../../index";
import { toastr } from "react-redux-toastr";

export const login = (creds) => {
  return async (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(creds.email, creds.password);
      history.push("/events");
    } catch (error) {
      throw new SubmissionError({
        _error: error.message,
      });
    }
  };
};

export const registerUser = (user) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase();
  const firestore = firebase.firestore();
  try {
    let createdUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password);
    console.log(createdUser);
    await createdUser.user.updateProfile({
      displayName: user.displayName,
    });
    let newUser = {
      displayName: user.displayName,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      email: user.email,
      password: user.password,
    };
    await firestore
      .collection("users")
      .doc(createdUser.user.uid)
      .set({
        ...newUser,
      });
    history.push("/events");
  } catch (error) {
    toastr.error("Oops", "Something went wrong");
    throw new SubmissionError({
      _error: error.message,
    });
  }
};

export const socialLogin = (selectedProvider) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase();
  const firestore = firebase.firestore();

  try {
    const user = await firebase.login({
      provider: selectedProvider,
      type: "popup",
    });
    history.push("/events");
    if (user.additionalUserInfo.isNewUser) {
      await firestore.collection("users").doc(user.user.uid).set({
        displayName: user.profile.displayName,
        photoURL: user.profile.avatarUrl,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const updatePassword = (creds) => {
  return async (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    try {
      const user = firebase.auth().currentUser;
      await user.updatePassword(creds.newPassword1);
      await dispatch(reset("updatePasswordForm"));
      toastr.success("Success", "Your password has been updated");
    } catch (error) {
      toastr.error("Oops", "Something went wrong");
      throw new SubmissionError({
        _error: error.message,
      });
    }
  };
};
