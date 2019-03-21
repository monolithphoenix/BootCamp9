import {combineReducers} from 'redux';
import counter from './counterReducer';
import input from './inputReduser';
import history from './historyReduser.js';
import gallery from './galleryReducer'

const rootReducer = combineReducers({
    counter,
    input,
    history,
    gallery,
})

export default rootReducer;