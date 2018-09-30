import React, { Component } from "react";
import { Layout } from "antd";

const { Header } = Layout;

class ClientHeader extends Component {
  toggleSider = () => {
    this.props.toggleSider();
  };

  render() {
    return (
      <Header
        style={{
          background: "#fff",
          padding: 0
        }}
        className="header-panel"
      />
    );
  }
}

export default ClientHeader;
