import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "../reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { getFirebase } from "react-redux-firebase";

export const configureStore = () => {
  const middlewares = [thunk.withExtraArgument(getFirebase)];
  const composedEnhancer = composeWithDevTools(applyMiddleware(...middlewares));

  const store = createStore(rootReducer, composedEnhancer);
  return store;
};
