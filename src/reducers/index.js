import { combineReducers } from "redux";
import HeaderReducer from "Reducers/HeaderReducer";
import LoginReducer from "Reducers/LoginReducer";

const appReducers = combineReducers({ HeaderReducer, LoginReducer });

export default appReducers;
