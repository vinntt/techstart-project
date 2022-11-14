import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { scrollToFragment } from "scroll-to-fragment";
import { createBrowserHistory } from "history";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

scrollToFragment({
  // customize the target of a given fragment ID (default is getElementById):
  getElement: (fragmentId) => document.getElementsByName(fragmentId)[0],

  // adjust the scroll position after history PUSH events:
  history: createBrowserHistory(),

  // customize scrolling behavior:
  scrollIntoView: (element) => {
    console.log(element);
    element.scrollIntoView({ behavior: "smooth" })
  },
});

reportWebVitals();
