import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import DocumentTitle from "./DocumentTitle";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <DocumentTitle />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
