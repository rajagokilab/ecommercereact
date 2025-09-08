import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UnitProvider } from "./context/UnitContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UnitProvider>
      <App />
    </UnitProvider>
  </React.StrictMode>
);
