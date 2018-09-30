import React, { Component } from "react";
import { Layout } from "antd";

const { Footer } = Layout;

class ClientFooter extends Component {
  render() {
    return (
      <Footer
        style={{
          background: "grey",
          padding: "5px 0",
          textAlign: "center"
        }}
      >
        Footer content will come here.
      </Footer>
    );
  }
}

export default ClientFooter;
