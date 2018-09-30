import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";

import ClientMainLayout from "Hoc/client-main-layout/ClientMainLayout";

const HomePage = Loadable({
  loader: () => import("./home-page/HomePage"),
  loading: () => null
});

class ClientRoutes extends Component {
  render() {
    return (
      <ClientMainLayout>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </ClientMainLayout>
    );
  }
}

export default ClientRoutes;
