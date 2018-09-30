import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";

import appReducers from "Reducers";

export default function configureStore() {
  const middlewares = [thunkMiddleware, logger];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(appReducers, composedEnhancers);

  return store;
}

// import { createStore } from "redux";
// import appReducers from "Reducers";
// // const store = createStore(appReducers, window.STATE_FROM_SERVER);
// const store = createStore(appReducers);
// export default store;
