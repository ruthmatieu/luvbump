import { generateUser } from '../components/static-data';

export default function user(state = generateUser(), action){
    return state;
}