import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import configStore from "./store/configStore";
import { Provider } from "react-redux";
import { startgetUsers } from "./action/userAction";
import { startWeatherData } from "./action/weatherDataAction";
import "mdbreact/dist/css/mdb.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
const store = configStore();

store.subscribe(() => {
  console.log(store.getState());
});

if (store.getState().users.length === 0) {
  store.dispatch(startgetUsers());
  store.dispatch(startWeatherData());
}

console.log(store.getState());
const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("root"));

serviceWorker.unregister();
