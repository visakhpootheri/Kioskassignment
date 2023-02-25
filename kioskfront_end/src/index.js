import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import redux from "./components/Redux";
import App from "./components/Navigation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={redux}>
      <App />
    </Provider>
  </React.StrictMode>
);
