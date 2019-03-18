import {combineReducers} from 'redux';
import counter from './counterReducer';
import input from './inputReduser';
import history from './historyReduser.js';

const rootReduser = combineReducers({
    counter,
    input,
    history,
})

export default rootReduser;