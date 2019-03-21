import {combineReducers} from 'redux';
import showModal from './showModalReduser';
import lookWhatInInput from './inputValueRedusers';
import contactCardArray from './saveContactCardReduser'


const rootReduser = combineReducers ({
    showModal,
    lookWhatInInput,
    contactCardArray,
})

export default rootReduser;