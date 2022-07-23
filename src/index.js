import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

export const styles = {
  size: "20px",
  strokeWidth: "1px",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
