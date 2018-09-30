import { combineReducers } from "redux";
import HeaderReducer from "Reducers/HeaderReducer";
import LoginReducer from "Reducers/LoginReducer";
import HomePageReducer from "Reducers/HomePageReducer";

const appReducers = combineReducers({
  HeaderReducer,
  LoginReducer,
  HomePageReducer
});

export default appReducers;
