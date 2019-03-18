import React from 'react';
import {connect} from 'react-redux';
import {change, clear} from '../redux/actions/inputAction';
import {addObj} from '../redux/actions/historyAction';
import './Form.css';


const Form = ({change, input, save, clear}) => {
    const formSubmit = (e) => {
        save(e, input);
        clear();
    };
    return (
        <form className="form" onSubmit={formSubmit}>
            <input type="text" value={input} onChange={change}/>
            <button>Save</button>
        </form>
    );
};

function mapStateToProps (state) {
    return {
        input: state.input,
    }
}

function mapDispatchToProps (dispatch) {
    return{
        change: function(e) {
            dispatch(change(e))
        },
        save: function(e, text) {
            e.preventDefault();
            dispatch(addObj(text));

        },
        clear: function() {
            dispatch(clear())
        },
    } 
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);