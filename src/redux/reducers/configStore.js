import {applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

export default function configStore() {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
}
