import React, { Component } from "react";
import { Card, Form, Icon, Input, Button, Checkbox, message } from "antd";
import { connect } from "react-redux";
import * as Actions from "Actions/LoginActions";

import "./index.scss";
const FormItem = Form.Item;

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (
          values.userName === "shashank@gmail.com" &&
          values.password === "qw"
        ) {
          this.props.onUserLogin(values);
        } else {
          message.error("Invalid Login Credentials.");
        }
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="Login">
        <Card title="Login" bordered={false} className="login-card">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator("userName", {
                rules: [
                  {
                    type: "email",
                    required: true,
                    message: "Please input your username!"
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your Password!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>Remember me</Checkbox>)}
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = ({ LoginReducer }) => {
  const { isUserLoggedIn } = LoginReducer;
  return { isUserLoggedIn };
};

export default connect(
  mapStateToProps,
  Actions
)(Form.create()(Login));
