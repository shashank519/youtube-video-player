import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomePage.scss";

class DemoPageOne extends Component {
  render() {
    const { isSiderCollapsed } = this.props;
    return <div>Demo page one {isSiderCollapsed}</div>;
  }
}

const mapStateToProps = ({ HeaderReducer }) => {
  const { isSiderCollapsed } = HeaderReducer;
  return { isSiderCollapsed };
};

export default connect(mapStateToProps)(DemoPageOne);
