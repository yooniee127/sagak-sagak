import { combineReducers } from "redux";
import authReducers from "./auth/authReducer";

const rootReducer = combineReducers({
    authReducers
});

export default rootReducer;