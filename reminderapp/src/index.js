import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { myStore } from "./components/Redux";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
