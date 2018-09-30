import React, { Component } from "react";
import { Card, Form, Icon, Input, Button, Checkbox, message } from "antd";
import { connect } from "react-redux";
import * as Actions from "Actions/LoginActions";

import SocialButtons from "./social-buttons/SocialButtons";

import "./index.scss";
const FormItem = Form.Item;

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (
          values.userName === "shashank@gmail.com" &&
          values.password === "shashank"
        ) {
          values = {
            ...values,
            firstName: "Shashank",
            lastName: "Dave",
            accessToken: "1q2w3e4r5t6y7u8i9o0p"
          };
          // const token = { accessToken: "1q2w3e4r5t6y7u8i9o0p" };

          localStorage.setItem("userDetails", JSON.stringify(values));
          this.props.onUserLogin(values);
        } else {
          message.error("Invalid Login Credentials.");
        }
      }
    });
  };

  handleSocialLogin = user => {
    localStorage.setItem(
      "userDetails",
      JSON.stringify({ ...user._profile, ...user._token })
    );
    user._profile["accessToken"] = user._token.accessToken;
    console.log("user._profile", user._profile);
    this.props.onUserLogin(user._profile, user._token);
  };

  handleSocialLoginFailure = err => {
    console.error(err);
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

          <SocialButtons
            provider="google"
            appId="942375517894-47iiickf15ai5aeg0s3s0r0r4gn6ugp1.apps.googleusercontent.com"
            onLoginSuccess={this.handleSocialLogin}
            onLoginFailure={this.handleSocialLoginFailure}
          >
            Login With Google+
          </SocialButtons>
          <SocialButtons
            provider="facebook"
            appId="241278759880849"
            onLoginSuccess={this.handleSocialLogin}
            onLoginFailure={this.handleSocialLoginFailure}
          >
            Login With Facebook
          </SocialButtons>
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
