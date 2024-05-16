// frontend/src/store/index.js
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import { thunk } from "redux-thunk";

import sessionReducer from "./session";
import locationReducer from "./location";
import imageReducer from "./image";
import bookingsReducer from "./booking";
import "../index.css";

const rootReducer = combineReducers({
  session: sessionReducer,
  location: locationReducer,
  image: imageReducer,
  booking: bookingsReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
