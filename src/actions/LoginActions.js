import loginConstants from "Constants/LoginConstants";

export const onUserLogin = values => {
  return { type: loginConstants.login_user, values };
};

export const onUserLogout = () => {
  return { type: loginConstants.logout_user };
};
