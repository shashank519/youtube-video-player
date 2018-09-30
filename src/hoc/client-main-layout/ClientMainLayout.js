import React, { Component } from "react";
import { Layout } from "antd";

import Header from "Commons/header/Header";
import Footer from "Commons/footer/Footer";

import "./ClientMainLayout.scss";

const { Content } = Layout;

class ClientMainLayout extends Component {
  render() {
    return (
      <Layout className="client-main-layout">
        <Layout>
          <Header />
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            {this.props.children}
          </Content>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}

export default ClientMainLayout;
