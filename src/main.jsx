import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import MouseContextProvider from "./context/mouse-context";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*     <MouseContextProvider> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </MouseContextProvider> */}
  </React.StrictMode>
);
