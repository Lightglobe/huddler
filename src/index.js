import React from "react";
import ReactDOM from "react-dom";
import App from "./app/layout/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./app/store/configureStore";
import ScrollToTop from "./app/common/util/ScrollToTop";
const store = configureStore();

console.log(store.getState());

let render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <ScrollToTop>
            <App />
          </ScrollToTop>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

if (module.hot) {
  module.hot.accept("./app/layout/App.js", () => {
    setTimeout(render);
  });
}

render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
