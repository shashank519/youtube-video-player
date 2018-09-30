import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import ClientRoutes from "Components/client/Routes";
import Login from "Components/login";

export const AppRoutes = props => {
  return (
    <Router>
      <Switch>
        {props.isUserLoggedIn ? (
          <Route path="/" component={ClientRoutes} />
        ) : (
          <Route exact path="/" component={Login} />
        )}
      </Switch>
    </Router>
  );
};

const mapStateToProps = ({ LoginReducer }) => {
  const { isUserLoggedIn } = LoginReducer;
  return { isUserLoggedIn };
};

export default connect(mapStateToProps)(AppRoutes);
