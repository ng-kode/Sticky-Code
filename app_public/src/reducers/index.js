import { combineReducers } from "redux";
import stickies from './stickiesReducer';

export default combineReducers({
    window: (state={}) => state,
    stickies
})