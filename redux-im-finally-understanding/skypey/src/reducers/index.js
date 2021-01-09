//we are combining all the reducers in this root file

import user from './user';
import contacts from './contacts';

//we need combineReducers from redux to combine them
import { combineReducers } from "redux";

export default combineReducers({
    user,
    contacts
});
///nn