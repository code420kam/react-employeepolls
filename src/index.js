import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./router/appRouter";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configStore from "./redux/reducers/configStore";
import "bootstrap/dist/css/bootstrap.min.css";

const store = configStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </Router>
  </React.StrictMode>
);
