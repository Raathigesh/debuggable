import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import App from "./App";
import "./App.css";

if (process.env.NODE_ENV === "production") {
  ReactGA.initialize("UA-108352892-1");
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}

ReactDOM.render(<App />, document.getElementById("root"));
