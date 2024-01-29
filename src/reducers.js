import { combineReducers } from "redux";
import counterReducers from './counterReducer';

const rootReducer = combineReducers({
    conter: counterReducers,
});

export default rootReducer;