import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import GlobalStyles from "styles/globalStyles";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <GlobalStyles />
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
