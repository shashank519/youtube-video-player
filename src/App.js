import React, { Component } from "react";
import { Provider } from "react-redux";

import configureStore from "Store";
import AppRoutes from "./Routes";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    );
  }
}

export default App;
