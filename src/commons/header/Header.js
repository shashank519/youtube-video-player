import React, { Component } from "react";
import { Layout, Icon } from "antd";
import { connect } from "react-redux";
import * as Actions from "Actions/LoginActions";
import "./Header.scss";

const { Header } = Layout;

class ClientHeader extends Component {
  toggleSider = () => {
    this.props.toggleSider();
  };

  logoutUser = () => {
    localStorage.removeItem("userDetails");
    this.props.onUserLogout();
  };

  render() {
    return (
      <Header
        style={{
          background: "#fff",
          padding: 0
        }}
        className="header-panel"
      >
        <Icon
          type="logout"
          theme="outlined"
          className="logout-icon"
          onClick={this.logoutUser}
        />
      </Header>
    );
  }
}

// const mapStateToProps = ({ LoginReducer }) => {
//   const { isUserLoggedIn, user } = LoginReducer;
//   return { isUserLoggedIn, user };
// };

export default connect(
  null,
  Actions
)(ClientHeader);
