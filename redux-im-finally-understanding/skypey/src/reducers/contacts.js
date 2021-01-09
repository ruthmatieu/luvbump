import { contacts } from '../components/static-data';

/*
Reducer composition requires that a single reducer handles the state 
update for a single field in the state object.
*/
export default (state = { contacts }, action) => {
    return state;
} 