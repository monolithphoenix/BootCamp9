import {combineReducers} from 'redux';
import contacts from './contactsReduser';

const rootReduser = combineReducers ({
    contacts,
})

export default rootReduser;