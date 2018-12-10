import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "semantic-ui-css/semantic.min.css";
import "./styles.css";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { Provider } from "react-redux";

const logger = createLogger({
  diff: true,
  collapsed: true
});
const store = createStore(rootReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
