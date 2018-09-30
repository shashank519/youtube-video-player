import loginConstants from "Constants/LoginConstants";

const initialState = {
  isUserLoggedIn: false,
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case loginConstants.login_user:
      return {
        ...state,
        isUserLoggedIn: true,
        user: action.values
      };
    default:
      return state;
  }
};
