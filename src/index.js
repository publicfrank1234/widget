import React from "react";
import ReactDOM from "react-dom"; // Use 'react-dom' instead of 'react-dom/client'
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // Ensure this ID matches the one in your HTML
);
