import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./CSS/Reset.css";
import "./CSS/App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
