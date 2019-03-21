import {combineReducers} from 'redux';
import showModal from './showModalReduser';
import lookWhatInInput from './inputValueRedusers';


const rootReduser = combineReducers ({
    showModal,
    lookWhatInInput,
})

export default rootReduser;