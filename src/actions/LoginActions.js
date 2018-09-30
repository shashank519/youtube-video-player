import loginConstants from "Constants/LoginConstants";

export const onUserLogin = values => {
  return { type: loginConstants.login_user, values };
};
