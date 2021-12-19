import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./app";
import store from "./store/index";

function Main() {
  return (
      <Provider store={store}>
          <App/>
      </Provider>
  )
}

ReactDOM.render(<Main/>, document.getElementById("root"));