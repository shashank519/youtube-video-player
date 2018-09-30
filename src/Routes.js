import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as Actions from "Actions/LoginActions";

import ClientRoutes from "Components/client/Routes";
import Login from "Components/login";

class AppRoutes extends React.Component {
  constructor(props) {
    super(props);
    this.localstorageInfo = JSON.parse(localStorage.getItem("userDetails"));
    if (this.localstorageInfo) {
      this.props.onUserLogin(this.localstorageInfo);
    }
  }

  render() {
    const { isUserLoggedIn, user } = this.props;
    return (
      <Router>
        <Switch>
          {isUserLoggedIn && user.accessToken && user.accessToken.length ? (
            <Route path="/" component={ClientRoutes} />
          ) : (
            <Route exact path="/" component={Login} />
          )}
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = ({ LoginReducer }) => {
  const { isUserLoggedIn, user } = LoginReducer;
  return { isUserLoggedIn, user };
};

export default connect(
  mapStateToProps,
  Actions
)(AppRoutes);
